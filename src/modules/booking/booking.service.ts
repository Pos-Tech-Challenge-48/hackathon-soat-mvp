import { Injectable } from '@nestjs/common';
import { BookingTypeEnum } from '../../utils/enums/booking-type.enum';
import { BookingAcceptEnum } from '../../utils/enums/bookyng-accept.enum';

@Injectable()
export class BookingService {
  async create() {
    return {
      id: '59d628d4-c0b4-41c3-9144-10760981edd9',
      doctor_id: 'b8742511-a0de-40dd-be9a-2ca1dae8f8fe',
      patient_id: '829e883d-c35e-463d-a39e-672264d4a2e8',
      date: new Date().toISOString().split('T')[0],
      start_time: '12:00:00',
      end_time: '14:00:00',
      type: BookingTypeEnum.SURGERY,
      status: BookingAcceptEnum.PENDING,
    };
  }

  async findAllByDoctorId() {
    return [
      {
        id: '535b2fcc-2a7a-4bf1-9ab2-e6e2e10f8a0e',
        doctor_id: 'b8742511-a0de-40dd-be9a-2ca1dae8f8fe',
        patient_id: 'afcb94c5-0acc-46e6-b858-56a4d044ce38',
        date: new Date().toISOString(),
        start_time: '08:00:00',
        end_time: '09:00:00',
        type: BookingTypeEnum.CONSULTATION,
        status: BookingAcceptEnum.ACCEPT,
      },
      {
        id: '59d628d4-c0b4-41c3-9144-10760981edd9',
        doctor_id: 'b8742511-a0de-40dd-be9a-2ca1dae8f8fe',
        patient_id: '829e883d-c35e-463d-a39e-672264d4a2e8',
        date: new Date().toISOString(),
        start_time: '12:00:00',
        end_time: '14:00:00',
        type: BookingTypeEnum.SURGERY,
        status: BookingAcceptEnum.PENDING,
      },
    ];
  }

  findOne() {
    return {
      id: '59d628d4-c0b4-41c3-9144-10760981edd9',
      doctor_id: 'b8742511-a0de-40dd-be9a-2ca1dae8f8fe',
      patient_id: '829e883d-c35e-463d-a39e-672264d4a2e8',
      date: new Date().toISOString().split('T')[0],
      start_time: '14:00:00',
      end_time: '16:00:00',
      type: BookingTypeEnum.SURGERY,
      status: BookingAcceptEnum.PENDING,
    };
  }

  async update() {
    return {
      id: '59d628d4-c0b4-41c3-9144-10760981edd9',
      doctor_id: 'b8742511-a0de-40dd-be9a-2ca1dae8f8fe',
      patient_id: '829e883d-c33e-463d-a39e-672264d4a2e8',
      date: new Date().toISOString().split('T')[0],
      start_time: '14:00:00',
      end_time: '16:00:00',
      type: BookingTypeEnum.SURGERY,
      status: BookingAcceptEnum.PENDING,
    };
  }

  async updateStatus() {
    return {
      id: '59d628d4-c0b4-41c3-9144-10760981edd9',
      doctor_id: 'b8742511-a0de-40dd-be9a-2ca1dae8f8fe',
      patient_id: '829e883d-c35e-463d-a39e-672264d4a2e8',
      date: new Date().toISOString().split('T')[0],
      start_time: '14:00:00',
      end_time: '16:00:00',
      type: BookingTypeEnum.SURGERY,
      status: BookingAcceptEnum.ACCEPT,
    };
  }

  async remove() {
    return {
      id: '59d628d4-c0b4-41c3-9144-10760981edd9',
    };
  }
}
