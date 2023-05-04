
import { IsInt, Max, Min } from "class-validator";
import { LFO } from "./lfo";

export class LFO2 extends LFO {

	@Max(1)
	@Min(0)
	@IsInt()
	retrigger: number = 1
}