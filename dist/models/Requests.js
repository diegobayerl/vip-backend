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
const typeorm_1 = require("typeorm");
let Requests = class Requests {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Requests.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Requests.prototype, "nameUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Requests.prototype, "telephone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "idUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "idProduct", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Requests.prototype, "nameProduct", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Requests.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "value", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "quantidade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Requests.prototype, "entrega", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "valorEntrega", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "valorTotal", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Requests.prototype, "formaPag", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Requests.prototype, "bandeira", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "valorCliente", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "troco", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Requests.prototype, "hora", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Requests.prototype, "dateCreate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Requests.prototype, "status", void 0);
Requests = __decorate([
    typeorm_1.Entity('requests')
], Requests);
exports.default = Requests;
