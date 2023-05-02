
import { Max, Min } from "class-validator";


export class Tone {
    
    @Max(99)
	@Min(0)
	centerFreqency: number = 50

    
	@Max(50)
	@Min(-50)
	slope: number = 0
}