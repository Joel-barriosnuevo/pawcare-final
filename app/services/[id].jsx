"use client";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Datos simulados de servicios (debería venir de una API o base de datos real)
const SERVICES = [
  {
    id: 1,
    name: "Consulta Veterinaria General",
    provider: "Clínica Veterinaria PetHealth",
    rating: 4.8,
    reviews: 124,
    price: "$45.000",
    image: "/vet-service.jpg",
    description:
      "Evaluación completa del estado de salud de tu mascota, incluyendo revisión física y recomendaciones de cuidado.",
  },
  {
    id: 2,
    name: "Peluquería Canina Completa",
    provider: "Estética Canina Feliz",
    rating: 4.7,
    reviews: 98,
    price: "$30.000",
    image: "/grooming-service.jpg",
    description:
      "Baño, corte de pelo y uñas, limpieza de oídos y spa para consentir a tu perro.",
  },
  {
    id: 3,
    name: "Paseo de Perros",
    provider: "Paseadores Felices",
    rating: 4.9,
    reviews: 150,
    price: "$15.000",
    image: "/dog-walking.jpg",
    description:
      "Paseos diarios o programados para perros de todas las razas y tamaños.",
  },
  {
    id: 4,
    name: "Guardería de Mascotas",
    provider: "Pet Hotel PawCare",
    rating: 4.6,
    reviews: 76,
    price: "$60.000",
    image: "/pet-hotel.jpg",
    description:
      "Cuidado diurno o por noches para tu mascota en un ambiente seguro y divertido.",
  },
];

export default function ServiceDetail() {
  const router = useRouter();
  const params = useParams();
  const serviceId = parseInt(params.id);
  const service = SERVICES.find((s) => s.id === serviceId);

  const [form, setForm] = useState({
    petName: "",
    date: "",
    notes: "",
  });
  const [success, setSuccess] = useState(undefined);
  const [loading, setLoading] = useState(false);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Servicio no encontrado</h2>
        <Button onClick={() => router.push("/services")}>Volver a servicios</Button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de éxito o error aleatorio
    setTimeout(() => {
      const successRandom = Math.random() > 0.15; // 85% éxito
      setSuccess(successRandom);
      setLoading(false);
      if (successRandom) {
        // Guardar reserva en localStorage
        const prev = JSON.parse(localStorage.getItem("pawcare_reservations") || "[]");
        prev.push({
          serviceId: service.id,
          serviceName: service.name,
          serviceImage: service.image,
          provider: service.provider,
          price: service.price,
          petName: form.petName,
          date: form.date,
          notes: form.notes,
        });
        localStorage.setItem("pawcare_reservations", JSON.stringify(prev));
      }
    }, 1200);
  };

  return (
    <main className="container py-8 flex flex-col items-center">
      <Card className="max-w-2xl w-full">
        <CardContent className="flex flex-col md:flex-row gap-6 p-6">
          <img
            src={service.image}
            alt={service.name}
            className="w-48 h-48 object-cover rounded-lg border-2 border-accent shadow"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary mb-2">{service.name}</h2>
            <p className="text-muted-foreground mb-1">{service.provider}</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-yellow-500">★ {service.rating}</span>
              <span className="text-sm text-gray-500">({service.reviews} reseñas)</span>
            </div>
            <p className="mb-2">{service.description}</p>
            <span className="font-bold text-lg text-secondary">{service.price}</span>
          </div>
        </CardContent>
      </Card>
      <div className="max-w-2xl w-full mt-8">
        {success === true ? (
          <div className="bg-green-100 border border-green-300 rounded-lg p-6 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-green-700 mb-2">¡Reserva exitosa!</h3>
            <p className="mb-4">Recibirás un correo de confirmación con los detalles de tu reserva.</p>
            <Button onClick={() => router.push("/history")} className="mt-2">Ver historial de reservas</Button>
          </div>
        ) : success === false ? (
          <div className="bg-red-100 border border-red-300 rounded-lg p-6 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-red-700 mb-2">No se pudo crear la reserva</h3>
            <p className="mb-4">Ocurrió un error inesperado. Por favor, intenta nuevamente.</p>
            <Button onClick={() => setSuccess(undefined)} className="mt-2">Intentar de nuevo</Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 animate-fade-in"
          >
            <h3 className="text-xl font-bold mb-2">Reservar este servicio</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Nombre de tu mascota</label>
              <input
                type="text"
                name="petName"
                required
                value={form.petName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Ejemplo: Max"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fecha de la reserva</label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Notas adicionales</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="¿Algo especial que debamos saber?"
              />
            </div>
            <Button type="submit" className="bg-secondary text-white" disabled={loading}>
              {loading ? "Reservando..." : "Confirmar Reserva"}
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}
