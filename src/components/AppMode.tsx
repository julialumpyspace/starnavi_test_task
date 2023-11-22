import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveMode } from '../store/modeSlice';
import ModeSelector from './app-mode/ModeSelector';
import ModeStartButton from './app-mode/ModeStartButton';
import { Mode } from '../types';
import { clear } from '../store/gridSlice';

const AppMode = () => {
    let activeMode: Mode | null = null;
    const dispatch = useDispatch();

    const onSelectChange = (selectedMode: Mode): void => {
        activeMode = selectedMode;
    };

    const onStartButtonClick = (): void => {
        if (activeMode) {
            dispatch(clear());
            dispatch(setActiveMode(activeMode));
        }
    };

    return (
        <div className={ 'flex gap-x-3' }>
            <ModeSelector onSelectMode={ onSelectChange }/>
            <ModeStartButton onStartClick={ onStartButtonClick }/>
        </div>
    );
};

export default AppMode;
