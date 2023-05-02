
import { Max, Min } from "class-validator";


export class SoftPedal {
    
	@Max(99)
	@Min(0)
	loudnessReduction: number = 10

    
	@Max(99)
	@Min(0)
	attackStretch: number = 10

    
	@Max(99)
	@Min(0)
	filterClose: number = 10

    constructor(){}
}