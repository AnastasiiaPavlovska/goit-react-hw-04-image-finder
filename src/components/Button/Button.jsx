import React from "react";
import { StyledButton } from "./Button.styled";
import ReactPropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
    return <StyledButton onClick={onLoadMore}>Load more</StyledButton>;
};

Button.propTypes = {
    onLoadMore: PropTypes.func,
}; 