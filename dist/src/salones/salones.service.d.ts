import { PrismaService } from '../prisma.service';
export declare class SalonesService {
    private prisma;
    constructor(prisma: PrismaService);
    crearSalon(data: {
        nombre: string;
        profesorId: number;
    }): Promise<{
        nombre: string;
        id: number;
        profesorId: number;
    }>;
    obtenerSalones(): Promise<({
        profesor: {
            nombre: string;
            correo: string;
            id: number;
        };
    } & {
        nombre: string;
        id: number;
        profesorId: number;
    })[]>;
}
