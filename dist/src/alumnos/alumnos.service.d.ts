import { PrismaService } from '../prisma.service';
export declare class AlumnosService {
    private prisma;
    constructor(prisma: PrismaService);
    crearAlumno(data: {
        nombre: string;
        correo: string;
        salonId: number;
    }): Promise<{
        nombre: string;
        correo: string;
        id: number;
        salonId: number;
    }>;
    obtenerAlumnos(): Promise<({
        salon: {
            nombre: string;
            id: number;
            profesorId: number;
        };
    } & {
        nombre: string;
        correo: string;
        id: number;
        salonId: number;
    })[]>;
}
