import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';

// Utilidad para obtener la URL base para imágenes locales (soporta subcarpetas de deploy)
// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const serviceData = [
  {
    id: 1,
    name: "Consulta Veterinaria General",
    provider: "Clínica Veterinaria PetHealth",
    rating: 4.8,
    reviews: 124,
    price: "$45.000",
    image: "/consulta-veterinaria-general.jpg",
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
    image: "/peluqueria-canina-completa.png",
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
    image: "/paseo-de-perros.jpg",
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
    image: "/guarderia-de-mascotas.png",
    description:
      "Cuidado diurno o por noches para tu mascota en un ambiente seguro y divertido.",
  },
];

export default function ServiceDetail({ params }) {
  const serviceId = parseInt(params.id);
  const [service, setService] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.PETS.BY_ID(serviceId));
        setService(response.data);
      } catch (error) {
        setError("Servicio no encontrado");
      }
    };

    fetchService();
  }, [serviceId]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">{error}</h2>
        <a href="/services" className="inline-block mt-2">
          <Button>Volver a servicios</Button>
        </a>
      </div>
    );
  }

  if (!service) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="container py-8 flex flex-col items-center">
      <Card className="max-w-2xl w-full">
        <CardContent className="flex flex-col md:flex-row gap-6 p-6">
          <img
            src={service.image}
            alt={service.name}
            className="h-48 w-full object-cover rounded-t-lg"
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
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-yellow-700 mb-2">Reserva simulada (solo visual)</h3>
          <p className="mb-4">Esta página está en modo solo servidor. Para reservas reales y feedback inmediato, activa el modo cliente.</p>
          <a href="/services" className="inline-block mt-2">
            <Button>Volver a servicios</Button>
          </a>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ];
}