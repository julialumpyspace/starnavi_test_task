import React from 'react';

type ModeStartButtonProps = {
    onStartClick: () => void,
}

const ModeStartButton = ({ onStartClick }: ModeStartButtonProps) => {
    return (
        <button
            className={ 'rounded bg-blue-600 px-5 py-2 uppercase text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600' }
            onClick={ onStartClick }
        >
            Start
        </button>
    );
};

export default ModeStartButton;
