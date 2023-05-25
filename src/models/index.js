// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Report, User } = initSchema(schema);

export {
  Report,
  User
};