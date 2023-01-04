import React from 'react';
import Main from './components/Main';
import SocialMediaMenu from './components/SocialMediaMenu';

function App() {
    return (
        <div style={{ position: "relative" }}>
            <SocialMediaMenu />
            <Main />
        </div>
    );
}

export default App;
