"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  Bell, 
  Calendar, 
  CreditCard, 
  Home, 
  LogOut, 
  Menu, 
  Search, 
  Settings, 
  User, 
  Users,
  Store,
  FileText,
  BarChart4,
  Cog
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"

export default function AdminDashboard() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    router.push("/login")
  }

  // Datos simulados
  const stats = [
    {
      title: "Usuarios Totales",
      value: "1,234",
      change: "+12%",
      changeType: "increase",
      icon: Users
    },
    {
      title: "Servicios Activos",
      value: "156",
      change: "+5%",
      changeType: "increase",
      icon: Store
    },
    {
      title: "Transacciones Mensuales",
      value: "$45,678",
      change: "+8%",
      changeType: "increase",
      icon: CreditCard
    },
    {
      title: "Reportes Pendientes",
      value: "23",
      change: "-15%",
      changeType: "decrease",
      icon: FileText
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      user: "María López",
      service: "Consulta Veterinaria",
      amount: "$50.000",
      status: "completada",
      date: "Hace 2 horas"
    },
    {
      id: 2,
      user: "Juan Pérez",
      service: "Peluquería Canina",
      amount: "$35.000",
      status: "pendiente",
      date: "Hace 3 horas"
    },
    {
      id: 3,
      user: "Ana García",
      service: "Paseo Canino",
      amount: "$25.000",
      status: "completada",
      date: "Hace 5 horas"
    }
  ]

  const recentUsers = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      type: "Cliente",
      joined: "Hace 1 día",
      status: "activo"
    },
    {
      id: 2,
      name: "Laura Martínez",
      type: "Proveedor",
      joined: "Hace 2 días",
      status: "pendiente"
    },
    {
      id: 3,
      name: "Pedro Sánchez",
      type: "Cliente",
      joined: "Hace 3 días",
      status: "activo"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2 border-b p-4">
                <Logo />
              </div>
              <nav className="flex-1 overflow-auto py-4">
                <div className="grid gap-1 px-2">
                  <Link
                    href="/admin/dashboard"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary hover:bg-accent transition-all"
                  >
                    <Home className="h-5 w-5" />
                    Inicio
                  </Link>
                  <Link
                    href="/admin/users"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Users className="h-5 w-5" />
                    Usuarios
                  </Link>
                  <Link
                    href="/admin/services"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Store className="h-5 w-5" />
                    Servicios
                  </Link>
                  <Link
                    href="/admin/transactions"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <CreditCard className="h-5 w-5" />
                    Transacciones
                  </Link>
                  <Link
                    href="/admin/reports"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <BarChart4 className="h-5 w-5" />
                    Reportes
                  </Link>
                  <Link
                    href="/admin/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Cog className="h-5 w-5" />
                    Configuración
                  </Link>
                </div>
              </nav>
              <div className="border-t p-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5" />
                  Cerrar Sesión
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:gap-8">
          <Link href="/admin/dashboard" className="hidden md:block">
            <Logo />
          </Link>
          <div className="flex-1">
            <form className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="w-full pl-10 md:w-2/3 lg:w-1/2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="hidden md:inline-flex"
          >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Cerrar sesión</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-72 shrink-0 border-r bg-background md:block">
          <div className="flex h-full flex-col">
            <nav className="flex-1 overflow-auto py-4">
              <div className="grid gap-1 px-2">
                <Link
                  href="/admin/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-primary transition-all"
                >
                  <Home className="h-5 w-5" />
                  Inicio
                </Link>
                <Link
                  href="/admin/users"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <Users className="h-5 w-5" />
                  Usuarios
                </Link>
                <Link
                  href="/admin/services"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <Store className="h-5 w-5" />
                  Servicios
                </Link>
                <Link
                  href="/admin/transactions"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <CreditCard className="h-5 w-5" />
                  Transacciones
                </Link>
                <Link
                  href="/admin/reports"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <BarChart4 className="h-5 w-5" />
                  Reportes
                </Link>
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <Cog className="h-5 w-5" />
                  Configuración
                </Link>
              </div>
            </nav>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container py-6 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Panel de Administración</h1>
              <p className="text-muted-foreground">Bienvenido al panel de control de PawCare</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                        {stat.change} desde el mes pasado
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Transacciones Recientes</CardTitle>
                  <CardDescription>Últimas transacciones realizadas en la plataforma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{transaction.user}</p>
                        <p className="text-sm text-muted-foreground">{transaction.service}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="font-bold">{transaction.amount}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          transaction.status === "completada" 
                            ? "bg-green-100 text-green-600" 
                            : "bg-yellow-100 text-yellow-600"
                        }`}>
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/admin/transactions">Ver todas las transacciones</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usuarios Recientes</CardTitle>
                  <CardDescription>Últimos usuarios registrados en la plataforma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.type}</p>
                        <p className="text-xs text-muted-foreground">{user.joined}</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        user.status === "activo" 
                          ? "bg-green-100 text-green-600" 
                          : "bg-yellow-100 text-yellow-600"
                      }`}>
                        {user.status}
                      </span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/admin/users">Ver todos los usuarios</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
