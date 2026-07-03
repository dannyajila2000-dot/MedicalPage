import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/layout/Container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DOCTORS } from "@/lib/data";

export function DoctorsPage() {
  return (
    <PageLayout>
      <Hero
        eyebrow="Equipo médico"
        title="Especialistas comprometidos con tu bienestar"
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doctor) => (
            <Card key={doctor.name}>
              <Badge variant="primary">{doctor.specialty}</Badge>
              <CardTitle className="mt-3">{doctor.name}</CardTitle>
              <CardDescription>{doctor.bio}</CardDescription>
            </Card>
          ))}
        </div>
      </Container>
    </PageLayout>
  );
}

export default DoctorsPage;
