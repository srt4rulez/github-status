import useSWR from 'swr';
import type { Summary } from 'types';

// @ts-ignore
const fetcher = (...args): () => Promise<any> => fetch(...args).then(res => res.json());

interface UseSummaryReturn {
    summary?: Summary;
    isLoading: boolean;
    isError: boolean;
    isValidating: boolean;
}

export const useSummary = (): UseSummaryReturn => {
    const {
        data,
        error,
        isValidating,
        // @ts-ignore
    } = useSWR<Summary>('https://www.githubstatus.com/api/v2/summary.json', fetcher);

    return {
        summary: {
            ...data,
            components: [
                {
                    id: '8l4ygp009s5sasdfasdf',
                    name: 'Git Operations',
                    status: 'operational',
                    description: 'Performance of git clones, pulls, pushes, and associated operations',
                },
                {
                    id: 'brv1bkgrwx7qasfdsaf',
                    name: 'API Requests',
                    status: 'degraded_performance',
                    description: 'Requests for GitHub APIs',
                },
                {
                    id: '4230lsnqdsldasfsdaf',
                    name: 'Webhooks',
                    status: 'partial_outage',
                    description: 'Real time HTTP callbacks of user-generated and system events',
                },
                {
                    id: '0l2p9nhqnxpdasdfsd',
                    name: 'Issues',
                    status: 'major_outage',
                    description: 'Requests for Issues on GitHub.com',
                },
                ...(data && data.components ? data.components : []),
            ],
        },
        isLoading: !error && !data,
        // isLoading: true,
        isError: Boolean(error),
        isValidating: isValidating,
    };
};
