export interface StrippedRepository {
    author: string;
    name: string;
}

export interface Repository extends StrippedRepository {
    link: string | URL;
    description: string;
    languageColor: string;
    language: string;
    stars: number;
    forks: number;
}
