import * as React from 'react';
import {
    Box, Link,
} from '@chakra-ui/react';
import type {
    AppAuthor,
    AppRepository,
    AppVersion,
} from 'types';

export interface AppFooterPropsInterface {
    author?: AppAuthor;
    version?: AppVersion;
    repository?: AppRepository;
}

const AppFooter = (props: AppFooterPropsInterface): JSX.Element | null => {

    return (

        <Box
            as="footer"
            textAlign="center"
            paddingY="10"
            paddingX="2"
            fontSize="sm"
        >

            <ul
                className="app__footer-list"
            >

                {props.author && props.author.name && props.author.url && (

                    <li>

                        Created By

                        {' '}

                        <Link
                            href={props.author.url}
                            isExternal={true}
                            color="blue.500"
                        >
                            {props.author.name}
                        </Link>

                    </li>

                )}

                {props.version && (

                    <li>

                        {props.version}

                    </li>

                )}

                {props.repository && props.repository.url && (

                    <li>

                        <Link
                            href={props.repository.url}
                            isExternal={true}
                            color="blue.500"
                        >
                            View on Github
                        </Link>

                    </li>

                )}

            </ul>

        </Box>

    );

};

export default AppFooter;
