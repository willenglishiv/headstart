import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/ping', (req, res) => {
  res.send('Pong');
});

router.get('/status', (req, res) => {
  res.send('Ok');
});

export default router
