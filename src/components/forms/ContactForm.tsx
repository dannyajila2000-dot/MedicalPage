import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/forms/fields/FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contactSchema";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    // TODO: reemplazar por la llamada real al backend/API cuando exista
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Contacto enviado:", values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <FormField label="Nombre completo" htmlFor="name" error={errors.name?.message}>
        <Input id="name" invalid={!!errors.name} {...register("name")} />
      </FormField>

      <FormField label="Correo electrónico" htmlFor="email" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          invalid={!!errors.email}
          {...register("email")}
        />
      </FormField>

      <FormField label="Teléfono" htmlFor="phone" error={errors.phone?.message}>
        <Input id="phone" invalid={!!errors.phone} {...register("phone")} />
      </FormField>

      <FormField label="Mensaje" htmlFor="message" error={errors.message?.message}>
        <Textarea
          id="message"
          invalid={!!errors.message}
          {...register("message")}
        />
      </FormField>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>

      {isSubmitSuccessful && (
        <p className="text-sm text-primary-600">
          Gracias, te contactaremos pronto.
        </p>
      )}
    </form>
  );
}
