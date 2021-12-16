import * as React from 'react';
import {
    Box,
    Text,
    Heading,
    Tag,
} from '@chakra-ui/react';
import type { GithubComponent } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExclamationTriangle,
    faInfoCircle,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const STATUS_ICON_ENUM = {
    'operational':          faCheckCircle,
    'degraded_performance': faInfoCircle,
    'partial_outage':       faExclamationTriangle,
    'major_outage':         faExclamationTriangle,
};

const STATUS_ICON_COLOR_ENUM = {
    'operational':          'green.500',
    'degraded_performance': 'yellow.500',
    'partial_outage':       'orange.500',
    'major_outage':         'red.500',
};

const STATUS_BORDER_COLOR_ENUM = {
    'operational':          'gray.200',
    'degraded_performance': 'yellow.500',
    'partial_outage':       'orange.500',
    'major_outage':         'red.500',
};

const STATUS_LABEL_ENUM = {
    'operational':          'Operational',
    'degraded_performance': 'Degraded Performance',
    'partial_outage':       'Partial Outage',
    'major_outage':         'Major Outage',
};

const STATUS_LABEL_COLOR_ENUM = {
    'operational':          'green',
    'degraded_performance': 'yellow',
    'partial_outage':       'orange',
    'major_outage':         'red',
};

interface ComponentTileProps extends Partial<GithubComponent> { // eslint-ignore-line @typescript-eslint/no-empty-interface
}

const ComponentTile = (props: ComponentTileProps): JSX.Element | null => {

    if (!props.name || !props.description) {
        return null;
    }

    return (

        <Box
            padding="8"
            border="1px"
            borderColor={props.status ? STATUS_BORDER_COLOR_ENUM[props.status] : undefined}
            borderRadius="base"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
        >

            <Box
                color={props.status ? STATUS_ICON_COLOR_ENUM[props.status] : undefined}
                marginBottom="2"
            >

                <FontAwesomeIcon
                    icon={props.status ? STATUS_ICON_ENUM[props.status] : faCheckCircle}
                    size="2x"
                />

            </Box>

            <Heading
                as="h2"
                size="md"
                marginBottom="1"
            >

                {props.name}

            </Heading>

            {props.status && (

                <Tag
                    colorScheme={STATUS_LABEL_COLOR_ENUM[props.status]}
                    marginY="2"
                >

                    {STATUS_LABEL_ENUM[props.status]}

                </Tag>

            )}

            <Text
                color="gray.600"
            >

                {props.description}

            </Text>

        </Box>

    );

};

export default ComponentTile;
