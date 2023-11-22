import React from 'react';
import AppMode from './components/AppMode';
import HoverSquaresBoard from './components/HoverSquaresBoard';
import Grid from './components/Grid';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
    return (
        <Provider store={ store }>
            <div className={ 'py-5' }>
                <div className={ 'flex gap-16 p-5 flex-nowrap' }>
                    <div className={ 'flex flex-col gap-y-6' }>
                        <AppMode/>
                        <Grid/>
                    </div>
                    <HoverSquaresBoard/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
