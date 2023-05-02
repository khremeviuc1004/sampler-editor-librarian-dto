
import { Max, Min } from "class-validator";

export abstract class Filter {
    
    @Max(99)
	@Min(0)
	frequency: number = 99

    
	@Max(12)
	@Min(0)
	keyFollow: number = 0

    
	@Max(50)
	@Min(-50)
	freqModulationInput1Amount: number = 0

    
	@Max(50)
	@Min(-50)
	freqModulationInput2Amount: number = 0

    
	@Max(50)
	@Min(-50)
	freqModulationInput3Amount: number = 0
}