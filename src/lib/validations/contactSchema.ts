import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  message: z.string().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
