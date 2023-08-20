import { FaceOptions, IFace } from "./types";
import { repeatChar } from "./utils/char-utils";


const BORDER_CHAR = '#';
const _borders = (content: string): string => `${BORDER_CHAR}${content}${BORDER_CHAR}`;

export const blockBobby = (options: FaceOptions): IFace => {

    const hair = repeatChar(options.hair || '#', options.faceWidth-2);
    const bottom = repeatChar('#', options.faceWidth - 2);
    const spaceBetweenEyes = repeatChar(' ', options.eyeDistance || 5);
    const faceSpace = repeatChar(' ', options.faceWidth - 2);
    const drawChin = options.drawChin || false;
    const nose = options.nose || '-';

    const halfFaceWidth = (options.faceWidth - 1) / 2; 
    const halfFace = new Array(halfFaceWidth-1).fill(' ').join('');

    const quarterFaceWidth = (halfFaceWidth - 1) / 2; 
    const quarterFace = new Array(quarterFaceWidth-1).fill(' ').join('');

    const mouthSize = options.mouth.length;
    if (mouthSize < 0 || mouthSize > 10) {
        console.error("Invalid mouth size. It should be between 0 and 10.");
        return;
    }

    const spaceBefore = " ".repeat((halfFaceWidth - mouthSize) / 2);
    const spaceAfter = " ".repeat((10 - mouthSize) - spaceBefore.length);

    const face = [
        hair,
        faceSpace,
        `    ~       ~    `,
        `  ${quarterFace}${options.leftEye}${spaceBetweenEyes}${options.rightEye}${quarterFace}  `,
        `${halfFace}${nose}${halfFace}`,
        `    ${spaceBefore}${options.mouth}${spaceAfter}   `,
        `${faceSpace}`
    ];

    if (drawChin) {
        face.push(bottom);
    }

    return {
       lines: ()=> ('sideBorders' in options && options.sideBorders) ? face.map(_borders) : face
    };
}