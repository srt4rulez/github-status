import type { KeyedMutator } from 'swr';
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
    isValidating: boolean;
    refetchSummary: KeyedMutator<Summary>;
}

export const useSummary = (): UseSummaryReturn => {
    const {
        data,
        error,
        isValidating,
        mutate,
    } = useSWR<Summary, AxiosError>('https://www.githubstatus.com/api/v2/summary.json', fetcher);

    return {
        summary: data,
        isLoading: !error && !data,
        isError: Boolean(error),
        error: error,
        isValidating: isValidating,
        refetchSummary: mutate,
    };
};
