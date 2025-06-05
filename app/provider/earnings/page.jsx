"use client"

import { useState } from "react"
import { Calendar, CreditCard, Download, Filter, Search, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ProviderEarnings() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [selectedYear, setSelectedYear] = useState("2024")
  const [selectedMonth, setSelectedMonth] = useState("3")

  // Datos simulados de estadísticas
  const stats = [
    {
      title: "Ganancias Totales",
      value: "$850.000",
      change: "+15%",
      changeType: "increase",
      icon: CreditCard
    },
    {
      title: "Servicios Completados",
      value: "45",
      change: "+5",
      changeType: "increase",
      icon: TrendingUp
    },
    {
      title: "Promedio por Servicio",
      value: "$38.500",
      change: "+8%",
      changeType: "increase",
      icon: TrendingUp
    }
  ]

  // Datos simulados de transacciones
  const transactions = [
    {
      id: 1,
      client: "María López",
      service: "Consulta Veterinaria",
      date: "15 Mar, 2024",
      amount: "$45.000",
      status: "completado"
    },
    {
      id: 2,
      client: "Juan Pérez",
      service: "Peluquería Canina",
      date: "14 Mar, 2024",
      amount: "$35.000",
      status: "completado"
    },
    {
      id: 3,
      client: "Ana García",
      service: "Paseo Canino",
      date: "13 Mar, 2024",
      amount: "$25.000",
      status: "completado"
    },
    {
      id: 4,
      client: "Carlos Rodríguez",
      service: "Consulta Veterinaria",
      date: "12 Mar, 2024",
      amount: "$45.000",
      status: "completado"
    }
  ]

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Ganancias</h1>
          <p className="text-muted-foreground">Monitorea tus ingresos y transacciones</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Descargar Reporte
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Periodo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Día</SelectItem>
            <SelectItem value="week">Semana</SelectItem>
            <SelectItem value="month">Mes</SelectItem>
            <SelectItem value="year">Año</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Año" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Mes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Enero</SelectItem>
            <SelectItem value="2">Febrero</SelectItem>
            <SelectItem value="3">Marzo</SelectItem>
            <SelectItem value="4">Abril</SelectItem>
            <SelectItem value="5">Mayo</SelectItem>
            <SelectItem value="6">Junio</SelectItem>
            <SelectItem value="7">Julio</SelectItem>
            <SelectItem value="8">Agosto</SelectItem>
            <SelectItem value="9">Septiembre</SelectItem>
            <SelectItem value="10">Octubre</SelectItem>
            <SelectItem value="11">Noviembre</SelectItem>
            <SelectItem value="12">Diciembre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${
                  stat.changeType === "increase" 
                    ? "text-green-600" 
                    : "text-red-600"
                }`}>
                  {stat.change} desde el periodo anterior
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Transacciones</CardTitle>
          <CardDescription>
            Lista de todas las transacciones completadas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex flex-col space-y-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
            >
              <div className="space-y-1">
                <p className="font-medium">{transaction.client}</p>
                <p className="text-sm text-muted-foreground">
                  {transaction.service}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {transaction.date}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <span className="inline-block rounded-full px-2 py-0.5 text-xs bg-green-100 text-green-600">
                    {transaction.status}
                  </span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Ver detalles</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Detalles de la Transacción</DialogTitle>
                      <DialogDescription>
                        Información detallada de la transacción
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Cliente</Label>
                          <p className="text-sm">{transaction.client}</p>
                        </div>
                        <div>
                          <Label>Servicio</Label>
                          <p className="text-sm">{transaction.service}</p>
                        </div>
                        <div>
                          <Label>Fecha</Label>
                          <p className="text-sm">{transaction.date}</p>
                        </div>
                        <div>
                          <Label>Monto</Label>
                          <p className="text-sm">{transaction.amount}</p>
                        </div>
                        <div>
                          <Label>Estado</Label>
                          <p className="text-sm">{transaction.status}</p>
                        </div>
                        <div>
                          <Label>ID de Transacción</Label>
                          <p className="text-sm">#{transaction.id}</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Cargar más transacciones
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
