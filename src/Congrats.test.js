import {shallow} from 'enzyme';
import Congrats from "./Congrats";
import {checkProps, findByTestAttr} from "../test/testUtils";

describe('congrats test', () => {
    const setup = (props = {}) => {
        return shallow(<Congrats {...props}/>)
    }

    it('should render without error', function () {

        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.length).toBe(1);
    });

    it('should render no text when `success` prop is false', function () {
        const wrapper = setup({success: false});
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.text()).toBe('');
    });

    it('should render non-empty congrats message when `success` prop is true', function () {
        const wrapper = setup({success: true});
        const message = findByTestAttr(wrapper, 'component-message');
        expect(message.text().length).not.toBe(0);
    });

    it('should not throw warning with expected props', function () {
        const expectedProps = { success: false };
        const propError = checkProps(Congrats, expectedProps);
        expect(propError).toBeUndefined();
    });
});
