import React from 'react';
import Input from "./Input";
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from "../test/testUtils";

const defaultProps = {};
const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Input {...setupProps}/>)
}

it('should render without error', function () {
    const wrapper = setup();
    const input = findByTestAttr(wrapper, 'component-input');
    expect(input.length).toBe(1);
});

it('should not throw warning with expected props', function () {
    checkProps(Input, {secretWord: []},)
});

describe('state controlled input field', () => {
    it('should update with value of input box upon change', function () {
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = {
            target: {
                value: 'train'
            }
        };
        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
})