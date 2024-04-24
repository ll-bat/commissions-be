import express from 'express';

const app = express();
import './loadDotenv';
import appSetup from './startup/init';
import routerSetup from './startup/router';
import securitySetup from './startup/security';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
appSetup(app);
securitySetup(app, express);
routerSetup(app);
