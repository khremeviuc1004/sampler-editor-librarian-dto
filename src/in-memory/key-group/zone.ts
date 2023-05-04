import { IsInt, Length, Max, Min } from "class-validator";


export enum ZoneOutputType {
	OFF = 2,
	OUTPUT1 = 3,
	OUTPUT2 = 4,
	OUTPUT3 = 5,
	OUTPUT4 = 6,
	OUTPUT5 = 7,
	OUTPUT6 = 8,
	OUTPUT7 = 9,
	OUTPUT8 = 10,
	FX = 255,
	REVERB = 0,
	REVERB_AND_FX = 1,
}


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

    
	output: ZoneOutputType = ZoneOutputType.OFF

    
	playback: ZonePlayback = ZonePlayback.AS_SAMPLE

    
	@Max(9999)
	@Min(-9999)
	velToStartPosAdj: number = 0
}
