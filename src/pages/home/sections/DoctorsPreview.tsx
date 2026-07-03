import { Container } from "@/components/layout/Container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DOCTORS } from "@/lib/data";

export function DoctorsPreview() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <h2 className="text-2xl font-semibold text-slate-900">
          Nuestro equipo médico
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {DOCTORS.map((doctor) => (
            <Card key={doctor.name}>
              <Badge variant="primary">{doctor.specialty}</Badge>
              <CardTitle className="mt-3">{doctor.name}</CardTitle>
              <CardDescription>{doctor.bio}</CardDescription>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
