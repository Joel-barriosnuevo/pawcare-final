"use client"

import { useState } from "react"
import { Calendar, Clock, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProviderAppointments() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedDate, setSelectedDate] = useState("all")

  // Datos simulados de citas
  const appointments = []

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.pet.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = selectedStatus === "all" || appointment.status === selectedStatus
    
    // Aquí podrías implementar el filtro por fecha según tu lógica de negocio
    const matchesDate = selectedDate === "all" // Por ahora retorna true para todos

    return matchesSearch && matchesStatus && matchesDate
  })

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Gestión de Citas</h1>
        <p className="text-muted-foreground">Administra todas tus citas desde un solo lugar</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por cliente, servicio o mascota..."
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
              <SelectItem value="pendiente">Pendientes</SelectItem>
              <SelectItem value="confirmada">Confirmadas</SelectItem>
              <SelectItem value="cancelada">Canceladas</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedDate} onValueChange={setSelectedDate}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Fecha" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="today">Hoy</SelectItem>
              <SelectItem value="tomorrow">Mañana</SelectItem>
              <SelectItem value="week">Esta semana</SelectItem>
              <SelectItem value="month">Este mes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="gap-2">
          <Filter className="h-4 w-4" />
          Más filtros
        </Button>
      </div>

      {filteredAppointments.length === 0 ? (
        <div className="flex flex-col items-center py-12">
          <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80" alt="No hay citas" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
          <h2 className="text-2xl font-bold mb-2">¡Aún no tienes citas!</h2>
          <p className="text-muted-foreground mb-4">Aquí aparecerán las citas que te reserven los clientes.</p>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Citas ({filteredAppointments.length})</CardTitle>
            <CardDescription>
              Lista de todas tus citas filtradas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex flex-col space-y-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
              >
                <div className="space-y-1">
                  <p className="font-medium">{appointment.client}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {appointment.date}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {appointment.service} - {appointment.pet}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium">{appointment.price}</p>
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                      appointment.status === "confirmada" 
                        ? "bg-green-100 text-green-600" 
                        : appointment.status === "pendiente"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Ver detalles</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Detalles de la Cita</DialogTitle>
                        <DialogDescription>
                          Información detallada de la cita con {appointment.client}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Cliente</Label>
                            <p className="text-sm">{appointment.client}</p>
                          </div>
                          <div>
                            <Label>Mascota</Label>
                            <p className="text-sm">{appointment.pet}</p>
                          </div>
                          <div>
                            <Label>Servicio</Label>
                            <p className="text-sm">{appointment.service}</p>
                          </div>
                          <div>
                            <Label>Precio</Label>
                            <p className="text-sm">{appointment.price}</p>
                          </div>
                          <div>
                            <Label>Fecha y Hora</Label>
                            <p className="text-sm">{appointment.date}</p>
                          </div>
                          <div>
                            <Label>Estado</Label>
                            <p className="text-sm">{appointment.status}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Acciones</Label>
                          <div className="flex gap-2">
                            {appointment.status === "pendiente" ? (
                              <>
                                <Button variant="outline" className="w-full">
                                  Confirmar
                                </Button>
                                <Button variant="outline" className="w-full">
                                  Reagendar
                                </Button>
                                <Button variant="outline" className="w-full text-red-600 hover:text-red-600">
                                  Rechazar
                                </Button>
                              </>
                            ) : appointment.status === "confirmada" ? (
                              <>
                                <Button variant="outline" className="w-full">
                                  Reagendar
                                </Button>
                                <Button variant="outline" className="w-full">
                                  Completar
                                </Button>
                                <Button variant="outline" className="w-full text-red-600 hover:text-red-600">
                                  Cancelar
                                </Button>
                              </>
                            ) : (
                              <Button variant="outline" className="w-full">
                                Reactivar
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
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
