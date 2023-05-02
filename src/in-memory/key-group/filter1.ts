import { Max, Min } from "class-validator"
import { Filter } from "./filter"


export class Filter1 extends Filter {
    
	@Max(15)
	@Min(0)
	resonance: number = 0
}