
import { Max, Min } from "class-validator";


export class Envelope {
    
    @Max(99)
	@Min(0)
	attack: number = 45

    
	@Max(99)
	@Min(0)
	decay: number = 45

    
	@Max(99)
	@Min(0)
	sustain: number = 40

    
	@Max(99)
	@Min(0)
	release: number = 20

    
	@Max(50)
	@Min(-50)
	velocityModulationOfAttack: number = 0

    
	@Max(50)
	@Min(-50)
	velocityModulationOfRelease: number = 0

    
	@Max(50)
	@Min(-50)
	velocityOffModulationOfRelease: number = 0

    
	@Max(50)
	@Min(-50)
	keyModulationOfDecayAndRelease: number = 0

    
	attackHold: boolean = false
}