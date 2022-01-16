import { extendTheme } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config: config,
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
});

export default theme;
