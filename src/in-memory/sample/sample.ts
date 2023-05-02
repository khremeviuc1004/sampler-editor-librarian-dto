import { Length, Max, Min } from "class-validator";
import { SampleLoop } from "./sample-loop";


export enum PlaybackType {
	LOOP_IN_RELEASE,
	LOOP_UNTIL_RELEASE,
	NO_LOOPING,
	PLAY_TO_SAMPLE_END,
}

export enum Bandwidth {
	Ten_kHz,
	Twenty_kHz,
}

export class Sample {
	//	 Parameter: SHIDENT
	//	 Offset: 0 bytes
	//	 Field size: 1 byte
	//	 Range: 3 (Fixed)
	//	 Description: Block identifier
	//
	//	 Parameter: SBANDW
	//	 Offset: 1 bytes
	//	 Field size: 1 byte
	//	 Range: 0 represents 10kHz, 1 represents 20kHz
	//	 Description: Sample bandwidth
	
	bandwith: Bandwidth = Bandwidth.Twenty_kHz
	//
	//	 Parameter: SPITCH
	//	 Offset: 2 bytes
	//	 Field size: 1 byte
	//	 Range: 21 to 127 represents A1 to G8
	//	 Description: Original pitch
    
	@Max(127)
	@Min(21)
	originalPitch: number = 60;
	//
	//	 Parameter: SHNAME
	//	 Offset: 3 bytes
	//	 Field size: 12 bytes
	//	 Range: String of characters
	//	 Description: Sample name
    
	@Length(2, 12)
	name: string = "New"
	//
	//	 Parameter: SSRVLD
	//	 Offset: 15 bytes
	//	 Field size: 1 byte
	//	 Range: 0 indicates rate is invalid, 128 indicates rate is valid
	//	 Description: Sample rate validity
    
	valid: boolean = true;
	//
	//	 Parameter: SLOOPS
	//	 Offset: 16 bytes
	//	 Field size: 1 byte
	//	 Range:
	//	 Description: Number of loops
    
	@Max(4)
	@Min(0)
	numberOfLoops: number = 0
	//
	//	 Parameter: SALOOP
	//	 Offset: 17 bytes
	//	 Field size: 1 byte
	//	 Range:
	//	 Description: First active loop (internal use)
	//
	//	 Parameter: SHLOOP
	//	 Offset: 18 bytes
	//	 Field size: 1 byte
	//	 Range:
	//	 Description: Highest loop (internal use)
	//
	//	 Parameter: SPTYPE
	//	 Offset: 19 bytes
	//	 Field size: 1 byte
	//	 Range: 0 = Normal looping
	//	 1 = Loop until release
	//	 2 = No looping
	//	 3 = Play to sample end
	//	 Description: Playback type
    
	playbackType: PlaybackType = PlaybackType.LOOP_UNTIL_RELEASE
	//
	//	 Parameter: STUNO
	//	 Offset: 20 bytes
	//	 Field size: 2 bytes
	//	 Range:
	//	 Description: Sample tuning offset cent:semi
    
	@Max(50.0)
	@Min(-50.0)
	tune: number = 0
	//
	//	 Parameter: SLOCAT
	//	 Offset: 22 bytes
	//	 Field size: 4 bytes
	//	 Range: Absolute location in Wave memory
	//	 Description: Absolute start address in memory of sample
	//
	//	 Parameter: SLNGTH
	//	 Offset: 26 bytes
	//	 Field size: 4 bytes
	//	 Range: Number of data points from start of sample
	//	 Description: Length of sample
	
	@Min(0)
	sampleLength: number = 0
	//
	//	 Parameter: SSTART
	//	 Offset: 30 bytes
	//	 Field size: 4 bytes
	//	 Range: Number of data points from start of sample
	//	 Description: Offset from start of sample from which playback commences
    
	@Min(0)
	startOffset: number = 0
	//
	//	 Parameter: SMPEND
	//	 Offset: 34 bytes
	//	 Field size: 4 bytes
	//	 Range: Number of data points from start of sample
	//	 Description: Offset from start of sample from which playback ceases
    
	@Min(0)
	playLength: number = 0
	//
	//	 ;First Loop
    
	loop1: SampleLoop = new SampleLoop()
	//	 ;Second Loop
    
	loop2: SampleLoop = new SampleLoop()
	//	 ;Third Loop
    
	loop3: SampleLoop = new SampleLoop()
	//	 ;Fourth Loop
    
	loop4: SampleLoop = new SampleLoop()
	//
	//	 Parameter: SLXY1
	//	 Offset: 86 bytes
	//	 Field size: 4 bytes
	//	 Range:
	//	 Description: Relative loop factors for loop 1
	//
	//	 Parameter: SLXY2
	//	 Offset: 98 bytes
	//	 Field size: 4 bytes
	//	 Range:
	//	 Description: Relative loop factors for loop 2
	//
	//	 Parameter: SLXY3
	//	 Offset: 110 bytes
	//	 Field size: 4 bytes
	//	 Range:
	//	 Description: Relative loop factors for loop 3
	//
	//	 Parameter: SLXY4
	//	 Offset: 122 bytes
	//	 Field size: 4 bytes
	//	 Range:
	//	 Description: Relative loop factors for loop 4
	//
	//	 Parameter: SSPARE
	//	 Offset: 134 bytes
	//	 Field size: 1 byte
	//	 Range:
	//	 Description: Used internally
	//
	//	 Parameter: SWCOMM
	//	 Offset: 135 bytes
	//	 Field size: 1 byte
	//	 Range:
	//	 Description: Not used
	//
	//	 Parameter: SSPAIR
	//	 Offset: 136 bytes
	//	 Field size: 2 bytes
	//	 Range: Block address
	//	 Description: Address of stereo partner (internal use)
	//
	//	 Parameter: SSRATE
	//	 Offset: 138 bytes
	//	 Field size: 2 bytes
	//	 Range:
	//	 Description: Sample rate
    
	@Max(44100)
	@Min(0)
	sampleRate: number = 44100
	//
	//	 Parameter: SHLTO
	//	 Offset: 140 bytes
	//	 Field size: 1 byte
	//	 Range: -50 to +50
	//	 Description: Tuning offset of hold loop
    
	@Max(50)
	@Min(-50)
	tuningOffset: number = 0

}