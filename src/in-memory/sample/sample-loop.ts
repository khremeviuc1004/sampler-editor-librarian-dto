
import { IsInt, Max, Min } from "class-validator";

export class SampleLoop {
    
    @Min(0)
    loopLength: number = 0

    
    @Min(0)
    @Max(9999)
    @IsInt()
    dwellTime: number = 0

    
    @Min(0)
    @IsInt()
    loopStart: number = 0

	
    @Min(0)
    @IsInt()
    relativeLoopFactors: number = 0

    constructor() {}
}
