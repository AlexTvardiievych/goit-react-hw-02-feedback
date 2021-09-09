import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

function Section({ title, children }) {
    return (
        <div>
            <h2 className={css.titleName}>{title}</h2>
            {children}
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};
export default Section;