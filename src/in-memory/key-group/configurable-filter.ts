import { Max, Min } from "class-validator";
import { Filter } from "./filter";


export enum FilterType {
    LOW_PASS,
    BAND_PASS,
    HIGH_PASS,
    EQ
}

export class ConfigurableFilter extends Filter {
    
	@Max(31)
	@Min(0)
	resonance: number = 0

    
	filterType: FilterType = FilterType.LOW_PASS

    
	attenuator: number = 0

    
	toneEnable: boolean = false

}