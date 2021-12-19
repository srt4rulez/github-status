import * as React from 'react';
import { useSummary } from 'useSummary';
import {
    Grid,
    Container,
    Heading,
} from '@chakra-ui/react';
import ComponentTile from 'Components/ComponentTile/ComponentTile';
import InlineError from 'Components/InlineError/InlineError';
import ComponentTileSkeleton from 'Components/ComponentTileSkeleton/ComponentTileSkeleton';

const App = (): JSX.Element | null => {

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

    return (

        <Container
            maxW="container.xl"
        >

            <Heading
                as="h1"
                size="2xl"
                marginX="1rem"
                marginY="10rem"
                color="gray.600"
                textAlign="center"
            >

                GitHub Status

            </Heading>

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

        </Container>

    );

};

export default App;
