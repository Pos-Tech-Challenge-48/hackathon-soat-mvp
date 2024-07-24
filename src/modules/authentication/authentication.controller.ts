import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignInDTO } from './dtos/sign-in.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post()
  signIn(@Body() { username, password }: SignInDTO) {
    return this.authenticationService.signIn(username, password);
  }
}
