import * as React from 'react';
import {
    Box,
    Text,
    Heading,
    Tag,
} from '@chakra-ui/react';
import type { GithubComponent } from 'types';
import {
    COMPONENT_STATUS_ICON_ENUM,
    COMPONENT_STATUS_ICON_COLOR_ENUM,
    COMPONENT_STATUS_BORDER_COLOR_ENUM,
    COMPONENT_STATUS_LABEL_ENUM,
    COMPONENT_STATUS_LABEL_COLOR_ENUM,
} from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

interface ComponentTileProps extends Partial<GithubComponent> { // eslint-disable-line @typescript-eslint/no-empty-interface
}

const ComponentTile = (props: ComponentTileProps): JSX.Element | null => {

    if (!props.name || !props.description) {
        return null;
    }

    return (

        <Box
            padding="8"
            border="1px"
            borderColor={props.status ? COMPONENT_STATUS_BORDER_COLOR_ENUM[props.status] : undefined}
            borderRadius="base"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
        >

            <Box
                color={props.status ? COMPONENT_STATUS_ICON_COLOR_ENUM[props.status] : undefined}
                marginBottom="2"
            >

                <FontAwesomeIcon
                    icon={props.status ? COMPONENT_STATUS_ICON_ENUM[props.status] : faCheckCircle}
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
                    colorScheme={COMPONENT_STATUS_LABEL_COLOR_ENUM[props.status]}
                    marginY="2"
                >

                    {COMPONENT_STATUS_LABEL_ENUM[props.status]}

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
