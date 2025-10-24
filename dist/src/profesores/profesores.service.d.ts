import { PrismaService } from '../prisma.service';
export declare class ProfesoresService {
    private prisma;
    constructor(prisma: PrismaService);
    crearProfesor(data: {
        nombre: string;
        correo: string;
    }): Promise<{
        nombre: string;
        correo: string;
        id: number;
    }>;
    obtenerProfesores(): Promise<({
        salones: {
            nombre: string;
            id: number;
            profesorId: number;
        }[];
    } & {
        nombre: string;
        correo: string;
        id: number;
    })[]>;
}
