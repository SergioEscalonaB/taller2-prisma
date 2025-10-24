import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SalonesService {
  constructor(private prisma: PrismaService) {}

  async crearSalon(data: { nombre: string; profesorId: number }) {
    // Verificamos que el profesor exista antes de crear el salón
    const profesor = await this.prisma.profesor.findUnique({
      where: { id: data.profesorId },
    });
    if (!profesor) {
      throw new Error('El profesor no existe');
    }

    return this.prisma.salon.create({
      data: {
        nombre: data.nombre,
        profesorId: data.profesorId,
      },
    });
  }

  async obtenerSalones() {
    return this.prisma.salon.findMany({
      include: { profesor: true },
    });
  }
}
