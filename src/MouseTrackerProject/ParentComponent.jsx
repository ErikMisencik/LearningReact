
import React, { useState } from 'react';
import MouseTracker from './MouseTracker';

function ParentComponent() {
    const [showComponent, setShowComponent] = useState(true);

    const tooggleComponent = () => {
        setShowComponent((prev) => !prev);
    };

    return (
        <>
            <div className="center-container">
                    {showComponent && <MouseTracker />}
                    <button onClick={tooggleComponent}>
                        {showComponent ? 'Hide Tracker' : 'Show Tracker'}
                    </button>
            </div>
        </>

    );

}

export default ParentComponent;