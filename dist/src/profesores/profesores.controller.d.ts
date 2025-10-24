import { ProfesoresService } from './profesores.service';
export declare class ProfesoresController {
    private readonly profesoresService;
    constructor(profesoresService: ProfesoresService);
    crear(body: {
        nombre: string;
        correo: string;
    }): Promise<{
        nombre: string;
        correo: string;
        id: number;
    }>;
    obtener(): Promise<({
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
