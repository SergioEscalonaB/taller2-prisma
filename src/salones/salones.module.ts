import { Module } from "@nestjs/common";
import { SalonesService } from "./salones.service";
import { SalonesController } from "./salones.controller";
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [SalonesController],
  providers: [SalonesService, PrismaService],
})
export class SalonesModule {}
