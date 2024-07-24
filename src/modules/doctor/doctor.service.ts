import { Injectable } from '@nestjs/common';
import { BookingTypeEnum } from '../../utils/enums/booking-type.enum';
import { BookingAcceptEnum } from '../../utils/enums/bookyng-accept.enum';

@Injectable()
export class DoctorService {
  async findBy() {
    return [
      {
        id: 'b8742511-a0de-40dd-be9a-2ca1dae8f8fe',
        user_id: '803a09ae-1b4a-4dde-9201-11a92f72e2bc',
        name: 'Frank Huff',
        crm: '123456',
        work_start_hour: '08:00:00',
        work_end_hour: '18:00:00',
        speciality: 'Oftalmologia',
      },
      {
        id: '26ed9329-5983-4d3c-801c-4740a3adf68c',
        user_id: '7e42e1a2-e316-422d-b82f-45595621dede',
        name: 'Jeremiah Carter',
        crm: '654321',
        work_start_hour: '10:00:00',
        work_end_hour: '14:00:00',
        speciality: 'Oftalmologia',
      },
    ];
  }

  async findOne() {
    return {
      id: 'b8742511-a0de-40dd-be9a-2ca1dae8f8fe',
      user_id: '803a09ae-1b4a-4dde-9201-11a92f72e2bc',
      name: 'Frank Huff',
      crm: '123456',
      work_start_hour: '08:00:00',
      work_end_hour: '18:00:00',
      speciality: 'Oftalmologia',
      reserved_times: [
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
      ],
    };
  }
}
