import { IFace } from "./types";
import { repeatChar } from "./utils/char-utils";


interface IFormattingOptions {
    paddingLeft?: number;
}

export const printToConsole = (face: IFace, format: IFormattingOptions = {
    paddingLeft: 0
}) => {

    const paddingLeft = format.paddingLeft || 0;
    face.lines().forEach(line => console.log(`${repeatChar(' ', paddingLeft)}${line}`));}

