import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, defaultProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        defaultProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
};
