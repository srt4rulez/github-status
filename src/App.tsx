import * as React from 'react';
import './App.css';
import { useSummary } from 'useSummary';
import {
    Grid,
    Container,
    Heading,
    Tag,
    TagLabel,
    VStack,
    Text,
    Tooltip,
    useColorModeValue,
} from '@chakra-ui/react';
import ComponentTile from 'Components/ComponentTile/ComponentTile';
import InlineError from 'Components/InlineError/InlineError';
import ComponentTileSkeleton from 'Components/ComponentTileSkeleton/ComponentTileSkeleton';
import {
    INDICATOR_STATUS_ICON_ENUM,
    INDICATOR_STATUS_COLOR_SCHEME_ENUM,
} from 'types';
import type {
    AppAuthor,
    AppVersion,
    AppRepository,
} from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    parseISO,
    formatDistanceToNow,
} from 'date-fns';
import AppHeader from 'Components/AppHeader/AppHeader';
import AppFooter from 'Components/AppFooter/AppFooter';

export interface AppPropsInterface {
    author?: AppAuthor;
    version?: AppVersion;
    repository?: AppRepository;
}

const App = (props: AppPropsInterface): JSX.Element | null => {

    const {
        summary,
        isLoading,
        isError,
        error,
        isValidating,
        refetchSummary,
    } = useSummary();

    const handleInlineErrorClick = (): void => {
        void refetchSummary();
    };

    const indicator = summary && summary.status && summary.status.indicator || undefined;

    const lastUpdatedColor = useColorModeValue('gray.500', 'gray.400');

    return (

        <Container
            maxW="container.xl"
        >

            <AppHeader />

            <VStack
                marginX="1rem"
                marginY="10rem"
            >

                <Heading
                    as="h1"
                    size="2xl"
                    color={useColorModeValue('gray.600', 'gray.400')}
                    textAlign="center"
                    marginBottom="2"
                >

                    GitHub Status

                </Heading>

                <Tag
                    size="lg"
                    colorScheme={indicator ? INDICATOR_STATUS_COLOR_SCHEME_ENUM[indicator] : 'green'}
                >

                    {indicator && INDICATOR_STATUS_ICON_ENUM[indicator] && (

                        <FontAwesomeIcon
                            icon={INDICATOR_STATUS_ICON_ENUM[indicator]}
                        />

                    )}

                    {summary && summary.status && summary.status.description && (

                        <TagLabel
                            marginLeft="1"
                        >

                            {summary.status.description}

                        </TagLabel>

                    )}

                </Tag>

                {summary && summary.page && summary.page.updated_at && (

                    <Tooltip
                        label={parseISO(summary.page.updated_at).toLocaleString()}
                        hasArrow={true}
                    >

                        <Text
                            color={lastUpdatedColor}
                        >

                            Last Updated {formatDistanceToNow(parseISO(summary.page.updated_at), {
                                addSuffix: true
                            })}

                        </Text>

                    </Tooltip>

                )}

            </VStack>

            {isError ? (

                <InlineError
                    header="Error fetching Github status"
                    message={error ? error.message : undefined}
                    buttonLabel="Fetch GitHub Status"
                    buttonProps={{
                        isLoading: isValidating,
                        onClick: handleInlineErrorClick,
                    }}
                />

            ) : (

                <Grid
                    gap="4"
                    templateColumns={{
                        md: 'repeat(3, 1fr)',
                        sm: 'repeat(2, 1fr)',
                    }}
                >

                    {isLoading && (

                        <React.Fragment>

                            <ComponentTileSkeleton />
                            <ComponentTileSkeleton />
                            <ComponentTileSkeleton />
                            <ComponentTileSkeleton />
                            <ComponentTileSkeleton />
                            <ComponentTileSkeleton />
                            <ComponentTileSkeleton />
                            <ComponentTileSkeleton />
                            <ComponentTileSkeleton />

                        </React.Fragment>

                    )}

                    {summary && summary.components ? summary.components.map((component) => {

                        return (

                            <ComponentTile
                                key={component.id}
                                name={component.name}
                                status={component.status}
                                description={component.description}
                            />

                        );

                    }) : null}

                </Grid>

            )}

            <AppFooter
                author={props.author}
                version={props.version}
                repository={props.repository}
            />

        </Container>

    );

};

export default App;
