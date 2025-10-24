import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Post()
  crear(@Body() body: { nombre: string; correo: string; salonId: number }) {
    return this.alumnosService.crearAlumno(body);
  }

  @Get()
  obtener() {
    return this.alumnosService.obtenerAlumnos();
  }
}
