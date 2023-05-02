
import { Max, Min } from "class-validator";


export class Span {
    
    @Max(127)
	@Min(21)
	lowNote: number = 21

    
	@Max(127)
	@Min(21)
	highNote: number = 127

    
	@Max(50.0)
	@Min(-50.0)
	tune: number = 0

    
	@Max(50)
	@Min(-50)
	beat: number = 0
}