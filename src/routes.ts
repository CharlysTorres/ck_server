import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import BrawStarsControllers from './controllers/BrawStarsControllers';
import ClashRoyaleControllers from './controllers/ClashRoyaleController';
import PaladinsControllers from './controllers/PaladinsController';
import UserController from './controllers/UserController';
import FortniteController from './controllers/FortniteController';

const routes = Router();

const authenticateUserController = new AuthenticateUserController;

// User
routes.post('/user/create', UserController.create);
routes.post('/user/forgot-password', UserController.forgotPassword);

// authenticate
routes.post('/login', authenticateUserController.handle);

// Brawl Stars
routes.get('/brawlstars/battlelog', BrawStarsControllers.battleLog);
routes.get('/brawlstars/player', BrawStarsControllers.player);

// Clash Royale
routes.get('/clashroyale/battlelog', ClashRoyaleControllers.battleLog);
routes.get('/clashroyale/player', ClashRoyaleControllers.player);

// Paladins
routes.get('/paladins/player', PaladinsControllers.getPlayer);

// Fortnite
routes.get('/fortnite/stats', FortniteController.getStatus);

export default routes;
