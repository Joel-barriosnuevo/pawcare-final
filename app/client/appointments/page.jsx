"use client"

import { useState } from "react"
import { Calendar, Filter, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ClientAppointments() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Datos simulados de citas
  const appointments = []

  const getStatusBadgeColor = (status) => {
    const colors = {
      confirmed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      cancelled: "bg-red-100 text-red-800",
      completed: "bg-blue-100 text-blue-800",
    }
    return colors[status] || "bg-gray-100 text-gray-800"
  }

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch = 
      appointment.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.provider.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mis Citas</h1>
      
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Buscar citas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="confirmed">Confirmados</SelectItem>
            <SelectItem value="pending">Pendientes</SelectItem>
            <SelectItem value="cancelled">Cancelados</SelectItem>
            <SelectItem value="completed">Completados</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {appointments.length === 0 ? (
        <div className="flex flex-col items-center py-12">
          <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80" alt="No hay citas" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
          <h2 className="text-2xl font-bold mb-2">¡Aún no tienes citas!</h2>
          <p className="text-muted-foreground mb-4">Agenda tu primera cita y comienza a cuidar de tu mascota con nosotros.</p>
          <Button onClick={() => router.push("/services")}>Agendar cita</Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredAppointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">{appointment.service}</CardTitle>
                <Badge className={getStatusBadgeColor(appointment.status)}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Proveedor:</span>
                    <span className="font-medium">{appointment.provider}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fecha:</span>
                    <span className="font-medium">{appointment.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Hora:</span>
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Precio:</span>
                    <span className="font-medium">{appointment.price}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 justify-end">
                  <Button variant="outline">Reprogramar</Button>
                  <Button variant="destructive">Cancelar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
