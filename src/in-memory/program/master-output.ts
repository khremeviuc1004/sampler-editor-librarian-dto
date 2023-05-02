import { Max, Min } from "class-validator";
import { IndividualOutputType } from "./individual-output";
import { ModulationSourceType } from "./modulation-source";



export class MasterOutput {
    
	@Max(99)
	@Min(0)
	loudness: number = 99

    
	individualOutput: IndividualOutputType =  IndividualOutputType.OFF

    
	@Max(99)
	@Min(0)
	individualLevel: number = 50

    
	@Max(99)
	@Min(0)
	stereoLevel: number = 99

    
	loudnessModulationInput1Type: ModulationSourceType = ModulationSourceType.NoteOnvelocity // can't be changed in the sampler

    
	@Max(50)
	@Min(-50)
	loudnessModulationInput1Amount: number = 20

    
	loudnessModulationInput2Type: ModulationSourceType = ModulationSourceType.Key

    
	@Max(99)
	@Min(0)
	loudnessModulationInput2Amount: number = 0

    
	loudnessModulationInput3Type: ModulationSourceType = ModulationSourceType.Pressure

    
	@Max(50)
	@Min(-50)
	loudnessModulationInput3Amount: number = 0

    constructor(){}
}