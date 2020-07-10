import React, {useEffect, useState} from 'react';

const App = () => {

    const [windowSize, setWindowSize] = useState({height: window.innerHeight, width: window.innerWidth});

    useEffect(() => {
        window.addEventListener('resize', () => {
            const h = window.innerHeight;
            const w = window.innerWidth;

            setWindowSize({height: h, width: w})
        });

        return window.removeEventListener
    }, [])

    return (
        <div className="child relative h-1by2 bg-white gray-light pattern-dots-sm">
            <h3>
                {windowSize.height} X {windowSize.width}
            </h3>
        </div>
    );
}

export default App;
