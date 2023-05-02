import { Max, Min } from "class-validator";
import { ModulationSourceType } from "./modulation-source";




export class MasterPan {
    
	@Max(50)
	@Min(-50)
	stereoPan: number = 0

    
	panModulationInput1Type: ModulationSourceType = ModulationSourceType.LFO2

    
	@Max(99)
	@Min(0)
	panModulationInput1Amount: number = 0

    
	panModulationInput2Type: ModulationSourceType = ModulationSourceType.Key

    
	@Max(99)
	@Min(0)
	panModulationInput2Amount: number = 0

    
	panModulationInput3Type: ModulationSourceType = ModulationSourceType.Modwheel

    
	@Max(99)
	@Min(0)
	panModulationInput3Amount: number = 0

    constructor(){}
}