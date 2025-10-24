import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AsistenciasService {
  constructor(private prisma: PrismaService) {}

  async registrarAsistencia(data: { alumnoId: number; fecha: string; presente: boolean }) {
    // Verificar que el alumno exista
    const alumno = await this.prisma.alumno.findUnique({
      where: { id: data.alumnoId },
    });

    if (!alumno) {
      throw new Error('El alumno no existe');
    }

    // Registrar asistencia
    return this.prisma.asistencia.create({
      data: {
        fecha: new Date(data.fecha),
        presente: data.presente,
        alumnoId: data.alumnoId,
      },
    });
  }

  async obtenerAsistencias() {
    return this.prisma.asistencia.findMany({
      include: {
        alumno: {
          include: { salon: true },
        },
      },
    });
  }
}
