import { SalonesService } from './salones.service';
export declare class SalonesController {
    private readonly salonesService;
    constructor(salonesService: SalonesService);
    crear(body: {
        nombre: string;
        profesorId: number;
    }): Promise<{
        nombre: string;
        id: number;
        profesorId: number;
    }>;
    obtener(): Promise<({
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
