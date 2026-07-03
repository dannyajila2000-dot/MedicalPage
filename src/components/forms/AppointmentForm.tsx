import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/forms/fields/FormField";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  appointmentSchema,
  type AppointmentFormValues,
} from "@/lib/validations/appointmentSchema";

const SPECIALTIES = [
  "Medicina general",
  "Pediatría",
  "Cardiología",
  "Dermatología",
  "Ginecología",
];

export function AppointmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (values: AppointmentFormValues) => {
    // TODO: reemplazar por la llamada real al backend/API cuando exista
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Cita solicitada:", values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
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

        <FormField
          label="Especialidad"
          htmlFor="specialty"
          error={errors.specialty?.message}
        >
          <Select
            id="specialty"
            invalid={!!errors.specialty}
            defaultValue=""
            {...register("specialty")}
          >
            <option value="" disabled>
              Selecciona una especialidad
            </option>
            {SPECIALTIES.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField
          label="Fecha preferida"
          htmlFor="preferredDate"
          error={errors.preferredDate?.message}
        >
          <Input
            id="preferredDate"
            type="date"
            invalid={!!errors.preferredDate}
            {...register("preferredDate")}
          />
        </FormField>
      </div>

      <FormField label="Notas (opcional)" htmlFor="notes">
        <Textarea id="notes" {...register("notes")} />
      </FormField>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : "Solicitar cita"}
      </Button>

      {isSubmitSuccessful && (
        <p className="text-sm text-primary-600">
          Solicitud enviada. Te confirmaremos por correo o teléfono.
        </p>
      )}
    </form>
  );
}
