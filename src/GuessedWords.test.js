import React from 'react';
import {shallow} from 'enzyme';
import GuessedWords from "./GuessedWords";
import {checkProps, findByTestAttr} from "../test/testUtils";

const defaultProps = {
    guessedWords: [
        {
            guessedWord: 'train',
            letterMatchCount: 3
        }
    ]
};

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>)
};

it('should not throw warning with expected props', function () {
    checkProps(GuessedWords, defaultProps);
});
describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    })
    it('should renders without error', function () {
        const component = findByTestAttr(wrapper, 'component-guessed-words');

        expect(component.length).toBe(1);
    });
    it('should renders instructions to guess a word', function () {
        const instractions = findByTestAttr(wrapper, 'guess-instructions');

        expect(instractions.text().length).not.toBe(0);
    });
})
describe('if there are words guessed', () => {

});