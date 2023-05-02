
import { Max, Min } from "class-validator"


export class SemiToneTuning {
    
	@Max(50)
	@Min(-50)
	temperC: number = 0

    
	@Max(50)
	@Min(-50)
	temperCSharp: number = 0

    
	@Max(50)
	@Min(-50)
	temperD: number = 0

    
	@Max(50)
	@Min(-50)
	temperDSharp: number = 0

    
	@Max(50)
	@Min(-50)
	temperE: number = 0

    
	@Max(50)
	@Min(-50)
	temperF: number = 0

    
	@Max(50)
	@Min(-50)
	temperFSharp: number = 0

    
	@Max(50)
	@Min(-50)
	temperG: number = 0

    
	@Max(50)
	@Min(-50)
	temperGSharp: number = 0

    
	@Max(50)
	@Min(-50)
	temperA: number = 0

    
	@Max(50)
	@Min(-50)
	temperASharp: number = 0

    
	@Max(50)
	@Min(-50)
	temperB: number = 0
}