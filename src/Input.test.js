import Input from "./Input";
import { shallow } from 'enzyme';
import {findByTestAttr} from "../test/testUtils";
const defaultProps = {};
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Input {...setupProps}/>)
}

it('should render without error', function () {
    const wrapper = setup();
    const input = findByTestAttr(wrapper, 'component-input');
    expect(input.length).toBe(1);
});