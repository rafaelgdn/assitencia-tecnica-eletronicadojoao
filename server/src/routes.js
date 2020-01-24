import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import User from './app/models/User';

import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Rafael Carvalho',
    email: 'rafaeldecarvalho.ps@gmail.com',
    password_hash: '123456',
  });

  res.json(user);
});

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
