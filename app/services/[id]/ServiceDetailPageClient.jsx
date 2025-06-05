"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, DollarSign, MapPin, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function ServiceDetailPageClient({ params }) {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [pet, setPet] = useState("")
  const [notes, setNotes] = useState("")
  const [success, setSuccess] = useState(undefined)
  const [loading, setLoading] = useState(false)

  const serviceImages = {
    1: "/consulta-veterinaria-general.jpg",
    2: "/peluqueria-canina-completa.png",
    3: "/paseo-de-perros.jpg",
    4: "/guarderia-de-mascotas.png",
  }

  const id = Number.parseInt(params.id)
  const image = serviceImages[id] || "/vet-service.jpg"

  const service = {
    id,
    name: "Consulta Veterinaria General",
    provider: "Clínica Veterinaria PetHealth",
    rating: 4.8,
    reviews: 124,
    price: "$45.000",
    duration: "30 minutos",
    location: "Calle Principal #123, Barranquilla",
    image,
    description:
      "Evaluación completa del estado de salud de tu mascota, incluyendo revisión física y recomendaciones de cuidado. Nuestros veterinarios certificados realizarán un examen detallado para asegurar el bienestar de tu mascota.",
    longDescription:
      "La consulta veterinaria general es un servicio esencial para mantener la salud de tu mascota. Durante la consulta, nuestros veterinarios realizarán:\n\n- Examen físico completo\n- Revisión de signos vitales\n- Evaluación de peso y condición corporal\n- Revisión de vacunas y desparasitación\n- Recomendaciones de alimentación y cuidados\n\nEste servicio es recomendado al menos una vez al año para mascotas adultas sanas y con mayor frecuencia para cachorros, mascotas mayores o con condiciones crónicas.",
  }

  const reviews = [
    {
      id: 1,
      user: "Carlos Rodríguez",
      rating: 5,
      date: "10 de marzo, 2025",
      comment: "Excelente servicio, el veterinario fue muy amable y profesional. Mi perro se sintió cómodo durante toda la consulta.",
    },
    {
      id: 2,
      user: "María López",
      rating: 4,
      date: "5 de marzo, 2025",
      comment: "Buena atención y diagnóstico acertado. El único inconveniente fue que tuve que esperar un poco más de lo programado.",
    },
    {
      id: 3,
      user: "Juan Pérez",
      rating: 5,
      date: "28 de febrero, 2025",
      comment: "Muy satisfecho con la consulta. El doctor explicó todo detalladamente y respondió todas mis dudas sobre la salud de mi gato.",
    },
  ]

  const availableDates = [
    "2025-04-15",
    "2025-04-16",
    "2025-04-17",
    "2025-04-18",
    "2025-04-19",
  ]
  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "15:00",
    "16:00",
    "17:00",
  ]

  const handleReserve = () => {
    setLoading(true)
    setTimeout(() => {
      const successRandom = Math.random() > 0.15
      setSuccess(successRandom)
      setLoading(false)
      if (successRandom) {
        const prev = JSON.parse(localStorage.getItem("pawcare_reservations") || "[]")
        prev.push({
          serviceId: service.id,
          serviceName: service.name,
          serviceImage: service.image,
          provider: service.provider,
          price: service.price,
          petName: pet,
          date: selectedDate,
          time: selectedTime,
          notes,
        })
        localStorage.setItem("pawcare_reservations", JSON.stringify(prev))
      }
    }, 1200)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/services" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-lg font-semibold">Volver a servicios</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="container max-w-screen-xl">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-muted-foreground">({service.reviews} reseñas)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <DollarSign className="h-5 w-5" />
                      <span>{service.price}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="h-5 w-5" />
                      <span>{service.location}</span>
                    </div>
                  </CardContent>
                </Card>
                <Separator />
                <Tabs defaultValue="descripcion">
                  <TabsList>
                    <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                    <TabsTrigger value="resenas">Reseñas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="descripcion">
                    <p className="whitespace-pre-line">{service.longDescription}</p>
                  </TabsContent>
                  <TabsContent value="resenas">
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <Card key={review.id}>
                          <CardHeader className="flex flex-row items-center gap-4">
                            <User className="h-6 w-6 text-primary" />
                            <div>
                              <div className="font-semibold">{review.user}</div>
                              <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-yellow-400" />
                                <span>{review.rating}</span>
                              </div>
                              <div className="text-xs text-muted-foreground">{review.date}</div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p>{review.comment}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Reservar este servicio</CardTitle>
                  <CardDescription>Selecciona fecha y hora para tu reserva</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha</Label>
                    <Select value={selectedDate} onValueChange={setSelectedDate}>
                      <SelectTrigger id="date">
                        <SelectValue placeholder="Selecciona una fecha" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDates.map((date) => (
                          <SelectItem key={date} value={date}>
                            {new Date(date).toLocaleDateString("es-ES", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Hora</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime} disabled={!selectedDate}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Selecciona una hora" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimes.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pet">Mascota</Label>
                    <Select value={pet} onValueChange={setPet}>
                      <SelectTrigger id="pet">
                        <SelectValue placeholder="Selecciona tu mascota" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="max">Max (Perro)</SelectItem>
                        <SelectItem value="luna">Luna (Gato)</SelectItem>
                        <SelectItem value="new">+ Añadir nueva mascota</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notas adicionales</Label>
                    <Textarea
                      id="notes"
                      placeholder="Información adicional para el prestador de servicios"
                      className="min-h-[80px]"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm">Precio:</div>
                    <div className="font-bold">{service.price}</div>
                  </div>
                  <Button
                    className="w-full"
                    onClick={handleReserve}
                    disabled={!selectedDate || !selectedTime || !pet || loading}
                  >
                    {loading ? "Reservando..." : "Confirmar reserva"}
                  </Button>
                  <div className="text-xs text-center text-muted-foreground">
                    No se realizará ningún cargo hasta que el prestador confirme la reserva
                  </div>
                  {success === true && (
                    <div className="bg-green-100 border border-green-300 rounded-lg p-6 text-center animate-fade-in mt-4">
                      <h3 className="text-2xl font-bold text-green-700 mb-2">¡Reserva exitosa!</h3>
                      <p className="mb-4">Recibirás un correo de confirmación con los detalles de tu reserva.</p>
                      <Button onClick={() => window.location.href = '/history'} className="mt-2">
                        Ver historial de reservas
                      </Button>
                    </div>
                  )}
                  {success === false && (
                    <div className="bg-red-100 border border-red-300 rounded-lg p-6 text-center animate-fade-in mt-4">
                      <h3 className="text-2xl font-bold text-red-700 mb-2">No se pudo crear la reserva</h3>
                      <p className="mb-4">Ocurrió un error inesperado. Por favor, intenta nuevamente.</p>
                      <Button onClick={() => setSuccess(undefined)} className="mt-2">
                        Intentar de nuevo
                      </Button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-2 py-4 text-center text-sm text-muted-foreground md:py-6">
          <p>2025 PawCare. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
