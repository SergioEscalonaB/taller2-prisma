import { AsistenciasService } from './asistencias.service';
export declare class AsistenciasController {
    private readonly asistenciasService;
    constructor(asistenciasService: AsistenciasService);
    registrar(body: {
        alumnoId: number;
        fecha: string;
        presente: boolean;
    }): Promise<{
        id: number;
        fecha: Date;
        presente: boolean;
        alumnoId: number;
    }>;
    obtener(): Promise<({
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
