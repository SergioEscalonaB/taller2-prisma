import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProfesoresModule } from './profesores/profesores.module';
import { SalonesModule } from './salones/salones.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AsistenciasModule } from './asistencias/asistencias.module';

@Module({
  imports: [
    ProfesoresModule,
    SalonesModule,
    AlumnosModule,
    AsistenciasModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
