import userModel, { IUser } from './userModel';
import { MongooseService } from '../../services';

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
