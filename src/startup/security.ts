import cors from 'cors';
import { Express } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const securitySetup = (app: Express, express: any) => {
  /* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
  app.use(cors()).use(express.json());
  /* eslint-enable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
};

export default securitySetup;
