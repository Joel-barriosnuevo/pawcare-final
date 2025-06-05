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
  Store,
  FileText,
  BarChart4,
  Clock,
  Star
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProviderDashboard() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    router.push("/login")
  }

  // Datos simulados
  const stats = [];
  const upcomingAppointments = [];
  const recentReviews = [];

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
                    href="/provider/dashboard"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary hover:bg-accent transition-all"
                  >
                    <Home className="h-5 w-5" />
                    Inicio
                  </Link>
                  <Link
                    href="/provider/appointments"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Calendar className="h-5 w-5" />
                    Citas
                  </Link>
                  <Link
                    href="/provider/services"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Store className="h-5 w-5" />
                    Mis Servicios
                  </Link>
                  <Link
                    href="/provider/earnings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <CreditCard className="h-5 w-5" />
                    Ganancias
                  </Link>
                  <Link
                    href="/provider/reviews"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Star className="h-5 w-5" />
                    Reseñas
                  </Link>
                  <Link
                    href="/provider/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <User className="h-5 w-5" />
                    Mi Perfil
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
          <Link href="/provider/dashboard" className="hidden md:block">
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
                  href="/provider/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-primary transition-all"
                >
                  <Home className="h-5 w-5" />
                  Inicio
                </Link>
                <Link
                  href="/provider/appointments"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <Calendar className="h-5 w-5" />
                  Citas
                </Link>
                <Link
                  href="/provider/services"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <Store className="h-5 w-5" />
                  Mis Servicios
                </Link>
                <Link
                  href="/provider/earnings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <CreditCard className="h-5 w-5" />
                  Ganancias
                </Link>
                <Link
                  href="/provider/reviews"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <Star className="h-5 w-5" />
                  Reseñas
                </Link>
                <Link
                  href="/provider/profile"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <User className="h-5 w-5" />
                  Mi Perfil
                </Link>
              </div>
            </nav>
          </div>
        </aside>
        <main className="flex-1 container py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
            {/* Sección de citas próximas */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Próximas Citas</CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length === 0 ? (
                    <div className="flex flex-col items-center py-12">
                      <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80" alt="No hay citas" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
                      <h2 className="text-2xl font-bold mb-2">¡Aún no tienes citas!</h2>
                      <p className="text-muted-foreground mb-4">Aquí aparecerán las citas que te reserven los clientes.</p>
                    </div>
                  ) : (
                    upcomingAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{appointment.client}</p>
                          <p className="text-sm text-muted-foreground">{appointment.service}</p>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">{appointment.date}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            appointment.status === "confirmada" 
                              ? "bg-green-100 text-green-600" 
                              : "bg-yellow-100 text-yellow-600"
                          }`}>
                            {appointment.status}
                          </span>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">Ver detalles</Button>
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
                                    <Label>Servicio</Label>
                                    <p className="text-sm">{appointment.service}</p>
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
                                    <Button variant="outline" className="w-full">
                                      Confirmar
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                      Reagendar
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                      Cancelar
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/provider/appointments">Ver todas las citas</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {/* Sección de reseñas recientes */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Reseñas Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  {recentReviews.length === 0 ? (
                    <div className="flex flex-col items-center py-12">
                      <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80" alt="No hay reseñas" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
                      <h2 className="text-2xl font-bold mb-2">¡Aún no tienes reseñas!</h2>
                      <p className="text-muted-foreground mb-4">Cuando tus clientes dejen reseñas, aparecerán aquí.</p>
                    </div>
                  ) : (
                    recentReviews.map((review) => (
                      <div
                        key={review.id}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{review.client}</p>
                          <p className="text-sm text-muted-foreground">{review.service}</p>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                          <p className="text-sm mt-2">{review.comment}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/provider/reviews">Ver todas las reseñas</Link>
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
