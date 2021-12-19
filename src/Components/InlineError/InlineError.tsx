import * as React from 'react';
import type {
    ButtonProps
} from '@chakra-ui/react';
import {
    Box,
    Text,
    Heading,
    Button,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons';

interface InlineErrorProps {
    header?: string;
    message?: string;
    buttonLabel?: string;
    buttonProps?: ButtonProps;
}

const InlineError = (props: InlineErrorProps = {
    buttonProps: {},
}): JSX.Element | null => {

    return (

        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
        >

            <Box
                color="red.500"
                marginBottom="4"
            >

                <FontAwesomeIcon
                    icon={faSkullCrossbones}
                    size="4x"
                />

            </Box>

            <Heading
                as="h2"
                size="md"
                marginBottom="1"
            >

                {props.header || 'Error'}

            </Heading>

            <Text
                color="gray.600"
                marginBottom="4"
            >

                {props.message || 'An unknown error has occurred.'}

            </Text>

            <Button
                colorScheme="teal"
                size="lg"
                {...props.buttonProps}
            >

                {props.buttonLabel || 'Try Again'}

            </Button>

        </Box>

    );

};

export default InlineError;
