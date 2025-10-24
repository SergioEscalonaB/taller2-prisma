"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalonesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let SalonesService = class SalonesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crearSalon(data) {
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
};
exports.SalonesService = SalonesService;
exports.SalonesService = SalonesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalonesService);
//# sourceMappingURL=salones.service.js.map