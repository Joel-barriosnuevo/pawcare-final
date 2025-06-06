# 🐾 PawCare - Sistema Integral de Gestión Veterinaria

## 📋 Descripción General
PawCare es un sistema integral de gestión veterinaria que combina una aplicación web moderna con servicios backend robustos. El sistema está diseñado para facilitar la gestión de clínicas veterinarias, permitiendo el manejo eficiente de pacientes, citas, historiales médicos y más.

## 🏗️ Arquitectura del Sistema

### Frontend
- **Tecnologías**: Next.js 14, React, TailwindCSS
- **Características**:
  - Diseño responsive y moderno
  - Interfaz de usuario intuitiva
  - Optimización de rendimiento
  - Soporte para PWA

### Backend
- **Tecnologías**: Java Spring Boot, PostgreSQL
- **Servicios**:
  - API Gateway
  - Servicio de Autenticación
  - Servicio de Gestión de Pacientes
  - Servicio de Citas
  - Config Server

## 🚀 Requisitos del Sistema

### Frontend
- Node.js 18.x o superior
- npm 9.x o superior

### Backend
- Java 17 o superior
- PostgreSQL 15.x
- Maven 3.8.x

## 🛠️ Instalación y Configuración

### Frontend
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Iniciar en desarrollo
npm run dev

# Construir para producción
npm run build
```

### Backend
```bash
# Configurar base de datos
psql -U postgres
CREATE DATABASE pawcare_db;
CREATE DATABASE pawcare_auth;
CREATE DATABASE pawcare_config;

# Compilar servicios
cd pawcare-java
mvn clean install

# Iniciar servicios
java -jar gateway-service/target/gateway-service.jar
java -jar auth-service/target/auth-service.jar
java -jar patient-service/target/patient-service.jar
java -jar appointment-service/target/appointment-service.jar
```

## 📁 Estructura del Proyecto

```
pawcare/
├── app/                    # Componentes principales de Next.js
├── components/            # Componentes reutilizables
├── lib/                   # Utilidades y configuraciones
├── public/               # Archivos estáticos
├── pawcare-java/         # Servicios backend
│   ├── gateway-service/
│   ├── auth-service/
│   ├── patient-service/
│   └── appointment-service/
└── config/               # Configuraciones del sistema
```

## 🔐 Configuración de Seguridad

### Variables de Entorno
```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_AUTH_URL=http://localhost:8081

# Backend
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/pawcare_db
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=your_password
```

## 📊 Base de Datos

### Esquemas Principales
- **Pacientes**: Información de mascotas y propietarios
- **Citas**: Gestión de citas y consultas
- **Usuarios**: Gestión de usuarios y autenticación
- **Configuración**: Configuraciones del sistema

## 🔄 Flujos de Trabajo

### Registro de Pacientes
1. Ingreso de datos del propietario
2. Registro de mascota
3. Creación de historial médico
4. Asignación de veterinario

### Gestión de Citas
1. Selección de fecha y hora
2. Asignación de veterinario
3. Confirmación de cita
4. Notificaciones automáticas

## 🧪 Testing

### Frontend
```bash
npm run test
npm run test:e2e
```

### Backend
```bash
mvn test
```

## 📈 Despliegue

### Frontend (Netlify)
```bash
# Despliegue automático desde main
git push origin main
```

### Backend (Docker)
```bash
docker-compose up -d
```

## 🤝 Contribución
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📝 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Soporte
Para soporte, por favor crear un issue en el repositorio o contactar al equipo de desarrollo.

## 🙏 Agradecimientos
- Equipo de desarrollo
- Contribuidores
- Comunidad de código abierto

# 🐾 PawCare - Documentación Técnica

## 📁 Estructura del Proyecto

### Backend (pawcare-java/)
```
pawcare-java/
├── api-gateway/           # Gateway de API - Punto de entrada único
├── auth-service/         # Servicio de autenticación y autorización
├── config-service/       # Servicio de configuración centralizada
├── eureka-server/        # Servidor de registro y descubrimiento
├── pet-service/          # Gestión de mascotas y propietarios
├── appointment-service/  # Gestión de citas y consultas
├── review-service/       # Sistema de reseñas y calificaciones
├── payment-service/      # Procesamiento de pagos
├── user-service/         # Gestión de usuarios
├── reporting-service/    # Generación de reportes
└── database/            # Scripts y configuraciones de base de datos
```

## 🔧 Servicios y sus Funcionalidades

### 1. API Gateway (api-gateway/)
- **Propósito**: Punto de entrada único para todas las peticiones
- **Tecnologías**: Spring Cloud Gateway
- **Funcionalidades**:
  - Enrutamiento de peticiones
  - Balanceo de carga
  - Filtrado de peticiones
  - Rate limiting
  - CORS configuration

### 2. Servicio de Autenticación (auth-service/)
- **Propósito**: Gestión de autenticación y autorización
- **Tecnologías**: Spring Security, JWT
- **Funcionalidades**:
  - Registro de usuarios
  - Login/Logout
  - Gestión de tokens JWT
  - Roles y permisos
  - Recuperación de contraseña

### 3. Servicio de Configuración (config-service/)
- **Propósito**: Configuración centralizada
- **Tecnologías**: Spring Cloud Config
- **Funcionalidades**:
  - Configuración por ambiente
  - Actualización en caliente
  - Gestión de secretos
  - Configuración por servicio

### 4. Servicio de Mascotas (pet-service/)
- **Propósito**: Gestión de mascotas y propietarios
- **Tecnologías**: Spring Boot, JPA
- **Funcionalidades**:
  - CRUD de mascotas
  - Gestión de propietarios
  - Historial médico
  - Vacunas y tratamientos
  - Documentos médicos

### 5. Servicio de Citas (appointment-service/)
- **Propósito**: Gestión de citas y consultas
- **Tecnologías**: Spring Boot, JPA
- **Funcionalidades**:
  - Programación de citas
  - Gestión de disponibilidad
  - Recordatorios
  - Historial de consultas
  - Notificaciones

### 6. Servicio de Reseñas (review-service/)
- **Propósito**: Sistema de reseñas y calificaciones
- **Tecnologías**: Spring Boot, JPA
- **Funcionalidades**:
  - Calificaciones de servicios
  - Comentarios
  - Estadísticas
  - Moderación de reseñas

### 7. Servicio de Pagos (payment-service/)
- **Propósito**: Procesamiento de pagos
- **Tecnologías**: Spring Boot, Stripe API
- **Funcionalidades**:
  - Procesamiento de pagos
  - Facturación
  - Reembolsos
  - Historial de transacciones

### 8. Servicio de Usuarios (user-service/)
- **Propósito**: Gestión de usuarios
- **Tecnologías**: Spring Boot, JPA
- **Funcionalidades**:
  - Perfiles de usuario
  - Preferencias
  - Notificaciones
  - Gestión de sesiones

### 9. Servicio de Reportes (reporting-service/)
- **Propósito**: Generación de reportes
- **Tecnologías**: Spring Boot, JasperReports
- **Funcionalidades**:
  - Reportes médicos
  - Estadísticas
  - Exportación de datos
  - Dashboards

## 📊 Base de Datos

### Esquemas Principales
```sql
-- Esquema de Mascotas
CREATE TABLE pets (
    id BIGINT PRIMARY KEY,
    name VARCHAR(100),
    species VARCHAR(50),
    breed VARCHAR(50),
    birth_date DATE,
    owner_id BIGINT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Esquema de Citas
CREATE TABLE appointments (
    id BIGINT PRIMARY KEY,
    pet_id BIGINT,
    vet_id BIGINT,
    date_time TIMESTAMP,
    status VARCHAR(20),
    notes TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Esquema de Usuarios
CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    email VARCHAR(100),
    password VARCHAR(255),
    role VARCHAR(20),
    status VARCHAR(20),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

## 🔄 Flujos de Comunicación

### Registro de Usuario
1. Cliente → API Gateway
2. API Gateway → Auth Service
3. Auth Service → User Service
4. User Service → Database

### Creación de Cita
1. Cliente → API Gateway
2. API Gateway → Appointment Service
3. Appointment Service → Pet Service (verificación)
4. Appointment Service → Notification Service
5. Appointment Service → Database

## 🛠️ Configuración de Desarrollo

### Requisitos
- Java 17
- Maven 3.8+
- PostgreSQL 15+
- Docker y Docker Compose

### Variables de Entorno
```properties
# Configuración General
SPRING_PROFILES_ACTIVE=dev
SERVER_PORT=8080

# Base de Datos
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/pawcare
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=secret

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRATION=86400000

# Eureka
EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://localhost:8761/eureka/
```

## 🚀 Despliegue

### Docker Compose
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: pawcare
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
    ports:
      - "5432:5432"

  eureka-server:
    build: ./eureka-server
    ports:
      - "8761:8761"

  config-service:
    build: ./config-service
    depends_on:
      - eureka-server
    ports:
      - "8888:8888"
```

## 🔍 Monitoreo y Logging

### Endpoints de Actuator
- /actuator/health
- /actuator/metrics
- /actuator/prometheus

### Logging
- Logback para logging
- ELK Stack para análisis
- Prometheus + Grafana para métricas

## 🧪 Testing

### Tipos de Tests
- Unit Tests (JUnit 5)
- Integration Tests (Spring Test)
- E2E Tests (Cucumber)

### Cobertura
- JaCoCo para cobertura de código
- SonarQube para análisis de calidad

## 📈 Métricas y Monitoreo

### Métricas Principales
- Tasa de respuesta
- Tiempo de respuesta
- Uso de CPU/Memoria
- Errores por servicio
- Latencia

### Alertas
- Slack notifications
- Email alerts
- PagerDuty integration

## 🔒 Seguridad

### Implementaciones
- JWT para autenticación
- Spring Security para autorización
- HTTPS/TLS
- Rate limiting
- CORS configuration

### Buenas Prácticas
- Validación de entrada
- Sanitización de datos
- Encriptación en reposo
- Logging de seguridad
- Auditoría de accesos
