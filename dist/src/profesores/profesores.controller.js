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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesoresController = void 0;
const common_1 = require("@nestjs/common");
const profesores_service_1 = require("./profesores.service");
let ProfesoresController = class ProfesoresController {
    profesoresService;
    constructor(profesoresService) {
        this.profesoresService = profesoresService;
    }
    crear(body) {
        return this.profesoresService.crearProfesor(body);
    }
    obtener() {
        return this.profesoresService.obtenerProfesores();
    }
};
exports.ProfesoresController = ProfesoresController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfesoresController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfesoresController.prototype, "obtener", null);
exports.ProfesoresController = ProfesoresController = __decorate([
    (0, common_1.Controller)('profesores'),
    __metadata("design:paramtypes", [profesores_service_1.ProfesoresService])
], ProfesoresController);
//# sourceMappingURL=profesores.controller.js.map