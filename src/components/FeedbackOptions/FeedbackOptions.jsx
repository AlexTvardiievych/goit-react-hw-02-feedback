import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    const data = Object.keys(options);
    return (
        <div>
            {data.map(feedback => (
                <button
                    className={css.buttonClass}
                    key={feedback}
                    type="button"
                    data-action={feedback}
                    onClick={onLeaveFeedback}
                >
                    {feedback}
                </button>
            ))}
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;