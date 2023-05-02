import { Max, Min } from "class-validator";
import { LFO } from "./lfo";
import { ModulationSourceType } from "./modulation-source";


export class LFO1 extends LFO {

	
	delayModulationInputType: ModulationSourceType = ModulationSourceType.Key

	
	@Max(50)
	@Min(-50)
	delayModulationInputAmount: number = 0

	
	depthModulationInputType: ModulationSourceType = ModulationSourceType.Key

	
	@Max(50)
	@Min(-50)
	depthModulationInputAmount: number = 0

	
	speedModulationInputType: ModulationSourceType = ModulationSourceType.Key

	
	@Max(50)
	@Min(-50)
	speedModulationInputAmount: number = 0

	
	@Max(99)
	@Min(0)
	extraDepthModulationByModwheelAmount: number = 0

    
	@Max(99)
	@Min(0)
	extraDepthModulationByAftertouchAmount: number = 0

    
	@Max(99)
	@Min(0)
	extraDepthModulationByVelocityAmount: number = 0

	
	desync: boolean = true
}