import cors from 'cors';
import { Express } from 'express';

const securitySetup = (app: Express) =>
  app
  .use(cors())

export default securitySetup;