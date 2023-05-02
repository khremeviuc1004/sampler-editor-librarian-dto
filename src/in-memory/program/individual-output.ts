

export enum IndividualOutputType {
	OUTPUT1 = 0,
	OUTPUT2,
	OUTPUT3,
	OUTPUT4,
	OUTPUT5,
	OUTPUT6,
	OUTPUT7,
	OUTPUT8,
	FX,
	REVERB,
	REVERB_AND_FX,
	OFF = 255,
}

export const individualOutputs = [
	[0,3],
	[1,4],
	[2,5],
	[3,6],
	[4,7],
	[5,8],
	[6,9],
	[7,10],
	[8,11],
	[9,0],
	[10,1],
	[255,2],
]