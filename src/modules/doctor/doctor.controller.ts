import { Controller, Get, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { PublicAuthGuard } from '../../config/public-auth.guard';

@Controller('doctor')
@UseGuards(PublicAuthGuard)
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get() // consultar um médicos por especificação
  findBy() {
    return this.doctorService.findBy();
  }

  @Get(':id') // consultar um médico especifico
  findOne() {
    return this.doctorService.findOne();
  }
}
