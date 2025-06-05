"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ReservationHistory() {
  const [reservations, setReservations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Simulación: obtener reservas del localStorage
    const data = localStorage.getItem("pawcare_reservations");
    if (data) {
      setReservations(JSON.parse(data));
    }
  }, []);

  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Historial de Reservas</h1>
      {reservations.length === 0 ? (
        <div className="text-center text-gray-500">No tienes reservas registradas aún.</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reservations.map((res, idx) => (
            <Card key={idx} className="shadow-md border">
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <img src={res.serviceImage} alt={res.serviceName} className="w-16 h-16 rounded-lg object-cover border" />
                  <div>
                    <h3 className="font-bold text-lg text-primary">{res.serviceName}</h3>
                    <p className="text-muted-foreground text-sm">{res.provider}</p>
                  </div>
                </div>
                <div><span className="font-semibold">Mascota:</span> {res.petName}</div>
                <div><span className="font-semibold">Fecha:</span> {res.date}</div>
                {res.notes && <div><span className="font-semibold">Notas:</span> {res.notes}</div>}
                <div className="text-secondary font-bold mt-2">{res.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <div className="mt-8 text-center">
        <Button onClick={() => router.push("/services")}>Reservar otro servicio</Button>
      </div>
    </main>
  );
}
