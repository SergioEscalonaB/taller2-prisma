import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProfesoresService {
  constructor(private prisma: PrismaService) {}

  async crearProfesor(data: { nombre: string; correo: string }) {
    return this.prisma.profesor.create({ data });
  }

  async obtenerProfesores() {
    return this.prisma.profesor.findMany({
      include: { salones: true },
    });
  }
}
