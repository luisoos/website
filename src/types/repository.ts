export interface StrippedRepository {
    link: string | URL;
    author: string;
    name: string;
}

export interface Repository extends StrippedRepository {
    description: string;
    languageColor: string;
    language: string;
    stars: number;
    forks: number;
}
