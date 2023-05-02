import { Max, Min } from "class-validator";
import { ModulationSourceType } from "./modulation-source";



export class ModulationInput {

    
    modulationSource: ModulationSourceType = ModulationSourceType.No_Source

    
    @Min(0)
    @Max(99)
    amount: number = 0
}