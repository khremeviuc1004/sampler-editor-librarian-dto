
import { Max, Min } from "class-validator";


export class MultiStageEnvelope {
    
    @Max(99)
	@Min(0)
	rate1: number = 0

    
	@Max(99)
	@Min(0)
	level1: number = 99

    
	@Max(99)
	@Min(0)
	rate2: number = 50

    
	@Max(99)
	@Min(0)
	level2: number = 99

    
	@Max(99)
	@Min(0)
	rate3: number = 50

    
	@Max(99)
	@Min(0)
	level3: number = 99

    
	@Max(99)
	@Min(0)
	rate4: number = 45

    
	@Max(99)
	@Min(0)
	level4: number = 45

    
	@Max(50)
	@Min(-50)
	velocityModulationOfRate1: number = 0

    
	@Max(50)
	@Min(-50)
	velocityModulationOfRate4: number = 0

    
	@Max(50)
	@Min(-50)
	velocityOffModulationOfRate4: number = 0

    
	@Max(50)
	@Min(-50)
	keyModulationOfRate2AndRate4: number = 0

    
	@Max(50)
	@Min(-50)
	velocityModulationOfEnvelope: number = 0
}