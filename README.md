# 🧠 Taller 2 — Prisma + NestJS

Proyecto desarrollado por **Sergio Escalona** (Ingeniería de Sistemas).  
Aplicación backend con **NestJS** y **Prisma ORM** para gestionar profesores, salones, alumnos y asistencias.  
La base de datos está alojada en **Supabase (PostgreSQL)**.

---

## 🚀 Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)  
- [npm](https://www.npmjs.com/)  
- [PostgreSQL](https://www.postgresql.org/) o una cuenta en [Supabase](https://supabase.com/)  
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (`npm i -g @nestjs/cli`)

---

## ⚙️ Instalación del proyecto

Clona este repositorio:
```bash
git clone https://github.com/SergioEscalonaB/taller2-prisma.git
cd taller2-prisma
```

Instala las dependencias:
```bash
npm install
```

Genera el cliente de Prisma:
```bash
npx prisma generate
```

---

## 🔐 Configuración del entorno

Crea un archivo llamado **`.env`** en la raíz del proyecto con el siguiente contenido:

```env
DATABASE_URL="postgresql://postgres.ukdgvjoruaazjmymescw:[YOUR_PASSWORD]@aws-1-us-east-2.pooler.supabase.com:5432/postgres"
```

> ⚠️ Reemplaza `[YOUR_PASSWORD]` por tu contraseña real de Supabase.  
> Este archivo **no debe subirse a GitHub** (ya está protegido por `.gitignore`).

---

## 🧩 Migraciones de Prisma

Ejecuta el siguiente comando para crear las tablas de la base de datos:
```bash
npx prisma migrate dev --name init
```

Puedes ver el esquema del modelo en:
```
/prisma/schema.prisma
```

Y las migraciones generadas en:
```
/prisma/migrations/
```

---

## 🧠 Estructura del proyecto

```
src/
 ┣ alumnos/
 ┣ asistencias/
 ┣ profesores/
 ┣ salones/
 ┣ app.module.ts
 ┣ main.ts
 ┗ prisma.service.ts
```

Cada módulo maneja su propio controlador, servicio y rutas.

---

## ▶️ Ejecución del proyecto

Para iniciar el servidor de desarrollo:
```bash
npm run start:dev
```

La API estará disponible en:
```
http://localhost:3000
```

---

## 🧰 Comandos útiles

| Comando | Descripción |
|----------|--------------|
| `npx prisma studio` | Abre la interfaz visual para ver los datos |
| `npx prisma generate` | Regenera el cliente Prisma |
| `npx prisma migrate dev` | Aplica migraciones |
| `npm run start:dev` | Inicia el servidor NestJS |

---

## 📬 Endpoints principales

### 🧑‍🏫 Profesores

**Crear profesor**
```http
POST /profesores
Content-Type: application/json

{
  "nombre": "Carlos Pérez"
}
```

**Obtener todos los profesores**
```http
GET /profesores
```

---

### 🏫 Salones

**Crear salón**
```http
POST /salones
Content-Type: application/json

{
  "nombre": "Salón A",
  "profesorId": 1
}
```

**Obtener todos los salones**
```http
GET /salones
```

---

### 👨‍🎓 Alumnos

**Crear alumno**
```http
POST /alumnos
Content-Type: application/json

{
  "nombre": "Ana Gómez",
  "salonId": 1
}
```

**Obtener todos los alumnos**
```http
GET /alumnos
```

---

### 📋 Asistencias

**Registrar asistencia**
```http
POST /asistencias
Content-Type: application/json

{
  "alumnoId": 1,
  "fecha": "2025-10-23",
  "estado": "Presente"
}
```

**Obtener todas las asistencias**
```http
GET /asistencias
```

---

## 🧠 Guía de uso paso a paso

1. Clona el repositorio desde GitHub.  
2. Instala las dependencias con `npm install`.  
3. Crea tu archivo `.env` con tu conexión a la base de datos.  
4. Ejecuta `npx prisma migrate dev --name init` para crear las tablas.  
5. Inicia el servidor con `npm run start:dev`.  
6. Abre [http://localhost:3000](http://localhost:3000) y prueba los endpoints desde Postman o Insomnia.  
7. (Opcional) Usa `npx prisma studio` para gestionar visualmente los datos.

---

## 🧾 Notas finales

- Este proyecto usa **NestJS + Prisma + Supabase (PostgreSQL)**.  
- Las credenciales de conexión deben mantenerse privadas.  
- El archivo `.env` no debe subirse al repositorio.  
- Puedes extender este proyecto con autenticación, validación de datos o frontend en el futuro.

---

👨‍💻 Desarrollado por **Sergio Escalona**  
📘 Ingeniería de Sistemas — Taller 2
