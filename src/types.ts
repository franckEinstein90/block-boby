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