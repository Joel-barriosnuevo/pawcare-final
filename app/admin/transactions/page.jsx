"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileText, Ban, CheckCircle } from "lucide-react"

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([
    {
      id: "TRX-001",
      service: "Consulta Veterinaria",
      client: "Carlos Rodríguez",
      provider: "Dr. Juan Pérez",
      amount: "50.000",
      commission: "5.000",
      status: "Completada",
      date: "28 Mar 2025"
    },
    {
      id: "TRX-002",
      service: "Peluquería Canina",
      client: "María López",
      provider: "Pet Style",
      amount: "35.000",
      commission: "3.500",
      status: "Pendiente",
      date: "28 Mar 2025"
    },
    // Más transacciones...
  ])

  const handleViewDetails = (transactionId) => {
    // Implementar vista de detalles
    console.log("Ver detalles de transacción:", transactionId)
  }

  const handleApprove = (transactionId) => {
    setTransactions(transactions.map(trx => 
      trx.id === transactionId ? { ...trx, status: "Completada" } : trx
    ))
    // Aquí iría la lógica para enviar al backend
  }

  const handleReject = (transactionId) => {
    setTransactions(transactions.map(trx => 
      trx.id === transactionId ? { ...trx, status: "Rechazada" } : trx
    ))
    // Aquí iría la lógica para enviar al backend
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Transacciones</h1>
          <p className="text-muted-foreground">Gestiona las transacciones de la plataforma</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10" placeholder="Buscar transacciones..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por servicio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los servicios</SelectItem>
            <SelectItem value="veterinary">Consulta Veterinaria</SelectItem>
            <SelectItem value="grooming">Peluquería</SelectItem>
            <SelectItem value="walking">Paseo</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="completed">Completadas</SelectItem>
            <SelectItem value="pending">Pendientes</SelectItem>
            <SelectItem value="rejected">Rechazadas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Servicio</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Proveedor</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Comisión</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.service}</TableCell>
                <TableCell>{transaction.client}</TableCell>
                <TableCell>{transaction.provider}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>${transaction.commission}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    transaction.status === "Completada"
                      ? "bg-green-100 text-green-800"
                      : transaction.status === "Pendiente"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {transaction.status}
                  </span>
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Detalles de la Transacción</DialogTitle>
                          <DialogDescription>
                            Información detallada de la transacción {transaction.id}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium">Servicio</h4>
                              <p className="text-sm text-muted-foreground">{transaction.service}</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Estado</h4>
                              <p className="text-sm text-muted-foreground">{transaction.status}</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Cliente</h4>
                              <p className="text-sm text-muted-foreground">{transaction.client}</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Proveedor</h4>
                              <p className="text-sm text-muted-foreground">{transaction.provider}</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Monto</h4>
                              <p className="text-sm text-muted-foreground">${transaction.amount}</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Comisión</h4>
                              <p className="text-sm text-muted-foreground">${transaction.commission}</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Fecha</h4>
                              <p className="text-sm text-muted-foreground">{transaction.date}</p>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {transaction.status === "Pendiente" && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleApprove(transaction.id)}
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleReject(transaction.id)}
                        >
                          <Ban className="h-4 w-4 text-red-600" />
                        </Button>
                      </>
                    )}
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
