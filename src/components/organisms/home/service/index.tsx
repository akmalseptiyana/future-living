import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";
import { services } from "@/lib/data";

export function HomeService() {
  return (
    <div className="flex flex-col justify-center gap-10 py-10">
      <h2 className="text-center text-2xl font-semibold leading-[30px] text-title md:text-[44px] md:font-bold md:leading-[54px]">
        Pelayanan kami
      </h2>
      <div className="flex flex-col gap-6 md:px-16 lg:flex-row lg:gap-16">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader className="self-center lg:self-start">
              <service.icon className="h-20 w-20 stroke-title" />
            </CardHeader>
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="mt-2">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
