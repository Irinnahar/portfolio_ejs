var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', {
        title: 'Projects',
        projectList: [
            { image: "Assets/images/company-img2.png", description: "A social networking platform for businesses like B2B and B2C.We have used HTML5, CSS, SASS, Angular material, AngularJS, typescript, and Node js for this project", link: "https://www.seebiz.com/" },
            { image: "Assets/images/company-img1.png", description: "This is a company's website.We use the latest technogoly here like angular, html, css. This is a responsive website. I have work on both frondened and backend in this project.", link: "https://www.graaho.com/" },
            { image: "Assets/images/company-img3.png", description: "This is tourism based website.This Website made with HTML, CSS, Javascript, Wordpress, PHP. This one is a responsive website. I worked as a frontend developer in this project.", link: "https://adventurewild.com.au/" }
        ]
    });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});
//module.exports = router;
module.exports = router;