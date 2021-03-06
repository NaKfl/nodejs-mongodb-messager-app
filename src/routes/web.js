import express from 'express';
import { home, auth } from './../controllers';
const router = express.Router();

const initRoutes = (app) => {
  router.get('/', home.getHome);
  router.get('/login-register', auth.getLoginRegister);
  router.get('/logout', auth.getLogout);

  return app.use('/', router);
};

module.exports = initRoutes;
