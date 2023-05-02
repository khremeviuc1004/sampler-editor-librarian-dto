
import { Max, Min } from "class-validator";

export enum Priority {
    LOW,
    NORMAL,
    HIGH,
    HOLD
}

export enum Reassignment {
    OLDEST,
    QUIETEST,
}

export class Midi {
    	// Parameter:PRGNUM
	// Offset: 15 bytes
	// Field size: 1 byte
	// Range: 0 to 128
	// Description: MIDI program number
	// After sending data to this parameter, Miscellaneous function BTSORT
	// should be triggered to resort the list of programs into order and to flag
	// active programs.
	//
    
	@Max(128)
	@Min(0)
	programNumber: number = 0

    
	@Max(255)
	@Min(0)
	channel: number = 0

    
    @Max(31)
    @Min(0)
    polyphony: number = 31;

    
	priority: Priority = Priority.NORMAL

    
	reassignment: Reassignment = Reassignment.OLDEST

    
	@Max(127)
	@Min(21)
	playRangeLow: number = 21

    
	@Max(127)
	@Min(21)
	playRangeHigh: number = 127

    
	@Max(50)
	@Min(-50)
	transpose: number = 0
}