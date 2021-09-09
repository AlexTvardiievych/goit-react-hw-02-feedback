import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            <p className={css.names}>Good: {good}</p>
            <p className={css.names}>Neutral: {neutral}</p>
            <p className={css.names}>Bad: {bad}</p>
            <p className={css.names}>Total: {total}</p>
            <p className={css.names}>Positive feedback: {positivePercentage}% </p>
        </>
    );
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;