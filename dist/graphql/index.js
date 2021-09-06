"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var schemas_1 = __importDefault(require("./schemas"));
var resolvers_1 = __importDefault(require("./resolvers"));
exports.default = {
    schemas: schemas_1.default,
    resolvers: resolvers_1.default
};
