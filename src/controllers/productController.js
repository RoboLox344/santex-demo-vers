const pool = require('../config/db');

class ProductController {
    async createTowelWarmer(req, res) {
        const client = await pool.connect();
        try {
            const {
                sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc,
                warmer_type, form, installation, additional_functions, equipment, working_pressure, connection_direction, heating_area, heat_output,
                max_temperature, power, test_pressure, connection_type, max_pressure, number_of_sections, depth, length, width, height
            } = req.body;

            await client.query('BEGIN');

            const newProduct = await client.query(
                `INSERT INTO product 
                (sku, name, brand_id, model, product_type, description, color, category, kind, price, availability, warranty, disc) 
                VALUES ($1, $2, (SELECT brand_id FROM brand WHERE name=$3), $4, 'Towel Warmer', $5, $6, $7, $8, $9, $10, $11, $12) 
                RETURNING *`,
                [sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc]
            );

            const productId = newProduct.rows[0].product_id;

            await client.query(
                `INSERT INTO towel_warmer_attributes 
                (product_id, warmer_type, form, installation, additional_functions, equipment, warranty, working_pressure, connection_direction, heating_area, heat_output, max_temperature, power, test_pressure, connection_type, max_pressure, number_of_sections, depth, length, width, height)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)`,
                [productId, warmer_type, form, installation, additional_functions, equipment, warranty, working_pressure, connection_direction, heating_area, heat_output, max_temperature, power, test_pressure, connection_type, max_pressure, number_of_sections, depth, length, width, height]
            );

            await client.query('COMMIT');
            res.status(201).json(newProduct.rows[0]);
        } catch (err) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: err.message });
        } finally {
            client.release();
        }
    }

    async createToilet(req, res) {
        const client = await pool.connect();
        try {
            const {
                sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc,
                material, rimless, installation, flush_mode, seat_cover_included, seat_with_microlift, additional_functions, equipment, button_color, bowl_height, outlet_direction, design_lines, length, width, height, weight
            } = req.body;

            await client.query('BEGIN');

            const newProduct = await client.query(
                `INSERT INTO product 
                (sku, name, brand_id, model, product_type, description, color, category, kind, price, availability, warranty, disc) 
                VALUES ($1, $2, (SELECT brand_id FROM brand WHERE name=$3), $4, 'Toilet', $5, $6, $7, $8, $9, $10, $11, $12) 
                RETURNING *`,
                [sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc]
            );

            const productId = newProduct.rows[0].product_id;

            await client.query(
                `INSERT INTO toilet_attributes 
                (product_id, material, rimless, installation, flush_mode, seat_cover_included, seat_with_microlift, additional_functions, equipment, button_color, bowl_height, outlet_direction, design_lines, length, width, height, weight)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
                [productId, material, rimless, installation, flush_mode, seat_cover_included, seat_with_microlift, additional_functions, equipment, button_color, bowl_height, outlet_direction, design_lines, length, width, height, weight]
            );

            await client.query('COMMIT');
            res.status(201).json(newProduct.rows[0]);
        } catch (err) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: err.message });
        } finally {
            client.release();
        }
    }


    async createUrinal(req, res) {
        const client = await pool.connect();
        try {
            const {
                sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc, 
                control_type, form, installation, equipment, water_supply, flush_device, requires_installation_system, design_style, outlet_direction, depth, width, height
            } = req.body;

            await client.query('BEGIN');

            const newProduct = await client.query(
                `INSERT INTO product 
                (sku, name, brand_id, model, product_type, description, color, category, kind, price, availability, warranty, disc) 
                VALUES ($1, $2, (SELECT brand_id FROM brand WHERE name=$3), $4, 'Urinal', $5, $6, $7, $8, $9, $10, $11, $12) 
                RETURNING *`,
                [sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc]
            );

            const productId = newProduct.rows[0].product_id;

            await client.query(
                `INSERT INTO urinal_attributes 
                (product_id, control_type, form, installation, equipment, water_supply, flush_device, requires_installation_system, design_style, outlet_direction, depth, width, height)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
                [productId, control_type, form, installation, equipment, water_supply, flush_device, requires_installation_system, design_style, outlet_direction, depth, width, height]
            );

            await client.query('COMMIT');
            res.status(201).json(newProduct.rows[0]);
        } catch (err) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: err.message });
        } finally {
            client.release();
        }
    }

    async updateTowelWarmer(req, res) {
        const client = await pool.connect();
        try {
            const {
                product_id, sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc,
                warmer_type, form, installation, additional_functions, equipment, working_pressure, connection_direction, heating_area, heat_output,
                max_temperature, power, test_pressure, connection_type, max_pressure, number_of_sections, depth, length, width, height
            } = req.body;

            await client.query('BEGIN');

            const updatedProduct = await client.query(
                `UPDATE product SET 
                sku = $2, name = $3, brand_id = (SELECT brand_id FROM brand WHERE name = $4), model = $5, description = $6, color = $7, 
                category = $8, kind = $9, price = $10, availability = $11, warranty = $12 , disc = $13
                WHERE product_id = $1 RETURNING *`,
                [product_id, sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc]
            );

            const updatedAttributes = await client.query(
                `UPDATE towel_warmer_attributes SET 
                warmer_type = $2, form = $3, installation = $4, additional_functions = $5, equipment = $6, working_pressure = $7, 
                connection_direction = $8, heating_area = $9, heat_output = $10, max_temperature = $11, power = $12, 
                test_pressure = $13, connection_type = $14, max_pressure = $15, number_of_sections = $16, depth = $17, 
                length = $18, width = $19, height = $20 
                WHERE product_id = $1`,
                [product_id, warmer_type, form, installation, additional_functions, equipment, working_pressure, connection_direction, heating_area, heat_output, max_temperature, power, test_pressure, connection_type, max_pressure, number_of_sections, depth, length, width, height]
            );

            await client.query('COMMIT');
            res.json(updatedProduct.rows[0]);
        } catch (err) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: err.message });
        } finally {
            client.release();
        }
    }

    async updateToilet(req, res) {
        const client = await pool.connect();
        try {
            const {
                product_id, sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc,
                material, rimless, installation, flush_mode, seat_cover_included, seat_with_microlift, additional_functions, equipment,
                button_color, bowl_height, outlet_direction, design_lines, length, width, height, weight
            } = req.body;

            await client.query('BEGIN');

            const updatedProduct = await client.query(
                `UPDATE product SET 
                sku = $2, name = $3, brand_id = (SELECT brand_id FROM brand WHERE name = $4), model = $5, description = $6, color = $7, 
                category = $8, kind = $9, price = $10, availability = $11, warranty = $12, disc = $13 
                WHERE product_id = $1 RETURNING *`,
                [product_id, sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc]
            );

            const updatedAttributes = await client.query(
                `UPDATE toilet_attributes SET 
                material = $2, rimless = $3, installation = $4, flush_mode = $5, seat_cover_included = $6, seat_with_microlift = $7, 
                additional_functions = $8, equipment = $9, button_color = $10, bowl_height = $11, outlet_direction = $12, 
                design_lines = $13, length = $14, width = $15, height = $16, weight = $17 
                WHERE product_id = $1`,
                [product_id, material, rimless, installation, flush_mode, seat_cover_included, seat_with_microlift, additional_functions, equipment, button_color, bowl_height, outlet_direction, design_lines, length, width, height, weight]
            );

            await client.query('COMMIT');
            res.json(updatedProduct.rows[0]);
        } catch (err) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: err.message });
        } finally {
            client.release();
        }
    }

    async updateUrinal(req, res) {
        const client = await pool.connect();
        try {
            const {
                product_id, sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc,
                control_type, form, installation, equipment, water_supply, flush_device, requires_installation_system, 
                design_style, outlet_direction, depth, width, height
            } = req.body;

            await client.query('BEGIN');

            const updatedProduct = await client.query(
                `UPDATE product SET 
                sku = $2, name = $3, brand_id = (SELECT brand_id FROM brand WHERE name = $4), model = $5, description = $6, color = $7, 
                category = $8, kind = $9, price = $10, availability = $11, warranty = $12, disc = $13 
                WHERE product_id = $1 RETURNING *`,
                [product_id, sku, name, brand_name, model, desc, color, category, kind, price, availability, warranty, disc]
            );

            const updatedAttributes = await client.query(
                `UPDATE urinal_attributes SET 
                control_type = $2, form = $3, installation = $4, equipment = $5, water_supply = $6, flush_device = $7, 
                requires_installation_system = $8, design_style = $9, outlet_direction = $10, depth = $11, width = $12, 
                height = $13 
                WHERE product_id = $1`,
                [product_id, control_type, form, installation, equipment, water_supply, flush_device, requires_installation_system, design_style, outlet_direction, depth, width, height]
            );

            await client.query('COMMIT');
            res.json(updatedProduct.rows[0]);
        } catch (err) {
            await client.query('ROLLBACK');
            res.status(500).json({ error: err.message });
        } finally {
            client.release();
        }
    }

    async getMainProducts(req, res) {
        try {
            const productshits = await pool.query(`
                select p.product_id,
                    p.price,
                    p.disc AS sale,
                    p.name,
                    p.sku,
                    pi.filename as main_image,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
				where p.product_id in (select product_id from order_composition group by product_id order by sum(quantity) desc 
                limit 10)
            `);
            
            const products = await pool.query(`
                SELECT 
                    p.product_id AS id,
                    p.price,
                    p.disc AS sale,
                    p.name,
                    p.sku,
                    pi.filename as main_image,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id
                WHERE p.disc != 0 and pi.image_type = 'main_image' order by sale desc limit 8
            `);
            res.render('index', { title: 'Ventil', products: products.rows, productshits: productshits.rows  });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async getMainProductsHeating(req, res) {
        try {
            const productshits = await pool.query(`
                select p.product_id,
                    p.price,
                    p.disc AS sale,
                    p.name,
                    p.sku,
                    pi.filename as main_image,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
				where p.product_id in (select product_id from order_composition group by product_id order by sum(quantity) desc 
                limit 10) and pi.image_type = 'main_image'
            `);
            
            const products = await pool.query(`
                SELECT 
                    p.product_id AS id,
                    p.price,
                    p.disc AS sale,
                    p.name,
                    p.sku,
                    pi.filename as main_image,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id
                WHERE p.disc != 0 and pi.image_type = 'main_image' order by sale desc limit 8
            `);
            res.render('heating', { title: 'Ventil', products: products.rows, productshits: productshits.rows  });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    

    async getHitsProducts(req, res) {
        
    }

    async getAllProducts(req, res) {
        try {
            const result = await pool.query(`
                SELECT 
                    p.*,
                    p.product_id as id,
                    twa.*,
                    ta.*, 
                    ua.*,
                    pi.filename as img,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
            `);
            res.json(result.rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAllTowelWarmerProducts(req, res) {
        try {
            const result = await pool.query(`
                SELECT 
                    p.*, 
                    twa.*,
                    pi.filename as img,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                where twa.product_id is not null
            `);
            res.render('subCatalog', { title: 'TowelWarmer', product: result.rows });
            /* res.json(result.rows); */
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async getAllTowelWarmerProductsRender(req, res) {
        try {
            const result = await pool.query(`
                SELECT 
                    p.*, 
                    twa.*,
                    pi.filename as img,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                where twa.product_id is not null
            `);
            res.json(result.rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAllUrinalProducts(req, res) {
        try {
            const result = await pool.query(`
                SELECT 
                    p.*, 
                    ua.*,
                    pi.filename as img,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
                where ua.product_id is not null
            `);
            res.render('subCatalog', { title: 'Urinal', product: result.rows });
            /* res.json(result.rows); */
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async getAllUrinalProductsRender(req, res) {
        try {
            const result = await pool.query(`
                SELECT 
                    p.*, 
                    ua.*,
                    pi.filename as img,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
                where ua.product_id is not null
            `);
            res.json(result.rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAllToiletProducts(req, res) {
        try {
            const result = await pool.query(`
                SELECT 
                    p.*, 
                    ta.*,
                    pi.filename as img,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                where ta.product_id is not null
            `);
            res.render('subCatalog', { title: 'Toilet', product: result.rows });
            
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async getAllToiletProductsRender(req, res) {
        try {
            const result = await pool.query(`
                SELECT 
                    p.*, 
                    ta.*,
                    pi.filename as img,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                where ta.product_id is not null
            `);
            res.json(result.rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProductByName(req, res) {
        try {
            const { name } = req.params;
            const product = await pool.query(`
                SELECT 
                    p.*, 
                    twa.*, 
                    ta.*, 
                    ua.*,
                    p.price - (p.price * (p.disc / 100)) AS final_price
                FROM product p
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
                WHERE p.name ILIKE $1`,
                [`%${name}%`]
            );

            if (product.rows.length > 0) {
                res.json(product.rows);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProductBySku(req, res) {
        try {
            const { sku } = req.params;
            const product = await pool.query(`
                SELECT 
                    p.*, 
                    twa.*, 
                    ta.*, 
                    ua.*,
                    p.price - (p.price * (p.disc / 100)) AS final_price
                FROM product p
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
                WHERE p.sku ILIKE $1`,
                [`%${sku}%`]
            );

            if (product.rows.length > 0) {
                res.json(product.rows);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const productshits = await pool.query(`
                select p.product_id,
                    p.price,
                    p.disc AS sale,
                    p.name,
                    p.sku,
                    pi.filename as main_image,
					round(p.price - (p.price * (p.disc / 100)), 0)  AS final_price
                FROM product p
                left join product_images pi on p.product_id = pi.product_id 
				where p.product_id in (select product_id from order_composition group by product_id order by sum(quantity) desc 
                limit 10) and pi.image_type = 'main_image'
            `);

            const product = await pool.query(`
                SELECT 
                    p.*, 
                    twa.*, 
                    ta.*, 
                    ua.*,
                    pi.filename as main_image,
                    p.price - (p.price * (p.disc / 100)) AS final_price
                FROM product p
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
                LEFT JOIN product_images pi ON p.product_id = pi.product_id
                WHERE p.product_id = $1 
                AND pi.image_type = 'main_image'`,
                [id]
            );

            if (product.rows.length > 0) {
                res.render('productPage', { title: 'Product', product: product.rows[0] ,productshits: productshits.rows});
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async getProductByIdRender(req, res) {
        try {
            const { id } = req.params;
            const product = await pool.query(`
                SELECT 
                    p.*, 
                    twa.*, 
                    ta.*, 
                    ua.*,
                    p.price - (p.price * (p.disc / 100)) AS final_price
                FROM product p
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
                WHERE p.product_id = $1`,
                [id]
            );

            if (product.rows.length > 0) {
                res.render('productPage', { title: 'Product', product: product.rows[0] });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;

            const deletedProduct = await pool.query('DELETE FROM product WHERE product_id = $1 RETURNING *', [id]);

            if (deletedProduct.rows.length > 0) {
                res.json({ message: 'Product deleted successfully' });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async getProductByBrandID(req, res) {
        try {
            const { id } = req.params; 
            const product = await pool.query(`
                SELECT 
                    p.*, 
                    twa.*, 
                    ta.*, 
                    ua.*,
                    p.price - (p.price * (p.disc / 100)) AS final_price
                FROM product p
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
                WHERE brand_id = $1
            `, [id]); 
    
            res.json(product.rows); 
        } catch (error) {
            res.status(500).json({ error: error.message }); 
        }
    }
    async getProductSubCategoryByBrandID(req, res){
        try {
            const { category ,id } = req.params; 
            
            const product = await pool.query(`
                SELECT 
                    p.*, 
                    twa.*, 
                    ta.*, 
                    ua.*, 
                    p.price - (p.price * (p.disc / 100)) AS final_price
                FROM product p
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
                WHERE 
                    p.brand_id = $1 
                    AND p.product_type = $2
                      
                        
            `, [id, category]); 
    
            res.json(product.rows); 
        } catch (error) {
            res.status(500).json({ error: error.message }); 
        }
    }
    async getProductByIdJson(req, res) {
        try {
            const { id } = req.params;
            const product = await pool.query(`
                SELECT 
                    p.*, 
                    twa.*, 
                    ta.*, 
                    ua.*,
                    p.price - (p.price * (p.disc / 100)) AS final_price
                FROM product p
                LEFT JOIN towel_warmer_attributes twa ON p.product_id = twa.product_id
                LEFT JOIN toilet_attributes ta ON p.product_id = ta.product_id
                LEFT JOIN urinal_attributes ua ON p.product_id = ua.product_id
                WHERE p.sku = $1`,
                [id]
            );

            if (product.rows.length > 0) {
                res.json(product.rows[0]);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ProductController();


