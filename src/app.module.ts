import { Module } from '@nestjs/common';
import { DoctorModule } from './modules/doctor/doctor.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user/user.module';
import { BookingModule } from './modules/booking/booking.module';

@Module({
  imports: [DoctorModule, AuthenticationModule, UserModule, BookingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
