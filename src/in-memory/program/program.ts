import { Length, Max, Min } from "class-validator";
import { LFO1 } from "./lfo1";
import { LFO2 } from "./lfo2";
import { MasterOutput } from "./master-output";
import { MasterPan } from "./master-pan";
import { MasterTuning } from "./master-tuning";
import { Midi } from "./midi";
import { Modes } from "./modes";
import { ModulationSourceType } from "./modulation-source";
import { PitchBend } from "./pitch-bend";
import { Portamento } from "./portamento";
import { SemiToneTuning } from "./semi-tone-tuning";
import { SoftPedal } from "./soft-pedal";


export class Program {
    
    @Length(2, 12)
    name: string = "New"

    
	lfo1: LFO1 = new LFO1()

    
	lfo2: LFO2 = new LFO2()

    
	pitchBend: PitchBend = new PitchBend()

    
	semiToneTuning: SemiToneTuning = new SemiToneTuning()

    
	masterTuning: MasterTuning = new MasterTuning()

    
	softPedal: SoftPedal = new SoftPedal()

    
	modes: Modes = new Modes()

    
	masterOutput: MasterOutput = new MasterOutput()

    
	masterPan: MasterPan = new MasterPan()

    
    midi: Midi = new Midi();

    
	portamento: Portamento = new Portamento()

    
	filter1FreqModulationInput1Type: ModulationSourceType = ModulationSourceType.NoteOnvelocity

    
	filter1FreqModulationInput2Type: ModulationSourceType = ModulationSourceType.LFO2

    
	filter1FreqModulationInput3Type: ModulationSourceType = ModulationSourceType.Env2

    
	filter2FreqModulationInput1Type: ModulationSourceType = ModulationSourceType.NoteOnvelocity

    
	filter2FreqModulationInput2Type: ModulationSourceType = ModulationSourceType.LFO2
    
    
	filter2FreqModulationInput3Type: ModulationSourceType = ModulationSourceType.Env3

	
	pitchModulationInputType: ModulationSourceType = ModulationSourceType.Env2

	
	loudnessModulationInputType: ModulationSourceType = ModulationSourceType.NoteOnvelocity

	
    numberOfKeyGroups: number = 1

    constructor() {}
}
