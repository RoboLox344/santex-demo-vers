const pool = require('../config/db');

class OrderController {

    async createCart(req, res) {
        try {
            const { delivery_type, products } = req.body;

            if (!req.session.cart) {
                req.session.cart = { products: [], totalPrice: 0 };
            }

            let totalPrice = req.session.cart.totalPrice;

            for (const product of products) {
                const { product_id, quantity } = product;

                const productData = await pool.query(
                    `SELECT p.price, p.name, i.filename FROM Product p join product_images i on p.product_id=i.product_id WHERE p.product_id = $1 AND i.image_type = 'main_image'`,
                    [product_id]
                );
                if (productData.rows.length === 0) {
                    return res.status(404).json({ message: `Product with ID ${product_id} not found` });
                }

                const productPrice = productData.rows[0].price;
                const productImage = productData.rows[0].filename;
                const productName = productData.rows[0].name;

                let existingProduct = req.session.cart.products.find(p => p.product_id === product_id);

                if (existingProduct) {
                    existingProduct.quantity += quantity;
                } else {
                    req.session.cart.products.push({
                        product_id,
                        productName,
                        productImage,
                        quantity,
                        productPrice
                    });
                }

                totalPrice += productPrice * quantity;
            }

            req.session.cart.totalPrice = totalPrice;
            req.session.cart.delivery_type = delivery_type;

            res.status(200).json({ message: 'Товары добавлены в корзину', cart: req.session.cart });

                
           
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async CartToOrder(req, res) {
        
        try {
            const profile_id = req.session.userId;
            if (!profile_id) {
                return res.status(401).json({ message: 'Unauthorized. Please log in to complete the order.' });
            }
    
            let orderId = null;
    
            if (req.session.cart) {
                const sessionCart = req.session.cart;
    
                if (!sessionCart || sessionCart.products.length === 0) {
                    return res.status(400).json({ message: 'No active cart found' });
                }
    
                const totalPrice = sessionCart.totalPrice;
                const { delivery_type, delivery_address, phone, payment } = req.body;
    
                const newOrder = await pool.query(
                    `INSERT INTO Orders (profile_id, order_date, delivery_type, status,  total_price, delivery_address, phone, payment)
                     VALUES ($1, now(), $2, 'Заказ создан', $3, $4, $5, $6)
                     RETURNING order_id`,
                    [profile_id, delivery_type, totalPrice, delivery_address, phone, payment]
                );
    
                orderId = newOrder.rows[0].order_id;
                prof  = orderId
                
                
    
                // Добавляем товары из сессионной корзины в заказ
                for (const product of sessionCart.products) {
                    await pool.query(
                        `INSERT INTO Order_Composition (order_id, product_id, quantity)
                         VALUES ($1, $2, $3)`,
                        [orderId, product.product_id, product.quantity]
                    );
                }
    
                // Очищаем сессионную корзину
                delete req.session.cart;
    
                res.status(201).json({ message: 'Order created successfully from session cart', orderId });
            } else {
                // Если нет ни активного заказа, ни сессионной корзины
                
                return res.status(400).json({ message: 'No active cart or order found' });
            }
        } catch (err) {
            console.error(err.message);
            
            res.status(500).json({ error: 'Server error' });
        }
    }
    

    async getCartByUser(req, res) {
        try {
            const sessionCart = req.session.cart;

            if (!sessionCart || sessionCart.products.length === 0) {
                return res.status(200).json({
                    message: 'Корзина пуста',
                    totalPrice: 0,
                    products: []
                });
            }

            return res.status(200).json({
                message: 'Корзина из сессии',
                totalPrice: sessionCart.totalPrice,
                products: sessionCart.products
            });
    
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Ошибка сервера' });
        }
    }
    
    async deleteItemFromCart(req, res) {
        try {
            const productId = req.params.product_id; 
            if (!req.session.cart || req.session.cart.products.length === 0) {
                return res.status(404).json({ message: 'Корзина пуста или не существует' });
            }

            const productIndex = req.session.cart.products.findIndex(product => product.product_id == productId);

            if (productIndex === -1) {
                return res.status(404).json({ message: `Товар с ID ${productId} не найден в корзине` });
            }

            const removedProduct = req.session.cart.products.splice(productIndex, 1);

            req.session.cart.totalPrice -= removedProduct[0].productPrice * removedProduct[0].quantity;
    
            res.status(200).json({ message: 'Товар успешно удалён', cart: req.session.cart });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Ошибка сервера' });
        }
    }

    async updateQuantityItemCart(req, res) {
        try {
            const productId = req.params.product_id;
            const newQuantity = parseInt(req.body.quantity); 
            if (!req.session.cart || req.session.cart.products.length === 0) {
                return res.status(404).json({ message: 'Корзина пуста или не существует' });
            }

            const productIndex = req.session.cart.products.findIndex(product => product.product_id == productId);
    
            if (productIndex === -1) {
                return res.status(404).json({ message: `Товар с ID ${productId} не найден в корзине` });
            }

            const product = req.session.cart.products[productIndex];

            if (newQuantity <= 0) {
                return res.status(400).json({ message: 'Количество товара должно быть больше нуля' });
            }

            req.session.cart.totalPrice -= product.productPrice * product.quantity;

            product.quantity = newQuantity;

            req.session.cart.totalPrice += product.productPrice * newQuantity;
    
            res.status(200).json({ message: 'Количество товара обновлено', cart: req.session.cart });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Ошибка сервера' });
        }
    }

    async getAllOrders(req, res) {
        try {
            const allOrders = await pool.query(`SELECT * FROM Orders`);
            res.json(allOrders.rows);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async getOrdersByUser(req, res) {
        try {
            const { profile_id } = req.params;
            const userOrders = await pool.query(
                `SELECT * FROM Orders WHERE profile_id = $1`,
                [profile_id]
            );
            res.json(userOrders.rows);
            
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async getOrderById(req, res) {
        try {
            const { id } = req.params;
            const order = await pool.query(
                `SELECT * FROM Orders WHERE order_id = $1`,
                [id]
            );

            if (order.rows.length === 0) {
                return res.status(404).json({ message: 'Order not found' });
            }

            const orderComposition = await pool.query(
                `SELECT * FROM Order_Composition WHERE order_id = $1`,
                [id]
            );

            res.json({
                order: order.rows[0],
                products: orderComposition.rows
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async updateOrderStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const updatedOrder = await pool.query(
                `UPDATE Orders SET status = $1 WHERE order_id = $2 RETURNING *`,
                [status, id]
            );

            if (updatedOrder.rows.length === 0) {
                return res.status(404).json({ message: 'Order not found' });
            }

            res.json({ message: 'Order status updated', order: updatedOrder.rows[0] });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async updateOrderDeliveryDate(req, res) {
        try {
            const { id } = req.params;
            const { delivery_time } = req.body;

            const updatedOrder = await pool.query(
                `UPDATE Orders SET delivery_time = $1 WHERE order_id = $2 RETURNING *`,
                [delivery_time, id]
            );

            if (updatedOrder.rows.length === 0) {
                return res.status(404).json({ message: 'Order not found' });
            }

            res.json({ message: 'Order delivery time updated', order: updatedOrder.rows[0] });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async deleteOrder(req, res) {
        try {
            const { id } = req.params;
            await pool.query(
                `DELETE FROM Order_Composition WHERE order_id = $1`,
                [id]
            );
            const deleteOrder = await pool.query(
                `DELETE FROM Orders WHERE order_id = $1 RETURNING *`,
                [id]
            );
            if (deleteOrder.rows.length === 0) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json({ message: 'Order deleted successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new OrderController();
