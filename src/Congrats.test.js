import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from "./Congrats";
import {findByTestAttr} from "../test/testUtils";

Enzyme.configure({adapter: new EnzymeAdapter()});
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
});
