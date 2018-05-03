import express from 'express';
import Debug from 'debug';
import { param, validationResult } from 'express-validator/check';

const debug = Debug('node-app-starter:server');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get(
  '/:id',
  [param('id').isNumeric().withMessage('must be numeric')],
  (req, res) => {
    try {
      validationResult(req).throw();
      debug(req.params.id);
      res.status(200).json({
        id: parseInt(req.params.id, 0),
        name: 'Will English IV',
      });
    } catch (err) {
      debug(err);
      res.status(400).json({ errors: err.mapped() });
    }
  },
);

export default router;
