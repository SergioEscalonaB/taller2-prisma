import { Controller, Get, Post, Body } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';

@Controller('asistencias')
export class AsistenciasController {
  constructor(private readonly asistenciasService: AsistenciasService) {}

  @Post()
  registrar(
    @Body() body: { alumnoId: number; fecha: string; presente: boolean },
  ) {
    return this.asistenciasService.registrarAsistencia(body);
  }

  @Get()
  obtener() {
    return this.asistenciasService.obtenerAsistencias();
  }
}
