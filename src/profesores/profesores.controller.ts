import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';

@Controller('profesores')
export class ProfesoresController {
  constructor(private readonly profesoresService: ProfesoresService) {}

  @Post()
  crear(@Body() body: { nombre: string; correo: string }) {
    return this.profesoresService.crearProfesor(body);
  }

  @Get()
  obtener() {
    return this.profesoresService.obtenerProfesores();
  }
}
