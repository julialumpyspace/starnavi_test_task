import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const HoverSquaresBoard = () => {
    const selectedGridItems:string[] = useSelector((state: RootState) => state.selectedGridItems.grid);

    return (
        <div className={ 'flex flex-col gap-y-6' }>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">Hover squares</h3>

            { Boolean(selectedGridItems.length)
                ? <div className={ ' overflow-hidden overflow-y-auto flex flex-col h-full' }>
                    <ul className={ 'flex flex-col gap-y-3 w-52 pr-2 h-40 max-h-full' }>
                        { selectedGridItems.map((selectedItem: string) => (
                            <li
                                key={ selectedItem }
                                className={ 'rounded bg-yellow-50 py-3 px-1 font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20' }
                            >
                                { selectedItem }
                            </li>
                        )) }
                    </ul>
                </div>
                : <p><em>No hover squares!</em></p>
            }
        </div>
    );
};

export default HoverSquaresBoard;
