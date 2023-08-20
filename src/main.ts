
import { blockBobby } from './block-bobby';
import { printToConsole } from './output';


const localPrint = (IFace) => {
    printToConsole(IFace, {paddingLeft: 10});
    console.log();
}

const mark = blockBobby({
    faceWidth: 19, 
    mouth: '___',
    nose: 'o',
    leftEye: "O",
    rightEye: "O",
    sideBorders: true,
    drawChin: true,
});

const bobby = blockBobby({
    faceWidth: 19, 
    mouth: '___', 
    leftEye: "o",
    rightEye: "O",
    hair: '|'

});

const angelina = blockBobby({
    faceWidth: 19, 
    mouth: '_', 
    leftEye: "0",
    rightEye: "0", 
    sideBorders: false, 
    hair: 'm',
});

const jenny = blockBobby({
    faceWidth: 19, 
    mouth: '_', 
    leftEye: "0",
    rightEye: "o", 
    sideBorders: true,
    drawChin: true,

});

[bobby, mark, angelina, jenny].forEach(localPrint);