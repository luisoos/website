import { type StrippedRepository } from './repository';

export interface TechStack {
    name: string;
    icon: string;
    iconViewBox?: string;
    iconFill?: string;
    description?: string;
    relatedProjects: StrippedRepository[];
}
