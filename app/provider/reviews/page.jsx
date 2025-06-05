"use client"

import { useState } from "react"
import { Calendar, Filter, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ProviderReviews() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRating, setSelectedRating] = useState("all")
  const [selectedService, setSelectedService] = useState("all")

  // Datos simulados de estadísticas
  const stats = [
    {
      title: "Calificación Promedio",
      value: "4.8",
      total: "5.0",
      icon: Star
    },
    {
      title: "Total de Reseñas",
      value: "124",
      change: "+12",
      changeType: "increase"
    },
    {
      title: "Reseñas este mes",
      value: "28",
      change: "+5",
      changeType: "increase"
    }
  ]

  // Datos simulados de reseñas
  const reviews = [
    {
      id: 1,
      client: "María López",
      service: "Consulta Veterinaria",
      date: "15 Mar, 2024",
      rating: 5,
      comment: "Excelente servicio, muy profesional y atento con mi mascota.",
      response: null
    },
    {
      id: 2,
      client: "Juan Pérez",
      service: "Peluquería Canina",
      date: "14 Mar, 2024",
      rating: 4,
      comment: "Buen servicio, mi perro quedó muy bien aunque se demoraron un poco más de lo esperado.",
      response: "Gracias por tu comentario Juan. Tomaremos en cuenta tu feedback sobre los tiempos de espera para mejorar nuestro servicio."
    },
    {
      id: 3,
      client: "Ana García",
      service: "Paseo Canino",
      date: "13 Mar, 2024",
      rating: 5,
      comment: "Muy buen servicio, mi perro regresó feliz y cansado del paseo.",
      response: null
    },
    {
      id: 4,
      client: "Carlos Rodríguez",
      service: "Consulta Veterinaria",
      date: "12 Mar, 2024",
      rating: 3,
      comment: "El servicio fue bueno pero el tiempo de espera fue muy largo.",
      response: "Lamentamos la espera Carlos. Estamos trabajando en mejorar nuestros tiempos de atención."
    }
  ]

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = 
      review.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesRating = selectedRating === "all" || review.rating === parseInt(selectedRating)
    const matchesService = selectedService === "all" || review.service === selectedService

    return matchesSearch && matchesRating && matchesService
  })

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Reseñas y Calificaciones</h1>
        <p className="text-muted-foreground">Gestiona las reseñas de tus clientes</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon && <stat.icon className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stat.value}
                {stat.total && <span className="text-muted-foreground text-sm">/{stat.total}</span>}
              </div>
              {stat.change && (
                <p className={`text-xs ${
                  stat.changeType === "increase" 
                    ? "text-green-600" 
                    : "text-red-600"
                }`}>
                  {stat.change} desde el mes anterior
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por cliente o comentario..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={selectedRating} onValueChange={setSelectedRating}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Calificación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="5">5 estrellas</SelectItem>
              <SelectItem value="4">4 estrellas</SelectItem>
              <SelectItem value="3">3 estrellas</SelectItem>
              <SelectItem value="2">2 estrellas</SelectItem>
              <SelectItem value="1">1 estrella</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="Consulta Veterinaria">Consulta Veterinaria</SelectItem>
              <SelectItem value="Peluquería Canina">Peluquería Canina</SelectItem>
              <SelectItem value="Paseo Canino">Paseo Canino</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reseñas ({filteredReviews.length})</CardTitle>
          <CardDescription>
            Lista de todas las reseñas de tus servicios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col space-y-4 rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">{review.client}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {review.date}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {review.service}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-200" />
                  ))}
                </div>
              </div>
              <p className="text-sm">{review.comment}</p>
              {review.response && (
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs font-medium mb-1">Tu respuesta:</p>
                  <p className="text-sm">{review.response}</p>
                </div>
              )}
              {!review.response && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Responder</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Responder a la Reseña</DialogTitle>
                      <DialogDescription>
                        Escribe una respuesta a la reseña de {review.client}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label>Reseña original</Label>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-sm">{review.comment}</p>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="response">Tu respuesta</Label>
                        <Input
                          id="response"
                          placeholder="Escribe tu respuesta aquí..."
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancelar</Button>
                      <Button>Publicar respuesta</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Cargar más reseñas
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
