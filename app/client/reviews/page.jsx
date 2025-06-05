"use client"

import { useState } from "react"
import { Search, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ClientReviews() {
  const [searchQuery, setSearchQuery] = useState("")
  const [ratingFilter, setRatingFilter] = useState("all")

  // Datos simulados de reseñas
  const reviews = [
    {
      id: 1,
      service: "Consulta Veterinaria",
      provider: "Dr. Juan Pérez",
      date: "15 de marzo, 2025",
      rating: 5,
      comment: "Excelente atención, muy profesional y cuidadoso con mi mascota.",
      response: "¡Gracias por tu confianza! Esperamos verte pronto nuevamente.",
    },
    {
      id: 2,
      service: "Peluquería Canina",
      provider: "Estética Canina Feliz",
      date: "1 de marzo, 2025",
      rating: 4,
      comment: "Buen servicio, aunque tardaron un poco más de lo esperado.",
      response: null,
    },
    // Más reseñas...
  ]

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))
  }

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.provider.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRating = ratingFilter === "all" || review.rating === parseInt(ratingFilter)
    return matchesSearch && matchesRating
  })

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mis Reseñas</h1>
      
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Buscar reseñas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        <Select value={ratingFilter} onValueChange={setRatingFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las estrellas</SelectItem>
            <SelectItem value="5">5 estrellas</SelectItem>
            <SelectItem value="4">4 estrellas</SelectItem>
            <SelectItem value="3">3 estrellas</SelectItem>
            <SelectItem value="2">2 estrellas</SelectItem>
            <SelectItem value="1">1 estrella</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filteredReviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{review.service}</CardTitle>
                  <div className="text-sm text-gray-600">{review.provider}</div>
                </div>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Tu comentario:</div>
                  <p className="text-gray-800">{review.comment}</p>
                </div>
                {review.response && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Respuesta del proveedor:</div>
                    <p className="text-gray-800">{review.response}</p>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{review.date}</span>
                  <Button variant="outline">Editar reseña</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
