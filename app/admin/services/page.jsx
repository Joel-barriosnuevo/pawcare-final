"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Search, Plus, Edit, Trash2, Settings } from "lucide-react"

export default function ServicesPage() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Consulta Veterinaria",
      category: "Salud",
      price: "50.000",
      status: "Activo",
      providers: 12
    },
    {
      id: 2,
      name: "Peluquería Canina",
      category: "Estética",
      price: "35.000",
      status: "Activo",
      providers: 8
    },
    // Más servicios...
  ])

  const [newService, setNewService] = useState({
    name: "",
    category: "",
    price: "",
    description: ""
  })

  const handleAddService = () => {
    const service = {
      id: services.length + 1,
      ...newService,
      status: "Activo",
      providers: 0
    }
    setServices([...services, service])
    // Aquí iría la lógica para enviar al backend
  }

  const handleEditService = (serviceId) => {
    // Implementar edición de servicio
    console.log("Editando servicio:", serviceId)
  }

  const handleDeleteService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId))
    // Aquí iría la lógica para enviar al backend
  }

  const handleStatusChange = (serviceId, newStatus) => {
    setServices(services.map(service => 
      service.id === serviceId ? { ...service, status: newStatus } : service
    ))
    // Aquí iría la lógica para enviar al backend
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Servicios</h1>
          <p className="text-muted-foreground">Gestiona los servicios disponibles en la plataforma</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Agregar Servicio
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar Nuevo Servicio</DialogTitle>
              <DialogDescription>
                Ingresa los detalles del nuevo servicio que estará disponible en la plataforma.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre del servicio</Label>
                <Input
                  id="name"
                  value={newService.name}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Categoría</Label>
                <Select
                  value={newService.category}
                  onValueChange={(value) => setNewService({ ...newService, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="health">Salud</SelectItem>
                    <SelectItem value="grooming">Estética</SelectItem>
                    <SelectItem value="training">Entrenamiento</SelectItem>
                    <SelectItem value="walking">Paseo</SelectItem>
                    <SelectItem value="daycare">Guardería</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Precio base</Label>
                <Input
                  id="price"
                  type="number"
                  value={newService.price}
                  onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddService}>Agregar Servicio</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10" placeholder="Buscar servicios..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            <SelectItem value="health">Salud</SelectItem>
            <SelectItem value="grooming">Estética</SelectItem>
            <SelectItem value="training">Entrenamiento</SelectItem>
            <SelectItem value="walking">Paseo</SelectItem>
            <SelectItem value="daycare">Guardería</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="active">Activos</SelectItem>
            <SelectItem value="inactive">Inactivos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Servicio</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Precio Base</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Proveedores</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell>
                  <div className="font-medium">{service.name}</div>
                </TableCell>
                <TableCell>{service.category}</TableCell>
                <TableCell>${service.price}</TableCell>
                <TableCell>
                  <Select
                    value={service.status.toLowerCase()}
                    onValueChange={(value) => handleStatusChange(service.id, value)}
                  >
                    <SelectTrigger className="w-[130px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="activo">Activo</SelectItem>
                      <SelectItem value="inactivo">Inactivo</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>{service.providers}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditService(service.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Configurar Servicio</DialogTitle>
                          <DialogDescription>
                            Configura los detalles avanzados para {service.name}
                          </DialogDescription>
                        </DialogHeader>
                        {/* Aquí iría el formulario de configuración */}
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
