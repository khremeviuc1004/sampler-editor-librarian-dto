
import { Max, Min } from "class-validator";


export enum PortamentoType {
    RATE,
    TIME
}

export class Portamento {
    
	enabled: boolean = false

    
	@Max(99)
	@Min(0)
	rate: number = 0

    
	type: PortamentoType = PortamentoType.TIME
}