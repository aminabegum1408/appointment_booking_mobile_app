export const BOOK_APPOINTMENT_REQ = 'BOOK_APPOINTMENT_REQ';

// Book Appointment
export function triggerBookAppointment(data: any,token:string) {
  return { type: BOOK_APPOINTMENT_REQ, payload: data ,token:token}
}

