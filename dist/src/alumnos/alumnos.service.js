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
exports.AlumnosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AlumnosService = class AlumnosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crearAlumno(data) {
        const salon = await this.prisma.salon.findUnique({
            where: { id: data.salonId },
        });
        if (!salon) {
            throw new Error('El salón no existe');
        }
        return this.prisma.alumno.create({
            data: {
                nombre: data.nombre,
                correo: data.correo,
                salonId: data.salonId,
            },
        });
    }
    async obtenerAlumnos() {
        return this.prisma.alumno.findMany({
            include: { salon: true },
        });
    }
};
exports.AlumnosService = AlumnosService;
exports.AlumnosService = AlumnosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AlumnosService);
//# sourceMappingURL=alumnos.service.js.map