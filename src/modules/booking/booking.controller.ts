import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { InternalAuthGuard } from '../../config/internal-auth.guard';
import { PublicAuthGuard } from '../../config/public-auth.guard';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @UseGuards(InternalAuthGuard)
  create() {
    return this.bookingService.create();
  }

  @Get()
  @UseGuards(InternalAuthGuard)
  findAllByDoctorId() {
    return this.bookingService.findAllByDoctorId();
  }

  @Get(':id')
  @UseGuards(PublicAuthGuard)
  findOne() {
    return this.bookingService.findOne();
  }

  @Put(':doctorId/:id')
  @UseGuards(InternalAuthGuard)
  update() {
    return this.bookingService.update();
  }

  @Patch(':doctorId/:id')
  @UseGuards(InternalAuthGuard)
  updateStatus() {
    return this.bookingService.updateStatus();
  }

  @Delete(':id')
  @UseGuards(InternalAuthGuard)
  remove() {
    return this.bookingService.remove();
  }
}
