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
  Star,
  Heart,
  MessageCircle,
  Clock,
  X 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Logo } from "@/components/logo"
import { PawIcon } from "@/components/ui/paw-icon"

export default function ClientDashboard() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  // Datos simulados de reservas
  const upcomingReservations = [];
  const pastReservations = [];
  const recommendedServices = [];
  const pets = [];
  const notifications = [];

  const handleLogout = () => {
    // Aquí iría la lógica real de cierre de sesión
    router.push("/login")
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleAddToFavorites = (serviceId) => {
    // Aquí iría la lógica real para agregar a favoritos
    console.log("Añadido a favoritos:", serviceId)
  }

  const handleBookService = (serviceId) => {
    router.push(`/client/book/${serviceId}`)
  }

  const handleCancelAppointment = (appointmentId) => {
    // Aquí iría la lógica real para cancelar cita
    console.log("Cancelando cita:", appointmentId)
  }

  const handleRescheduleAppointment = (appointmentId) => {
    router.push(`/client/appointments/${appointmentId}/reschedule`)
  }

  const handleViewProviderProfile = (providerId) => {
    router.push(`/providers/${providerId}`)
  }

  const handleViewPetProfile = (petId) => {
    router.push(`/client/pets/${petId}`)
  }

  const handleAddPet = () => {
    router.push("/client/pets/new")
  }

  const handleDismissNotification = (notificationId) => {
    // Aquí iría la lógica real para descartar notificación
    console.log("Descartando notificación:", notificationId)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header con navegación y búsqueda */}
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
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
                    href="/client/dashboard"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary hover:bg-accent transition-all"
                  >
                    <Home className="h-5 w-5" />
                    Inicio
                  </Link>
                  <Link
                    href="/client/appointments"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Calendar className="h-5 w-5" />
                    Citas
                  </Link>
                  <Link
                    href="/client/favorites"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Heart className="h-5 w-5" />
                    Favoritos
                  </Link>
                  <Link
                    href="/client/reviews"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Reseñas
                  </Link>
                  <Link
                    href="/client/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <User className="h-5 w-5" />
                    Perfil
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
          <Link href="/client/dashboard" className="hidden md:block">
            <Logo />
          </Link>
          <div className="flex-1">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar servicios..."
                className="w-full pl-10 md:w-2/3 lg:w-1/2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Notificaciones */}
          <Sheet open={notificationsOpen} onOpenChange={setNotificationsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-primary" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Notificaciones</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start space-x-4 rounded-lg border p-4"
                  >
                    <div className="rounded-full bg-primary/20 p-2">
                      {notification.type === "reminder" ? (
                        <Clock className="h-4 w-4 text-primary" />
                      ) : (
                        <Star className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">
                        {notification.date}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDismissNotification(notification.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Menú de usuario */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar>
                  <AvatarImage src="/avatars/user.png" alt="Usuario" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push("/client/profile")}>
                Mi Perfil
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/client/pets")}>
                Mis Mascotas
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/client/settings")}>
                Configuración
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 container py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
          {/* Sección de reservas próximas */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Próximas Citas</CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingReservations.length === 0 ? (
                  <div className="flex flex-col items-center py-12">
                    <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80" alt="No hay citas" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
                    <h2 className="text-2xl font-bold mb-2">¡Aún no tienes citas!</h2>
                    <p className="text-muted-foreground mb-4">Agenda tu primera cita y comienza a cuidar de tu mascota con nosotros.</p>
                    <Button onClick={() => router.push("/services")}>Agendar cita</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {upcomingReservations.map((reservation) => (
                      <div
                        key={reservation.id}
                        className="flex items-center justify-between space-x-4"
                      >
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="text-sm font-medium leading-none">
                              {reservation.service}
                            </p>
                            <Button
                              variant="link"
                              className="h-auto p-0 text-sm text-muted-foreground"
                              onClick={() => handleViewProviderProfile(reservation.provider)}
                            >
                              {reservation.provider}
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-sm font-medium leading-none">
                              {reservation.date}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {reservation.time}
                            </p>
                          </div>
                          <Badge variant={reservation.status === "confirmada" ? "success" : "warning"}>
                            {reservation.status}
                          </Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Settings className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleRescheduleAppointment(reservation.id)}>
                                Reprogramar
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleCancelAppointment(reservation.id)}
                                className="text-destructive"
                              >
                                Cancelar
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sección de servicios recomendados */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Servicios Recomendados</CardTitle>
              </CardHeader>
              <CardContent>
                {recommendedServices.length === 0 ? (
                  <div className="flex flex-col items-center py-12">
                    <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80" alt="No hay servicios" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
                    <h2 className="text-2xl font-bold mb-2">¡Aún no tienes servicios recomendados!</h2>
                    <p className="text-muted-foreground mb-4">Explora los servicios disponibles y añade tus favoritos.</p>
                    <Button onClick={() => router.push("/services")}>Ver servicios</Button>
                  </div>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2">
                    {recommendedServices.map((service) => (
                      <Card key={service.id}>
                        <CardContent className="p-0">
                          <div className="relative h-48">
                            <img
                              src={service.image}
                              alt={service.name}
                              className="h-full w-full object-cover"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-2 bg-white/80 hover:bg-white"
                              onClick={() => handleAddToFavorites(service.id)}
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold">{service.name}</h3>
                            <Button
                              variant="link"
                              className="h-auto p-0 text-sm text-muted-foreground"
                              onClick={() => handleViewProviderProfile(service.provider)}
                            >
                              {service.provider}
                            </Button>
                            <div className="mt-2 flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="ml-1 text-sm">{service.rating}</span>
                            </div>
                            <p className="mt-2 font-medium">{service.price}</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {service.description}
                            </p>
                            <Button 
                              className="mt-4 w-full"
                              onClick={() => handleBookService(service.id)}
                            >
                              Reservar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sección de mascotas */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Mis Mascotas</CardTitle>
              </CardHeader>
              <CardContent>
                {pets.length === 0 ? (
                  <div className="flex flex-col items-center py-12">
                    <img src="https://images.unsplash.com/photo-1518715308788-30057527ade5?auto=format&fit=crop&w=400&q=80" alt="No hay mascotas" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
                    <h2 className="text-2xl font-bold mb-2">¡Aún no tienes mascotas!</h2>
                    <p className="text-muted-foreground mb-4">Agrega tu primera mascota para empezar a reservar servicios.</p>
                    <Button onClick={() => router.push("/client/profile")}>Agregar mascota</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pets.map((pet) => (
                      <div
                        key={pet.id}
                        className="flex items-center space-x-4"
                      >
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={pet.image} alt={pet.name} />
                          <AvatarFallback>{pet.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{pet.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {pet.breed} • {pet.age} años
                          </p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewPetProfile(pet.id)}
                        >
                          Ver perfil
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sección de notificaciones */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Notificaciones</CardTitle>
              </CardHeader>
              <CardContent>
                {notifications.length === 0 ? (
                  <div className="flex flex-col items-center py-12">
                    <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80" alt="No hay notificaciones" className="w-48 h-48 object-cover rounded-lg mb-6 shadow" />
                    <h2 className="text-2xl font-bold mb-2">¡Sin notificaciones!</h2>
                    <p className="text-muted-foreground mb-4">Aquí verás novedades importantes sobre tus servicios y reservas.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-start space-x-4"
                      >
                        <div className="rounded-full bg-primary/20 p-2">
                          {notification.type === "reminder" ? (
                            <Clock className="h-4 w-4 text-primary" />
                          ) : (
                            <Star className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {notification.date}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDismissNotification(notification.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
