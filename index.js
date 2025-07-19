//index.js
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

const portfolioRouter = require('./routes/portfolioRouter');
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'layout'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/portfolio', portfolioRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
})

