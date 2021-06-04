import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('projects', { title: 'Projects', projectList: {name: "Graaho", image: "Assets/images/company-image2.png", descriptioon: "Company website made with angular, html, css", link: "https://www.graaho.com/"}  });

});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact' });
});
//module.exports = router;