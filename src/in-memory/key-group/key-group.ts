import { Max, Min } from "class-validator";
import { ConfigurableFilter } from "./configurable-filter";
import { Envelope } from "./envelope";
import { Filter1 } from "./filter1";
import { MultiStageEnvelope } from "./multi-stage-envelope";
import { Span } from "./span";
import { Tone } from "./tone";
import { Zone } from "./zone";



export class KeyGroup {
    
    @Max(255)
	@Min(0)
	keyGroupNumber: number = 0

    
	editAll: boolean = false

    
	span: Span = new Span()

    
	zone1: Zone = new Zone()

    
	zone2: Zone = new Zone()

    
	zone3: Zone = new Zone()

    
	zone4: Zone = new Zone()

    
	filter1: Filter1 = new Filter1()

    
	filter2: ConfigurableFilter = new ConfigurableFilter()

    
	tone: Tone = new Tone();

    
	filter2ToneEnabled: boolean = true

    
	envelope1: Envelope = new Envelope()

    
	envelope2: MultiStageEnvelope = new MultiStageEnvelope()

    
	envelope3: MultiStageEnvelope = new MultiStageEnvelope()

    
	@Max(50)
	@Min(-50)
	pitchModulationByLFO1: number = 50;

    
	@Max(50)
	@Min(-50)
	loudnessModulationInputAmount: number = 0;

    
	@Max(50)
	@Min(-50)
	pitchModulationInputAmount: number = 0;

    
	velocityCrossFade: boolean = false

    
	@Max(255)
	@Min(0)
	muteGroup: number = 255
}