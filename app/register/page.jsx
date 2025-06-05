"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import axios from 'axios'
import { API_ENDPOINTS } from '../../lib/api'

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Logo } from "../components/logo"
import { PawIcon } from "../components/ui/paw-icon"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "CLIENT",
  })

  useEffect(() => {
    const typeParam = searchParams.get("type")
    if (typeParam) {
      setFormData(prev => ({ ...prev, role: typeParam === "provider" ? "PROVIDER" : "CLIENT" }))
    }
    setMounted(true)
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleRoleChange = (value) => {
    setFormData((prev) => ({ ...prev, role: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    if (formData.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres")
      return
    }

    if (!formData.firstName || !formData.lastName) {
      setError("Debes ingresar nombre y apellido")
      return
    }

    if (!formData.phone.match(/^\+?[1-9]\d{1,14}$/)) {
      setError("El número de teléfono debe tener formato internacional, por ejemplo: +521234567890")
      return
    }

    setIsLoading(true)

    try {
      const registerData = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        role: formData.role
      }

      const response = await axios.post(API_ENDPOINTS.AUTH.REGISTER, registerData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })

      if (response.data) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('refreshToken', response.data.refreshToken)
        router.push(formData.role === "PROVIDER" ? "/provider/dashboard" : "/client/dashboard")
      }
    } catch (error) {
      console.error('Error completo:', error)
      if (error.response) {
        const errorMessage = error.response.data?.message || error.response.data?.error || "Error al crear la cuenta"
        if (error.response.status === 403) {
          setError("No tienes permiso para realizar esta acción")
        } else if (error.response.status === 400) {
          setError(errorMessage)
        } else if (error.response.status === 500) {
          setError("Error interno del servidor. Por favor, intenta nuevamente más tarde")
        } else {
          setError(errorMessage)
        }
      } else if (error.request) {
        setError("No se pudo conectar con el servidor. Verifica tu conexión")
      } else {
        setError("Error al procesar la solicitud")
      }
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background/50 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Link href="/">
              <Logo size="large" />
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold">Crear una cuenta</CardTitle>
          <CardDescription>
            Ingresa tus datos para registrarte en PawCare
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <Tabs defaultValue={formData.role} onValueChange={handleRoleChange} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="CLIENT">
                  Cliente
                </TabsTrigger>
                <TabsTrigger value="PROVIDER">
                  Prestador de Servicios
                </TabsTrigger>
              </TabsList>
              <TabsContent value="CLIENT" className="mt-4">
                <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                  <PawIcon className="h-4 w-4" />
                  Regístrate como cliente para encontrar servicios para tu mascota
                </div>
              </TabsContent>
              <TabsContent value="PROVIDER" className="mt-4">
                <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                  <PawIcon className="h-4 w-4" />
                  Regístrate como prestador para ofrecer tus servicios profesionales
                </div>
              </TabsContent>
            </Tabs>
            <div className="space-y-2">
              <Label htmlFor="firstName">
                Nombre
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Juan"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">
                Apellido
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Pérez"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                Correo electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                Teléfono (formato internacional)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+521234567890"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                Confirmar contraseña
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {error && (
              <div className="text-sm text-red-500 mt-2">
                {error}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Registrando...
                </>
              ) : (
                "Registrarse"
              )}
            </Button>
            <div className="text-sm text-center text-muted-foreground">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Iniciar sesión
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
