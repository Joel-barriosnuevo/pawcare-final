"use client"

import { useState } from "react"
import { Camera, MapPin, Phone, Mail, Clock, Calendar, Building, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function ProviderProfile() {
  // Datos simulados del perfil
  const [profile, setProfile] = useState({
    name: "Dr. Juan Pérez",
    profession: "Médico Veterinario",
    specialties: ["Medicina General", "Cirugía", "Vacunación"],
    about: "Médico veterinario con más de 10 años de experiencia en el cuidado de mascotas. Especializado en medicina preventiva y cirugía menor.",
    photo: "/placeholder.jpg",
    contact: {
      email: "juan.perez@pawcare.com",
      phone: "+56 9 1234 5678",
      address: "Av. Principal 123, Santiago",
    },
    schedule: {
      monday: "9:00 - 18:00",
      tuesday: "9:00 - 18:00",
      wednesday: "9:00 - 18:00",
      thursday: "9:00 - 18:00",
      friday: "9:00 - 18:00",
      saturday: "10:00 - 14:00",
      sunday: "Cerrado"
    },
    stats: {
      rating: 4.8,
      reviews: 124,
      clients: 250,
      services: 8
    }
  })

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mi Perfil</h1>
        <p className="text-muted-foreground">Gestiona tu información profesional y configuración</p>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Sidebar con información principal */}
        <Card className="md:col-span-4">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-xl font-bold">{profile.name}</h2>
                <p className="text-sm text-muted-foreground">{profile.profession}</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{profile.stats.rating}</span>
                <span className="text-muted-foreground">({profile.stats.reviews} reseñas)</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{profile.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{profile.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{profile.contact.email}</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Estadísticas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{profile.stats.clients}</p>
                  <p className="text-sm text-muted-foreground">Clientes</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{profile.stats.services}</p>
                  <p className="text-sm text-muted-foreground">Servicios</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenido principal */}
        <div className="md:col-span-8 space-y-6">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="personal" className="flex-1">Información Personal</TabsTrigger>
              <TabsTrigger value="business" className="flex-1">Información Profesional</TabsTrigger>
              <TabsTrigger value="schedule" className="flex-1">Horario</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>
                    Actualiza tu información personal
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" defaultValue={profile.name} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" defaultValue={profile.contact.email} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" defaultValue={profile.contact.phone} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" defaultValue={profile.contact.address} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Guardar Cambios</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="business">
              <Card>
                <CardHeader>
                  <CardTitle>Información Profesional</CardTitle>
                  <CardDescription>
                    Actualiza tu información profesional y especialidades
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="profession">Profesión</Label>
                      <Input id="profession" defaultValue={profile.profession} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="about">Acerca de mí</Label>
                      <Textarea
                        id="about"
                        defaultValue={profile.about}
                        rows={4}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Especialidades</Label>
                      <div className="flex flex-wrap gap-2">
                        {profile.specialties.map((specialty, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm"
                          >
                            {specialty}
                            <button className="text-muted-foreground hover:text-foreground">
                              ×
                            </button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm">
                          Añadir
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Guardar Cambios</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>Horario de Atención</CardTitle>
                  <CardDescription>
                    Configura tus horarios de disponibilidad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(profile.schedule).map(([day, hours]) => (
                      <div key={day} className="flex items-center justify-between border-b pb-4 last:border-0">
                        <div className="flex items-center gap-4">
                          <Switch id={day} />
                          <Label htmlFor={day} className="capitalize">
                            {day}
                          </Label>
                        </div>
                        <Select defaultValue={hours !== "Cerrado" ? "custom" : "closed"}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="closed">Cerrado</SelectItem>
                            <SelectItem value="custom">Personalizado</SelectItem>
                          </SelectContent>
                        </Select>
                        {hours !== "Cerrado" && (
                          <div className="flex items-center gap-2">
                            <Input
                              type="time"
                              defaultValue="09:00"
                              className="w-[120px]"
                            />
                            <span>-</span>
                            <Input
                              type="time"
                              defaultValue="18:00"
                              className="w-[120px]"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Guardar Cambios</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
