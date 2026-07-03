import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  specialty: z.string().min(1, "Selecciona una especialidad"),
  preferredDate: z.string().min(1, "Selecciona una fecha"),
  notes: z.string().optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
