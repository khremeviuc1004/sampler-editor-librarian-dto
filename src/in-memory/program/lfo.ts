
import { Max, Min } from "class-validator";

export enum Waveform {
    TRIANGLE,
    SAWTOOTH,
    SQUARE,
    RANDOM
}


export abstract class LFO {
	
	waveform: Waveform = Waveform.TRIANGLE

    
	@Max(99)
	@Min(0)
	speed: number = 50

    
	@Max(99)
	@Min(0)
	depth: number = 0

    
	@Max(99)
	@Min(0)
	delay: number = 0
}