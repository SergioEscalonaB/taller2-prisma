import { AlumnosService } from './alumnos.service';
export declare class AlumnosController {
    private readonly alumnosService;
    constructor(alumnosService: AlumnosService);
    crear(body: {
        nombre: string;
        correo: string;
        salonId: number;
    }): Promise<{
        nombre: string;
        correo: string;
        id: number;
        salonId: number;
    }>;
    obtener(): Promise<({
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
