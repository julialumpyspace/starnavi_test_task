import React, { Dispatch, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import GridItem from './GridItem';
import { toggleItems } from '../store/gridSlice';
import { DispatchDebounce } from '../store/dispatchDebounce';


const Grid = () => {
    const activeModeFieldCount: number = useSelector((state: RootState) => state.activeMode.mode.field);
    const selectedGridItems: string[] = useSelector((state: RootState) => state.selectedGridItems.grid);
    let middleSelectedGridItems: string[] = [];

    const dispatch: Dispatch<any> = useDispatch();
    const dispatchDebounce = new DispatchDebounce();

    const grid: number[][] = useMemo(() =>
            Array.from({ length: activeModeFieldCount }, () =>
                new Array(activeModeFieldCount).fill(0)),
        [ activeModeFieldCount ]
    );

    const handleDispatch = (): void => {
        dispatch(toggleItems(middleSelectedGridItems));
    };

    useEffect((): void => {
        middleSelectedGridItems = [ ...selectedGridItems ];
    }, [ selectedGridItems ]);


    const gridItemHoverHandler = (item: string, isItemActive: boolean): void => {
        try {
            if (!isItemActive) {
                const index = middleSelectedGridItems.indexOf(item);
                index > -1 && middleSelectedGridItems.splice(index, 1);
            } else {
                middleSelectedGridItems.unshift(item);
            }
            dispatchDebounce.debounce(handleDispatch, 100)();
        } catch (e) {
            console.error(e);
            console.group('gridItemHoverHandler error: ', item, middleSelectedGridItems);
        }
    };

    return (
        <div className={ 'inline-flex flex-col' }>
            { Boolean(grid.length)
                ?
                grid.map((row, rowIndex) => (
                    <div
                        className={ 'flex' }
                        key={ `field${ activeModeFieldCount }_row${ rowIndex }` }
                    >
                        { row.map((col, colIndex) => (
                            <GridItem
                                position={ {
                                    row: rowIndex + 1,
                                    col: colIndex + 1
                                } }
                                onHover={ gridItemHoverHandler }
                                key={ `field${ activeModeFieldCount }_row${ rowIndex }_col${ colIndex }` }
                            />
                        )) }
                    </div>
                ))
                : <p><em>Please, select a <strong>mode</strong> and press the <strong>START</strong> button!</em></p>
            }
        </div>
    );
};

export default Grid;
