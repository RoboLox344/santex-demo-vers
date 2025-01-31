const express = require('express'); 
const bodyParser = require('body-parser'); 
const session = require('express-session'); 

const bcrypt = require('bcrypt');
const helmet = require('helmet');
const cors = require('cors');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const brandRoutes = require('./src/routes/brandRoutes');
const productRoutes = require('./src/routes/productRoutes');
const deliveryRoutes = require('./src/routes/deliveryRoutes');
const imageRoutes = require('./src/routes/imageRoutes');
const ordersRoutes = require('./src/routes/ordersRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');
const profileRoutes = require('./src/routes/profileRoutes');
const heatingRoutes = require('./src/routes/heatingRoutes');
const productPage = require('./src/routes/productRoutes');
const deliveryInfoRoutes = require('./src/routes/staticRootes')
/* const subCatalog = require('./src/routes/productRoutes'); */

const app = express(); // Создаем экземпляр приложения Express

// Настройка EJS как шаблонизатора
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.json()); // Парсинг JSON
app.use(bodyParser.urlencoded({ extended: true })); // Парсинг URL-кодированных данных
app.use(cookieParser());
app.use(express.static('public'));

app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production', // Использовать secure cookies в продакшене
    httpOnly: true, // Защита от XSS
    sameSite: 'strict' // Защита от CSRF
  }
}));

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
      connectSrc: ["'self'", 'http://suggestions.dadata.ru'], 
  }
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 1000, // Максимум 100 запросов с одного IP
  message: 'Слишком много запросов с этого IP, попробуйте позже'
});
app.use(limiter);

// CSRF Protection
// const csrfProtection = csrf({ cookie: true });

// // Применение CSRF защиты только к маршрутам представлений
// app.use(['/view', '/another-view-route'], csrfProtection); // Укажите маршруты для представлений

// // Middleware для передачи CSRF-токена в шаблоны
// app.use((req, res, next) => {
//     if (req.csrfToken) {
//         res.locals.csrfToken = req.csrfToken(); // для шаблонов
//         res.cookie('XSRF-TOKEN', req.csrfToken()); // для AJAX запросов
//     }
//     next();
// });

// Подключение маршрутов API
app.use('/', productRoutes);
app.use('/', brandRoutes);
app.use('/', deliveryRoutes);
app.use('/', imageRoutes);
app.use('/', ordersRoutes);
app.use('/', reviewRoutes);
app.use('/', profileRoutes);
app.use('/', heatingRoutes);
app.use('/', productPage);
app.use('/', deliveryInfoRoutes);


/**Static*/
app.get('/shippingInformation', (req, res) => {
  res.render('shippingInformation'); 
});//инфа доставка

// Глобальная обработка ошибок
app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    // Обработка ошибок CSRF
    return res.status(403).send('Неверный CSRF токен');
  }
  console.error(err.stack);
  res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

// Настройка CORS
app.use(cors());

/* app.get('/brands', (req, res) => {

  res.render('brands');
  
  }); */

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
