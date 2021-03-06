import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentsDTO {
 provider: string;
 date: Date;
}

class AppointmentsRepository {
 private appointments: Appointment[];

 constructor() {
  this.appointments = [];
 }

 public finByDate(date: Date): Appointment | null {
  const findAppointment = this.appointments.find(appointment =>
   isEqual(date, appointment.date),
  );

  return findAppointment || null;
 }

 public create({ provider, date }: CreateAppointmentsDTO): Appointment {
  const appointment = new Appointment({ provider, date });

  this.appointments.push(appointment);
  return appointment;
 }

 public all(): Appointment[] {
  return this.appointments;
 }
}

export default AppointmentsRepository;
