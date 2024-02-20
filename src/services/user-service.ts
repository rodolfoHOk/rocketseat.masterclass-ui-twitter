import { UserModel } from '../models/user';

export class UserService {
  public getCurrentUser(): UserModel {
    return {
      name: 'Usuária anônima',
      username: '@user',
      image_url: 'http://localhost:5173/@user.png',
    };
  }
}
