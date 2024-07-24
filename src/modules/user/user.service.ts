import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async createPatient() {
    return {
      patient_id: 'afcb94c5-0acc-46e6-b858-56a4d044ce38',
      user_id: '55d425a7-cadc-431f-ae7e-72c2d21c5844',
      name: 'Connor Williamson',
      age: 36,
      address: 'Kihpo Heights, Hightown, UT 84045',
      number: '1982',
    };
  }

  async createDoctor() {
    return {
      id: 'b8742511-a0de-40dd-be9a-2ca1dae8f8fe',
      user_id: '803a09ae-1b4a-4dde-9201-11a92f72e2bc',
      name: 'Frank Huff',
      crm: '123456',
      work_start_hour: '08:00:00',
      work_end_hour: '18:00:00',
      speciality: 'Oftalmologia',
    };
  }
}
