import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('doctor') // cadastrar médico ou paciente
  createDoctor() {
    return this.userService.createDoctor();
  }

  @Post('patient') // cadastrar médico ou paciente
  createPatient() {
    return this.userService.createPatient();
  }
}
