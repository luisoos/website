// src/utils/blogMatcher.ts
import { getCollection } from 'astro:content';
import type { Repository } from '../types/repository';

export interface BlogMatch {
    slug: string;
    title: string;
    fullName: string;
}

export async function findBlogForRepos(
    repositories: Repository[],
): Promise<Map<string, BlogMatch>> {
    const posts = await getCollection('blog');
    const repoMatches = new Map<string, BlogMatch>();

    const fullRepoNames = repositories.map((r) => r.author + '/' + r.name);

    for (const post of posts) {
        const content = post.body; // Raw MDX content

        for (const name of fullRepoNames) {
            if (content && content.includes(name)) {
                repoMatches.set(name, {
                    slug: post.id,
                    title: post.data.title,
                    fullName: name,
                });
                break; // One blog per repo
            }
        }
    }

    return repoMatches;
}
