import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  async signIn(username: string, password: string) {
    if (password !== '123456') throw new BadRequestException('Wrong password');

    if (username === 'doctor') {
      return {
        access_token: 'ZG9jdG9yLmRvY3Rvcg==',
        expires_in: 3600,
      };
    }

    return {
      access_token: 'cGF0aWVudC5wYXRpZW50',
      expires_in: 3600,
    };
  }
}
