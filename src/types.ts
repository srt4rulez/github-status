export type IndicatorStatus = 'none'
    | 'minor'
    | 'major'
    | 'critical'
;

export type ComponentStatus = 'operational'
    | 'degraded_performance'
    | 'partial_outage'
    | 'major_outage'
;

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
    updated_at?: string;
    components?: Array<GithubComponent>;
    status?: GithubStatus;
}
