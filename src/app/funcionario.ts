import { Squad } from './squad';

export class Funcionario {
    constructor(
        public funcional:number,
        public nome:string,
        public email:string,
        public perfil:string,
        public squad:Squad
    ) {}
}