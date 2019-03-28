import { Funcionario } from './funcionario';

export class Squad {
    constructor(
        public id:number,
        public nome:string,
        public lider:Funcionario
    ) {}
}