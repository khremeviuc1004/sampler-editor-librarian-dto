import { IsInt, Length, Max, Min } from "class-validator";
import { IndividualOutputType } from "../program/individual-output";



export enum ZonePlayback {
    AS_SAMPLE, 
    LOOP_IN_RELEASE, 
    LOOP_UNTIL_RELEASE, 
    NO_LOOPS, 
    PLAY_TO_SAMPLE_END
}

export enum Pitch {
    TRACK, 
    CONST
}

export class Zone {
    
	@Length(2, 12)
	sampleName: string = "            "

    
	@Max(127)
	@Min(0)
    @IsInt()
	velocityLow: number = 0

    
	@Max(127)
	@Min(0)
    @IsInt()
	velocityHigh: number = 0

    
	pitch: Pitch = Pitch.TRACK

    
	@Max(50.0)
	@Min(-50.0)
	tune: number = 0.0

    
	@Max(99)
	@Min(0)
	loudness: number = 0

    
	@Max(99)
	@Min(0)
	filterCutOff: number = 0

    
	@Max(50)
	@Min(-50)
	pan: number = 0

    
	output: IndividualOutputType = IndividualOutputType.OFF

    
	playback: ZonePlayback = ZonePlayback.AS_SAMPLE

    
	@Max(9999)
	@Min(-9999)
	velToStartPosAdj: number = 0
}
