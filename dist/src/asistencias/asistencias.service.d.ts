import { PrismaService } from '../prisma.service';
export declare class AsistenciasService {
    private prisma;
    constructor(prisma: PrismaService);
    registrarAsistencia(data: {
        alumnoId: number;
        fecha: string;
        presente: boolean;
    }): Promise<{
        id: number;
        fecha: Date;
        presente: boolean;
        alumnoId: number;
    }>;
    obtenerAsistencias(): Promise<({
        alumno: {
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
        };
    } & {
        id: number;
        fecha: Date;
        presente: boolean;
        alumnoId: number;
    })[]>;
}
