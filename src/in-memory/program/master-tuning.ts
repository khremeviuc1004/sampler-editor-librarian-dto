
import { Max, Min } from "class-validator";

export class MasterTuning {

	
	@Max(50.0)
	@Min(-50.0)
	tune: number = 0

    constructor(){}
}