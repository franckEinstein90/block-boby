import { expect } from 'chai';
import {blockBobby} from '../src/block-bobby';
import {printToConsole} from '../src/output';


describe('The function blockBobby', () => {

    it('Creates a face from options', () => {
        const bobby = blockBobby({
            faceWidth: 19, 
            mouth: '___', 
            leftEye: "o",
            rightEye: "O", 
            sideBorders: true,
            drawChin: true
        });
        console.log(bobby.lines());
        expect(bobby).to.have.property('lines');
        expect(bobby.lines()).to.be.an('array');
        expect(bobby.lines().length).to.equal(8);
    });

});

describe('The FaceOptions interface', () => {

    it(`Let's you specify the shape and length of the mouth, so you can make a cat`, () => {
        const bobby = blockBobby({
            faceWidth: 19, 
            mouth: '*_*', 
            leftEye: "O",
            rightEye: "O",
            sideBorders: true,
            drawChin: true
        });
        console.log(bobby.lines());
        expect(bobby).to.have.property('lines');
        expect(bobby.lines()).to.be.an('array');
        expect(bobby.lines().length).to.equal(8);

    });
});


describe('The sideborders property', () => {
    it(`Let's you specifiy if you want a border or not`, () => {
        const bobby = blockBobby({
            faceWidth: 19, 
            mouth: '___', 
            leftEye: "O",
            rightEye: "O",
            sideBorders: false, 
            drawChin: true
        });
        console.log(bobby.lines());
        expect(bobby).to.have.property('lines');
        expect(bobby.lines()).to.be.an('array');
        expect(bobby.lines().length).to.equal(8);

    });

});
