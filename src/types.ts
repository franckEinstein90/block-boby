

export interface IFaceFrame {
    isEvenWidth: boolean;
    width: number;
    height: number;
    midWidth: number; //size of middle of face, size of noise;
    halfWidth: number; //from side of face to beginning of nose
    //2*halfWidth + midWidth = width is always true
}

export interface FaceOptions {
    faceWidth: number;
    leftEye: string;
    rightEye: string;
    mouth: string;


    sideBorders?: boolean;
    hair?: string;
    eyeDistance?: number;
    drawChin?: boolean;
    nose?: string;
}

export interface IFace {
    lines(): string[];
}