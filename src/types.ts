import {
    faExclamationTriangle,
    faInfoCircle,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export type AppAuthor = {
    name: string;
    url: string;
} | null;

export type AppVersion = string | null;

export type AppRepository = {
    url: string;
} | null;

export const COMPONENT_STATUS = {
    OPERATIONAL:          'operational',
    DEGRADED_PERFORMANCE: 'degraded_performance',
    PARTIAL_OUTAGE:       'partial_outage',
    MAJOR_OUTAGE:         'major_outage',
} as const;

export type ComponentStatusKey = keyof typeof COMPONENT_STATUS;
export type ComponentStatus = typeof COMPONENT_STATUS[ComponentStatusKey];

export const INDICATOR_STATUS = {
    NONE:     'none',
    MINOR:    'minor',
    MAJOR:    'major',
    CRITICAL: 'critical',
} as const;

export type IndicatorStatusKey = keyof typeof INDICATOR_STATUS;
export type IndicatorStatus = typeof INDICATOR_STATUS[IndicatorStatusKey];

export const INDICATOR_STATUS_ICON_ENUM = {
    [INDICATOR_STATUS.NONE]:     faCheckCircle,
    [INDICATOR_STATUS.MINOR]:    faInfoCircle,
    [INDICATOR_STATUS.MAJOR]:    faExclamationTriangle,
    [INDICATOR_STATUS.CRITICAL]: faExclamationTriangle,
};

export const INDICATOR_STATUS_COLOR_SCHEME_ENUM = {
    [INDICATOR_STATUS.NONE]:     'green',
    [INDICATOR_STATUS.MINOR]:    'yellow',
    [INDICATOR_STATUS.MAJOR]:    'orange',
    [INDICATOR_STATUS.CRITICAL]: 'red',
};

export interface GithubComponent {
    id: string;
    name: string;
    status: ComponentStatus;
    description: string;
}

export interface GithubStatus {
    indicator: IndicatorStatus;
    description: string;
}

export interface Summary {
    page: {
        updated_at?: string;
    };
    components?: Array<GithubComponent>;
    status?: GithubStatus;
}

export const COMPONENT_STATUS_ICON_ENUM = {
    [COMPONENT_STATUS.OPERATIONAL]:          faCheckCircle,
    [COMPONENT_STATUS.DEGRADED_PERFORMANCE]: faInfoCircle,
    [COMPONENT_STATUS.PARTIAL_OUTAGE]:       faExclamationTriangle,
    [COMPONENT_STATUS.MAJOR_OUTAGE]:         faExclamationTriangle,
};

export const COMPONENT_STATUS_ICON_COLOR_ENUM = {
    [COMPONENT_STATUS.OPERATIONAL]:          'green.500',
    [COMPONENT_STATUS.DEGRADED_PERFORMANCE]: 'yellow.500',
    [COMPONENT_STATUS.PARTIAL_OUTAGE]:       'orange.500',
    [COMPONENT_STATUS.MAJOR_OUTAGE]:         'red.500',
};

export const COMPONENT_STATUS_BORDER_COLOR_ENUM = {
    [COMPONENT_STATUS.OPERATIONAL]:          'gray.200',
    [COMPONENT_STATUS.DEGRADED_PERFORMANCE]: 'yellow.500',
    [COMPONENT_STATUS.PARTIAL_OUTAGE]:       'orange.500',
    [COMPONENT_STATUS.MAJOR_OUTAGE]:         'red.500',
};

export const COMPONENT_STATUS_LABEL_ENUM = {
    [COMPONENT_STATUS.OPERATIONAL]:          'Operational',
    [COMPONENT_STATUS.DEGRADED_PERFORMANCE]: 'Degraded Performance',
    [COMPONENT_STATUS.PARTIAL_OUTAGE]:       'Partial Outage',
    [COMPONENT_STATUS.MAJOR_OUTAGE]:         'Major Outage',
};

export const COMPONENT_STATUS_LABEL_COLOR_ENUM = {
    [COMPONENT_STATUS.OPERATIONAL]:          'green',
    [COMPONENT_STATUS.DEGRADED_PERFORMANCE]: 'yellow',
    [COMPONENT_STATUS.PARTIAL_OUTAGE]:       'orange',
    [COMPONENT_STATUS.MAJOR_OUTAGE]:         'red',
};
