import { Length, Max, Min } from "class-validator"


export enum EffectType {
    CHORUS=6, 
    PITCH_SHIFT, 
    ECHO, 
    DELAY
}


export abstract class Effect {
    // Parameter: FXNAME
    // Offset: 0 bytes
    // Field size: 12 bytes
    // Range: String of characters
    // Description: Name of effect
    @Length(2, 12)
    name = "Unnamed"

    // Parameter: FXSRC
    // Offset: 12 bytes
    // Field size: 1 byte
    // Range: -
    // Description: Not Used

    // Parameter: FXSEL
    // Offset: 13 bytes
    // Field size: 1 byte
    // Range: 6=CHORUS, 7=PITCH SHIFT, 8=ECHO, 9=DELAY
    // Description: Effect Type.
    type = EffectType.ECHO

    // Parameter: FXMIX
    // Offset: 14 bytes
    // Field size: 1 byte
    // Range: -
    // Description: Not Used

    // Parameter: FXLEV
    // Offset: 15 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Effects Output Level.
    @Max(99)
    @Min(0)
    outputLevel = 0

    // Parameter: FXBAL
    // Offset: 16 bytes
    // Field size: 1 byte
    // Range: -50 to +50
    // Description: Effects output balance.
    @Max(50)
    @Min(-50)
    outputBalance = 0

    // Parameter: SPREAD
    // Offset: 17 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Effects stereo width.
    @Max(99)
    @Min(0)
    stereoWidth = 0

    // Parameter: FXEQB
    // Offset: 18 bytes
    // Field size: 1 byte
    // Range: -50 to +50
    // Description: Bass EQ (Not Used)

    // Parameter: FXEQM
    // Offset: 19 bytes
    // Field size: 1 byte
    // Range: -50 to +50
    // Description: Mid EQ (Not Used)

    // Parameter: FXEQT
    // Offset: 20 bytes
    // Field size: 1 byte
    // Range: -50 to +50
    // Description: Treble EQ (Not Used)

    // Parameter: Reserved
    // Offset: 21 bytes
    // Field size: 3 bytes
    // Range: -
    // Description: Not Used

    // Parameter: HFCUT
    // Offset: 24 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: High Freq Cut (Delay,Pitch Shift, Chorus)
    @Max(99)
    @Min(0)
    highFrequencyCut = 0

    // Parameter: ETHRU
    // Offset: 25 bytes
    // Field size: 1 byte
    // Range: -
    // Description: Not Used


    // Parameter: Reserved
    // Offset: 32 bytes
    // Field size: 4 bytes
    // Range: -
    // Description: Not Used



}

export class EchoEffect extends Effect {
    // Parameter: EDEL1
    // Offset: 49 bytes
    // Field size: 2 bytes
    // Range: 0 to 360 mS
    // Description: Delay 1 (Echo)
    @Max(360)
    @Min(0)
    delay1 = 0

    // Parameter: EDEL2
    // Offset: 51 bytes
    // Field size: 2 bytes
    // Range: 0 to 360 mS
    // Description: Delay 2 (Echo)
    @Max(360)
    @Min(0)
    delay2 = 0

    // Parameter: EDEL3
    // Offset: 53 bytes
    // Field size: 2 bytes
    // Range: 0 to 360 mS
    // Description: Delay 3 (Echo)
    @Max(360)
    @Min(0)
    delay3 = 0

    // Parameter: EFB1
    // Offset: 55 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Feedback 1 Level (Echo)
    @Max(99)
    @Min(0)
    feedback1Level = 0

    // Parameter: EFB2
    // Offset: 56 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Feedback 2 Level (Echo)
    @Max(99)
    @Min(0)
    feedback2Level = 0

    // Parameter: EFB3
    // Offset: 57 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Feedback 3 Level (Echo)
    @Max(99)
    @Min(0)
    feedback3Level = 0

    // Parameter: EPAN1
    // Offset: 58 bytes
    // Field size: 1 byte
    // Range: -50 to +50
    // Description: Pan 1 (Echo)
    @Max(50)
    @Min(-50)
    pan1 = 0

    // Parameter: EPAN2
    // Offset: 59 bytes
    // Field size: 1 byte
    // Range: -50 to +50
    // Description: Pan 2 (Echo)
    @Max(50)
    @Min(-50)
    pan2 = 0

    // Parameter: EPAN3
    // Offset: 60 bytes
    // Field size: 1 byte
    // Range: -50 to +50
    // Description: Pan 3 (Echo)
    @Max(-50)
    @Min(50)
    pan3 = 0

    // Parameter: ELEFT
    // Offset: 61 bytes
    // Field size: 2 bytes
    // Range: 0 to 180 mS
    // Description: Left Extra Delay (Echo)
    @Max(180)
    @Min(0)
    leftExtraDelay = 0

    // Parameter: EHFD
    // Offset: 63 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Feedback Damping (Echo)
    @Max(99)
    @Min(0)
    feedbackDamping = 0

    constructor(name = 'Unnamed') {
        super();
        this.type = EffectType.ECHO;
        this.name = name;
    }
}

export class PitchShiftEffect extends Effect {
    // Parameter: PSSL
    // Offset: 39 bytes
    // Field size: 2 bytes
    // Range: -50.00 to + 50.00 (fraction is binary)
    // Description: Left Tune Offset (Pitch Shift)
    @Max(50.0)
    @Min(-50.0)
    leftTuneOffset = 0.0

    // Parameter: PSSR
    // Offset: 41 bytes
    // Field size: 2 bytes
    // Range: -50.00 to + 50.00 (fraction is binary)
    // Description: Right Tune Offset (Pitch Shift)
    @Max(50.0)
    @Min(-50.0)
    rightTuneOffset = 0.0
  

    // Parameter: PSFBL
    // Offset: 43 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Left Feedback Level (Pitch Shift)
    @Max(99)
    @Min(0)
    leftFeedbackLevel = 0

    // Parameter: PSFBR
    // Offset: 44 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Right Feedback Level (Pitch Shift)
    @Max(99)
    @Min(0)
    rightFeedbackLevel = 0

    // Parameter: PSFDL
    // Offset: 45 bytes
    // Field size: 2 bytes
    // Range: 0 to 180 mS
    // Description: Left Delay Time (Pitch Shift)
    @Max(180)
    @Min(0)
    leftDelayTime = 0

    // Parameter: PSFDR
    // Offset: 47 bytes
    // Field size: 2 bytes
    // Range: 0 to 180 mS
    // Description: Right Delay Time (Pitch Shift)
    @Max(180)
    @Min(0)
    rightDelayTime = 0

    constructor(name = 'Unnamed') {
        super();
        this.type = EffectType.PITCH_SHIFT;
        this.name = name;
    }
}

export class ChorusEffect extends Effect {
    // Parameter: CHMS
    // Offset: 36 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Modulation Speed (Chorus)
    @Max(99)
    @Min(0)
    modulationSpeed = 0

    // Parameter: CHMD
    // Offset: 37 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Modulation Depth (Chorus)
    @Max(99)
    @Min(0)
    modulationDepth = 0

    // Parameter: CHFB
    // Offset: 38 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Feedback Level (Chorus)
    @Max(99)
    @Min(0)
    feedbackLevel = 0

    constructor(name = 'Unnamed') {
        super();
        this.type = EffectType.CHORUS;
        this.name = name;
    }
}

export class DelayEffect extends Effect {
    // Parameter: DLFB
    // Offset: 26 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: Feedback (Delay)
    @Max(99)
    @Min(0)
    feedback = 0

    // Parameter: DLDEL
    // Offset: 27 bytes
    // Field size: 2 bytes
    // Range: 0 to 999 mS
    // Description: Delay Time (Delay)
    @Max(999)
    @Min(0)
    delayTime = 0

    // Parameter: DLLDEP
    // Offset: 29 bytes
    // Field size: 2 byte
    // Range: 0 to 999 mS
    // Description: LFO Depth (Delay)
    @Max(999)
    @Min(0)
    lfoDepth = 0

    // Parameter: DLLFOR
    // Offset: 31 bytes
    // Field size: 1 byte
    // Range: 0 to 99
    // Description: LFO Rate (Delay)
    @Max(99)
    @Min(0)
    lfoRate = 0

    constructor(name = 'Unnamed') {
        super();
        this.type = EffectType.DELAY;
        this.name = name;
    }
}