import Link from "next/link"
import { ArrowRight, Calendar, CreditCard, Shield, Star } from "lucide-react"
import { Button } from "./components/ui/button"
import { Logo } from "./components/logo"
import { PawIcon } from "./components/ui/paw-icon"

export default function Home() {
  // Define baseUrl para imágenes locales (ajusta si tu subcarpeta de deploy es distinta)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#servicios" className="text-sm font-medium hover:text-secondary">
              Servicios
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium hover:text-secondary">
              Cómo Funciona
            </Link>
            <Link href="#testimonios" className="text-sm font-medium hover:text-secondary">
              Testimonios
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg relative overflow-hidden animate-fade-in">
        <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80" alt="Perro feliz" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary drop-shadow-lg">
                  Cuidado experto para tu mascota
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl p-2 animate-fade-in">
                  Conectamos a dueños de mascotas con los mejores cuidadores profesionales. Servicios de calidad y
                  confianza para tu compañero peludo.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register?type=client">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-lg">
                    Buscar Servicios
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/register?type=provider">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 shadow-lg animate-fade-in"
                  >
                    Ofrecer Servicios
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mr-0 flex items-center justify-center animate-fade-in-up">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-72 w-72 bg-accent/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -right-4 -bottom-4 h-72 w-72 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
                <img
                  alt="Hero"
                  className="relative mx-auto aspect-square overflow-hidden rounded-full object-cover object-center shadow-xl border-4 border-white animate-fade-in"
                  height="400"
                  src={`${baseUrl}/logo.png`}
                  width="400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-background animate-fade-in-up">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Nuestros Servicios</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos una amplia gama de servicios profesionales para el cuidado de tu mascota
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Paseos y Cuidado Diario</h3>
              <p className="text-center text-gray-500">
                Paseos programados y cuidado diario por profesionales capacitados
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Servicios Veterinarios</h3>
              <p className="text-center text-gray-500">
                Atención veterinaria a domicilio y servicios de salud preventiva
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Peluquería y Estética</h3>
              <p className="text-center text-gray-500">
                Servicios de peluquería y estética profesional para mascotas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32 teal-gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Cómo Funciona</h2>
              <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conectarte con un cuidador profesional es fácil y seguro
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <h3 className="text-xl font-bold text-white">Regístrate</h3>
              <p className="text-center text-gray-200">
                Crea tu cuenta gratuita como dueño de mascota o proveedor de servicios
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-bold text-white">Encuentra o Publica</h3>
              <p className="text-center text-gray-200">
                Busca servicios disponibles o publica tus servicios como proveedor
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-xl font-bold text-white">Conecta</h3>
              <p className="text-center text-gray-200">
                Coordina el servicio y realiza el pago de forma segura a través de la plataforma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-background animate-fade-in-up">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                Lo que dicen nuestros usuarios
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Historias reales de dueños de mascotas y proveedores de servicios
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-lg bg-white/90 hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="space-y-2">
                <p className="text-gray-500">
                  "Excelente servicio. Los cuidadores son muy profesionales y mi perro los adora. Totalmente recomendado."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Ana García" className="h-12 w-12 rounded-full object-cover border-2 border-accent shadow" />
                <div>
                  <h4 className="font-semibold text-primary">Ana García</h4>
                  <p className="text-sm text-gray-500">Dueña de Max</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-lg bg-white/90 hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="space-y-2">
                <p className="text-gray-500">
                  "Como veterinario, la plataforma me ha permitido llegar a más clientes y ofrecer un mejor servicio."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Juan Pérez" className="h-12 w-12 rounded-full object-cover border-2 border-accent shadow" />
                <div>
                  <h4 className="font-semibold text-primary">Dr. Juan Pérez</h4>
                  <p className="text-sm text-gray-500">Veterinario</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-lg bg-white/90 hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="space-y-2">
                <p className="text-gray-500">
                  "Encontrar un paseador confiable para mi perro nunca había sido tan fácil. ¡Gracias PawCare!"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Carlos Rodríguez" className="h-12 w-12 rounded-full object-cover border-2 border-accent shadow" />
                <div>
                  <h4 className="font-semibold text-primary">Carlos Rodríguez</h4>
                  <p className="text-sm text-gray-500">Dueño de Luna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex gap-4 text-center text-sm leading-loose text-gray-500 md:text-left">
            2025 PawCare. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:text-secondary" href="/terms">
                Términos
              </Link>
              <Link className="text-sm font-medium hover:text-secondary" href="/privacy">
                Privacidad
              </Link>
              <Link className="text-sm font-medium hover:text-secondary" href="/contact">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
