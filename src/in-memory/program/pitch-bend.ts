
import { Max, Min } from "class-validator";

export enum BendMode {
    NORMAL,
    HELD
}

export class PitchBend {
    
	@Max(24)
	@Min(0)
	bendWheelUp: number = 2

    
	@Max(24)
	@Min(0)
	bendWheelDown: number = 2

    
	@Max(12)
	@Min(-12)
	pressureModulation: number = 0

    
	bendMode: BendMode = BendMode.NORMAL
}