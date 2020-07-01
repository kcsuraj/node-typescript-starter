import { IUser } from '../models';
import { userModel } from '../models';
import MongooseService from './mongooseService';

const mongoseService = new MongooseService(userModel);

/**
 * Create a user
 * @param { IUser } user
 * @returns {Promise<IUser>}
 */
function createUser(user: IUser) {
  return mongoseService.create(user);
}

export { createUser };
