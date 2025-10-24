import { Module } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { ProfesoresController } from './profesores.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ProfesoresController],
  providers: [ProfesoresService, PrismaService],
})
export class ProfesoresModule {}
