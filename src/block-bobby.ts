import { FaceOptions, IFace, IFaceFrame } from "./types";
import { repeatChar } from "./utils/char-utils";


const BORDER_CHAR = '#';
const _borders = (content: string): string => `${BORDER_CHAR}${content}${BORDER_CHAR}`;

const _makeFaceShapeOutline = (faceWidth: number): string[]=> {
    const faceLine = ()=> new Array(faceWidth).fill(' ').join('');
    const faceLength = 6; 
    return new Array(faceLength).fill(faceLine()); 
}

const _addNose = (noseRow: string, nose: string): string => {
    const noseLength = nose.length;
    const noseStart = Math.floor(noseRow.length / 2) - Math.floor(noseLength / 2);
    const noseEnd = noseStart + noseLength;
    return noseRow.substring(0, noseStart) + nose + noseRow.substring(noseEnd);
}

const _addEyebrows = (eyebrowRow: string, spaceBetweenEyes: string): string => {
    const eyebrowLength = spaceBetweenEyes.length + 2; 
    const eyebrowStart = Math.floor(eyebrowRow.length / 2) - Math.floor(eyebrowLength / 2);
    const eyebrowEnd = eyebrowStart + eyebrowLength;
    return eyebrowRow.substring(0, eyebrowStart) + '~' + spaceBetweenEyes + '~' + eyebrowRow.substring(eyebrowEnd);
}

const _addEyes = (eyeRow: string, leftEye: string, rightEye: string, spaceBetweenEyes: string): string => {
    const eyeLength = leftEye.length + spaceBetweenEyes.length + rightEye.length;
    const eyeStart = Math.floor(eyeRow.length / 2) - Math.floor(eyeLength / 2);
    const eyeEnd = eyeStart + eyeLength;
    return eyeRow.substring(0, eyeStart) + leftEye + spaceBetweenEyes + rightEye + eyeRow.substring(eyeEnd);
}

const _addMouth = (mouthRow: string, mouth: string, mouthSize: number): string => {
    const mouthLength = mouth.length;
    const mouthStart = Math.floor(mouthRow.length / 2) - Math.floor(mouthLength / 2);
    const mouthEnd = mouthStart + mouthLength;
    return mouthRow.substring(0, mouthStart) + mouth + mouthRow.substring(mouthEnd);
}



const _makeFaceFrame = (options: FaceOptions): IFaceFrame => {
    let isEvenWidth = options.faceWidth % 2 === 0; 
    let faceWidth = options.faceWidth;
    const noseWidth = options.nose ? options.nose.length : 1;

    if(noseWidth % 2 === 0 && (!isEvenWidth)) {
            faceWidth = faceWidth + 1;
        }
    else if(noseWidth % 2 === 1 && isEvenWidth) {
            faceWidth = faceWidth + 1;
        }
    isEvenWidth = options.faceWidth % 2 === 0; 

    const faceHeight = 6; 
    const halfWidth = Math.floor(faceWidth / 2);
    const midWidth = isEvenWidth ? 2 : 1;
    return {
        isEvenWidth,
        width: faceWidth,
        height: faceHeight,
        midWidth,
        halfWidth
    };
}

export const blockBobby = (options: FaceOptions): IFace => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const faceFrame = _makeFaceFrame(options);

    const hair = repeatChar(options.hair || '#', faceFrame.width - 2);
    const bottom = repeatChar('#', faceFrame.width - 2);
    

    const faceShape = _makeFaceShapeOutline(faceFrame.width - 2);
    const eyebrowRow = Math.floor(faceShape.length / 4);
    const spaceBetweenEyes = repeatChar(' ', options.eyeDistance || 5);
    faceShape[eyebrowRow] = _addEyebrows(faceShape[eyebrowRow], spaceBetweenEyes); 
 
    const eyeRow = eyebrowRow + 1;
    faceShape[eyeRow] = _addEyes(faceShape[eyeRow], options.leftEye, options.rightEye, spaceBetweenEyes);


   const nose = options.nose || faceFrame.isEvenWidth? '<>': '-';
    const noseRow = eyeRow + 1; 
    faceShape[noseRow] = _addNose(faceShape[noseRow], nose); //`${halfFace}${nose}${halfFace}`; //faceShape[noseRow].replace('*', nose);
    

    const mouthSize = options.mouth.length;
    if (mouthSize < 0 || mouthSize > 10) {
        console.error("Invalid mouth size. It should be between 0 and 10.");
        return;
    }

    const mouthRow = noseRow + 1;
    faceShape[mouthRow] = _addMouth(faceShape[mouthRow], options.mouth, mouthSize);
    const face = [
        hair, 
        ...faceShape, 
    ];
    
    if(options.drawChin || false) face.push(bottom);
    /*[
        hair,
        faceSpace,
//        `    ~       ~    `,
 //       `  ${quarterFace}${options.leftEye}${spaceBetweenEyes}${options.rightEye}${quarterFace}  `,
  //      `${halfFace}${nose}${halfFace}`,
   //     `    ${spaceBefore}${options.mouth}${spaceAfter}   `,
        faceSpace
    ];

    if (drawChin) {
        face.push(bottom);
    }*/

    return {
       lines: ()=> ('sideBorders' in options && options.sideBorders) ? face.map(_borders) : face
    };
}
