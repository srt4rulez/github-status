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
import packageJson from './../package.json';
import type {
    AppAuthor,
    AppVersion,
    AppRepository,
} from 'types';

let author: AppAuthor = null;
if (packageJson && ('author' in packageJson)) {
    author = packageJson.author;
}

let version: AppVersion = null;
if (packageJson && ('version' in packageJson)) {
    version = `v${packageJson.version}`;
}

let repository: AppRepository = null;
if (packageJson && ('repository' in packageJson)) {
    repository = packageJson.repository;
}

ReactDOM.render(
    <React.StrictMode>

        <ChakraProvider
            theme={theme}
        >

            <ColorModeScript
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                initialColorMode={theme.config.initialColorMode}
            />

            <App
                author={author}
                version={version}
                repository={repository}
            />

        </ChakraProvider>

    </React.StrictMode>,
    document.getElementById('root')
);
