import { Injectable } from '@angular/core';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[]
  {
    return [
      new User('sergey',26),
      new User('anton',37)
    ];
  }
}
