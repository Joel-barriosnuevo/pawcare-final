"use client"

import { useState } from "react"
import { Calendar, Clock, Filter, Plus, Search, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function ProviderServices() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Datos simulados de servicios
  const services = []

  const filteredServices = services.filter(service => {
    const matchesSearch = 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = selectedStatus === "all" || service.status === selectedStatus
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory

    return matchesSearch && matchesStatus && matchesCategory
  })

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mis Servicios</h1>
          <p className="text-muted-foreground">Gestiona los servicios que ofreces</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Servicio
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear Nuevo Servicio</DialogTitle>
              <DialogDescription>
                Añade un nuevo servicio a tu catálogo
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre del servicio</Label>
                <Input id="name" placeholder="Ej: Consulta Veterinaria" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe los detalles del servicio..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoría</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="veterinaria">Veterinaria</SelectItem>
                      <SelectItem value="estetica">Estética</SelectItem>
                      <SelectItem value="cuidado">Cuidado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duración</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutos</SelectItem>
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="45">45 minutos</SelectItem>
                      <SelectItem value="60">1 hora</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Precio</Label>
                  <Input id="price" placeholder="$0" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Estado</Label>
                  <Select defaultValue="activo">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="activo">Activo</SelectItem>
                      <SelectItem value="inactivo">Inactivo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button>Crear Servicio</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar servicios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="activo">Activos</SelectItem>
              <SelectItem value="inactivo">Inactivos</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="Veterinaria">Veterinaria</SelectItem>
              <SelectItem value="Estética">Estética</SelectItem>
              <SelectItem value="Cuidado">Cuidado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredServices.length === 0 ? (
        <div className="flex flex-col items-center py-12">
          <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80" alt="No hay servicios" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
          <h2 className="text-2xl font-bold mb-2">¡Aún no tienes servicios!</h2>
          <p className="text-muted-foreground mb-4">Crea tu primer servicio para que los clientes puedan reservarte.</p>
          <Button onClick={() => {/* abrir modal o redirigir a crear servicio */}}>Crear servicio</Button>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Servicios ({filteredServices.length})</CardTitle>
            <CardDescription>
              Lista de todos tus servicios
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col space-y-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Store className="h-4 w-4 text-muted-foreground" />
                    <p className="font-medium">{service.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                    <div>
                      {service.bookings} reservas
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium">{service.price}</p>
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                      service.status === "activo" 
                        ? "bg-green-100 text-green-600" 
                        : "bg-red-100 text-red-600"
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Editar</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar Servicio</DialogTitle>
                        <DialogDescription>
                          Modifica los detalles del servicio
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="edit-name">Nombre del servicio</Label>
                          <Input id="edit-name" defaultValue={service.name} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="edit-description">Descripción</Label>
                          <Textarea
                            id="edit-description"
                            defaultValue={service.description}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="edit-category">Categoría</Label>
                            <Select defaultValue={service.category.toLowerCase()}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="veterinaria">Veterinaria</SelectItem>
                                <SelectItem value="estetica">Estética</SelectItem>
                                <SelectItem value="cuidado">Cuidado</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-duration">Duración</Label>
                            <Select defaultValue="30">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="15">15 minutos</SelectItem>
                                <SelectItem value="30">30 minutos</SelectItem>
                                <SelectItem value="45">45 minutos</SelectItem>
                                <SelectItem value="60">1 hora</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-price">Precio</Label>
                            <Input id="edit-price" defaultValue={service.price} />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-status">Estado</Label>
                            <Select defaultValue={service.status}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="activo">Activo</SelectItem>
                                <SelectItem value="inactivo">Inactivo</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancelar</Button>
                        <Button>Guardar Cambios</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
