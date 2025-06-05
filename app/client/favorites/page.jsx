"use client"

import { useState } from "react"
import { Heart, Search, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ClientFavorites() {
  const [searchQuery, setSearchQuery] = useState("")

  // Datos simulados de servicios favoritos
  const favorites = []

  const filteredFavorites = favorites.filter((favorite) =>
    favorite.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    favorite.provider.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mis Favoritos</h1>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Buscar en favoritos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center py-12">
          <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80" alt="No hay favoritos" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
          <h2 className="text-2xl font-bold mb-2">¡Aún no tienes favoritos!</h2>
          <p className="text-muted-foreground mb-4">Explora los servicios y añade tus favoritos aquí.</p>
          <Button onClick={() => router.push("/services")}>Explorar servicios</Button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredFavorites.map((favorite) => (
            <Card key={favorite.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={favorite.image}
                  alt={favorite.name}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-5 w-5 fill-current text-red-500" />
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{favorite.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">{favorite.provider}</div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                    <span className="font-medium">{favorite.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">{favorite.location}</div>
                  <div className="font-medium">{favorite.price}</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button className="w-full">Reservar</Button>
                  <Button variant="outline" className="w-full">Ver Detalles</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
