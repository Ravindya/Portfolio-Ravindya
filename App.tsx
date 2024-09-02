// components/App.tsx
import React, { ReactNode } from 'react';
import Nav from './components/Nav'; // Your Nav component

// Define the props interface to include `children`
interface AppProps {
    children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
    return (
        <>
            <Nav openNav={() => console.log("Navigation opened")} />
            <main>
                {children}
            </main>
        </>
    );
};

export default App;


