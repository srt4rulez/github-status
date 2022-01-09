import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import {
    ChakraProvider,
    ColorModeScript,
} from '@chakra-ui/react';
import theme from './theme';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider
            theme={theme}
        >
            <ColorModeScript
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                initialColorMode={theme.config.initialColorMode}
            />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
