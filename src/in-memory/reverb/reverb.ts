import { Length, Max, Min } from 'class-validator';

export enum ReverbType {
  LARGE_HALL,
  MEDIUM_HALL,
  LARGE_ROOM,
  SMALL_ROOM,
  PLATE_1,
  PLATE_2,
}

export class Reverb {
  // Parameter: REVNAME
  // Offset: 0 bytes
  // Field size: 12 bytes
  // Range: String of characters
  // Description: Name of effect
  @Length(2, 12)
  name = 'Unnamed';

  // Parameter: REVSRC
  // Offset: 12 bytes
  // Field size: 1 byte
  // Range: -
  // Description: Not Used

  // Parameter: REVSEL
  // Offset: 13 bytes
  // Field size: 1 byte
  // Range: 0=LARGE HALL, 1=MEDIUM HALL,2=LARGE ROOM, 3=SMALL ROOM, 4=PLATE 1, 5=PLATE 2
  // Description: Reverb Type.
  type = ReverbType.LARGE_HALL;

  // Parameter: REVMIX
  // Offset: 14 bytes
  // Field size: 1 byte
  // Range: -
  // Description: Not Used

  // Parameter: REVLEV
  // Offset: 15 bytes
  // Field size: 1 byte
  // Range: 0 to 99
  // Description: Reverb Output Level.
  @Max(99)
  @Min(0)
  outputLevel = 0;

  // Parameter: REVBAL
  // Offset: 16 bytes
  // Field size: 1 byte
  // Range: -50 to +50
  // Description: Reverb Output Balance.
  @Max(50)
  @Min(-50)
  outputBalance = 0;

  // Parameter: REVSPR
  // Offset: 17 bytes
  // Field size: 1 byte
  // Range: 0 to 99
  // Description: Reverb Stereo Width.
  @Max(50)
  @Min(-50)
  stereoWidth = 0;

  // Parameter: Reserved
  // Offset: 18 bytes
  // Field size: 3 bytes
  // Range: -
  // Description: Not Used

  // Parameter: PREDEL
  // Offset: 21 bytes
  // Field size: 2 bytes
  // Range: 0 to 360 mS
  // Description: Reverb Pre-Delay
  @Max(360)
  @Min(0)
  preDelay = 0;

  // Parameter: Reserved
  // Offset: 23 bytes
  // Field size: 1 byte
  // Range: -
  // Description: Not Used

  // Parameter: RHFCUT
  // Offset: 24 bytes
  // Field size: 1 byte
  // Range: 0 to 99
  // Description: Reverb HF Cut
  @Max(99)
  @Min(0)
  highFrequencyCut = 0;

  // Parameter: Reserved
  // Offset: 25 bytes
  // Field size: 7 bytes
  // Range: -
  // Description: Not Used

  // Parameter: REVHD
  // Offset: 32 bytes
  // Field size: 1 byte
  // Range: 0 to 99
  // Description: Reverb HF Damping
  @Max(99)
  @Min(0)
  highFrequencyDamping = 0;

  // Parameter: REVFB
  // Offset: 33 bytes
  // Field size: 1 byte
  // Range: 0 to 99
  // Description: Reverb Decay Time
  @Max(99)
  @Min(0)
  decayTime = 0;

  // Parameter: Reserved
  // Offset: 34 bytes
  // Field size: 1 byte
  // Range: -
  // Description: Not Used

  // Parameter: REVSM
  // Offset: 35 bytes
  // Field size: 1 byte
  // Range: 0 to 99
  // Description: Reverb Diffusion
  @Max(99)
  @Min(0)
  diffusion = 0;

  constructor(name = 'Unname') {
    this.name = name;
  }
}
