import React, { useState } from 'react';
import classnames from 'classnames';

type GridProps = {
    position: {
        row: number
        col: number
    },
    onHover: (arg1: string, arg2: boolean) => void,
}

const GridItem = ({
    position,
    onHover,
}: GridProps) => {
    const itemName: string = `row ${ position.row } col ${ position.col }`;
    const [ active, setActive ] = useState(false);

    const hoverHandler = ():void => {
        setActive(!active);
        onHover(itemName, !active);
    };

    return (
        <div
            className={
                classnames({
                    'block h-14 w-14 border border-slate-500 -ml-px -mb-px': true,
                    'bg-blue-600': active
                }) }
            onMouseOver={ hoverHandler }
        ></div>
    );
};

export default GridItem;
