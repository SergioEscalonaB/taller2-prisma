import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AlumnosService {
  constructor(private prisma: PrismaService) {}

  async crearAlumno(data: { nombre: string; correo: string; salonId: number }) {
    // Verificar que el salón exista
    const salon = await this.prisma.salon.findUnique({
      where: { id: data.salonId },
    });

    if (!salon) {
      throw new Error('El salón no existe');
    }

    // Crear el alumno
    return this.prisma.alumno.create({
      data: {
        nombre: data.nombre,
        correo: data.correo,
        salonId: data.salonId,
      },
    });
  }

  async obtenerAlumnos() {
    return this.prisma.alumno.findMany({
      include: { salon: true }, // Incluye el salón al que pertenece el alumno
    });
  }
}
