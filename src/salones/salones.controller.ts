import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalonesService } from './salones.service';

@Controller('salones')
export class SalonesController {
  constructor(private readonly salonesService: SalonesService) {}

  @Post()
  crear(@Body() body: { nombre: string; profesorId: number }) {
    return this.salonesService.crearSalon(body);
  }

  @Get()
  obtener() {
    return this.salonesService.obtenerSalones();
  }
}
