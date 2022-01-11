import * as React from 'react';
import {
    Box,
    useColorMode,
    FormLabel,
    Switch,
} from '@chakra-ui/react';

const AppHeader = (): JSX.Element | null => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (

        <Box
            className="header"
            as="header"
            paddingY="2"
            display="flex"
            alignItems="center"
            justifyContent="end"
        >

            <FormLabel
                htmlFor="dark-mode-toggle"
                marginBottom="0"
            >
                Dark Mode
            </FormLabel>

            <Switch
                display="flex"
                isChecked={colorMode === 'dark'}
                id="dark-mode-toggle"
                onChange={toggleColorMode}
            />

        </Box>

    );

};

export default AppHeader;
