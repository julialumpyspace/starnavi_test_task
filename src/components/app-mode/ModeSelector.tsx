import React, { useEffect, useState } from 'react';
import { getAllModes } from '../../services/modes';
import { Mode } from '../../types';

const ModeSelector = ({ onSelectMode }: any) => {
    const [ modes, setModes ] = useState<Mode[]>([]);

    useEffect((): void => {
        getAllModes()
            .then((response: Mode[]): void => {
                setModes(response);
            });
    }, []);

    const selectHandler = (e: any): void => {
        try {
            const select = e.target;
            const selectedOption = select.options[select.selectedIndex].value;
            const selectedMode = modes.find(mode => mode.id === selectedOption);
            selectedMode && onSelectMode(selectedMode);
        } catch (error) {
            console.log('Some properties of the mode select are missing!');
        }
    };

    return (
        <select
            id="mode"
            name="app_mode"
            className={ 'block w-44 rounded border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-blue-600' }
            defaultValue={ '0' }
            onChange={ selectHandler }
        >
            <option value="0" disabled>Pick mode</option>

            { modes.map(mode => (
                <option
                    key={ mode.id }
                    value={ mode.id }
                >
                    { mode.name }
                </option>
            )) }
        </select>

    );
};

export default ModeSelector;
