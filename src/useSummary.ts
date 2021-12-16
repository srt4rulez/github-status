import useSWR from 'swr';
import type { AxiosError } from 'axios';
import axios from 'axios';
import type { Summary } from 'types';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const fetcher = <T>(url: string): Promise<T> => axios.get(url).then((res) => res.data);

interface UseSummaryReturn {
    summary?: Summary;
    isLoading: boolean;
    isError: boolean;
    error?: AxiosError;
}

export const useSummary = (): UseSummaryReturn => {
    const {
        data,
        error,
    } = useSWR<Summary, AxiosError>('https://www.githubstatus.com/api/v2/summary.json', fetcher);

    console.dir(error);

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
        isError: Boolean(error),
        error: error,
    };
};
