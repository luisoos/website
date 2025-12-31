import React from 'react';
import { type TechStack } from '../types/techStack';
import { ReactIcon } from './ui/icon';
import HoverCard from './ui/hover-card';

const nuxtLogoSvg = `<path d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z" />`;
const coffeeMugSvg = `<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>`;

const techStack: TechStack[] = [
    {
        name: 'TypeScript',
        icon: 'typescript',
        relatedProjects: [
            { author: 'luisoos', name: 'sales' },
            { author: 'luisoos', name: 'learnlab' },
            { author: 'luisoos', name: 'better-github-api' },
            { author: 'luisoos', name: 'lib' },
            { author: 'luisoos', name: 'food-tracker' },
            { author: 'luisoos', name: 'untis-ical' },
            { author: 'Floppahost', name: 'discord-bot' },
        ],
    },
    {
        name: 'Astro',
        icon: 'astro',
        description: 'A modern static site builder for the web.',
        relatedProjects: [
            { author: 'luisoos', name: 'astro-template' },
            { author: 'luisoos', name: 'blog' },
        ],
    },
    {
        name: 'React',
        icon: 'react',
        relatedProjects: [
            { author: 'luisoos', name: 'sales' },
            { author: 'luisoos', name: 'lib' },
            { author: 'luisoos', name: 'food-tracker' },
        ],
    },
    {
        name: 'Next.js',
        icon: 'nextdotjs',
        description: 'Full-stack framework for React.',
        relatedProjects: [
            { author: 'luisoos', name: 'sales' },
            { author: 'luisoos', name: 'lib' },
            { author: 'luisoos', name: 'food-tracker' },
        ],
    },
    {
        name: 'PostgreSQL',
        icon: 'postgresql',
        relatedProjects: [
            { author: 'luisoos', name: 'sales' },
            { author: 'luisoos', name: 'lib' },
        ],
    },
    {
        name: 'Supabase',
        icon: 'supabase',
        description: 'An open source Firebase alternative using PostgreSQL.',
        relatedProjects: [
            { author: 'luisoos', name: 'sales' },
            { author: 'luisoos', name: 'lib' },
        ],
    },
    {
        name: 'MongoDB',
        icon: 'mongodb',
        relatedProjects: [{ author: 'luisoos', name: 'learnlab' }],
    },
    {
        name: 'Node.js',
        icon: 'nodedotjs',
        relatedProjects: [
            { author: 'luisoos', name: 'learnlab' },
            { author: 'Floppahost', name: 'discord-bot' },
            { author: 'luisoos', name: 'untis-ical' },
            { author: 'luisoos', name: 'better-github-api' },
            { author: 'luisoos', name: 'import-git-history' },
        ],
    },
    {
        name: 'Nuxt.js',
        icon: nuxtLogoSvg,
        iconViewBox: '0 0 512 512',
        description: 'A Vue.js framework for building universal applications.',
        relatedProjects: [{ author: 'luisoos', name: 'learnlab' }],
    },
    {
        name: 'Laravel',
        icon: 'laravel',
        description: 'A PHP framework for building web applications.',
        relatedProjects: [],
    },
    {
        name: 'php',
        icon: 'php',
        relatedProjects: [],
    },
    {
        name: 'Express',
        icon: 'express',
        description: 'Backend (API/web) framework for Node.js.',
        relatedProjects: [
            { author: 'luisoos', name: 'untis-ical' },
            { author: 'luisoos', name: 'better-github-api' },
        ],
    },
    {
        name: 'Java',
        icon: coffeeMugSvg,
        iconViewBox: '0 0 24 24',
        iconFill: 'none',
        relatedProjects: [],
    },
    {
        name: 'Tailwind CSS',
        icon: 'tailwindcss',
        relatedProjects: [
            { author: 'luisoos', name: 'sales' },
            { author: 'luisoos', name: 'learnlab' },
            { author: 'luisoos', name: 'lib' },
            { author: 'luisoos', name: 'food-tracker' },
        ],
    },
    {
        name: 'Git',
        icon: 'git',
        relatedProjects: false,
    },
];

export default function TechStack() {
    return techStack.map((tech, index) => (
        <HoverCard
            key={tech.name}
            className='mx-2'
            trigger={
                <div className='flex'>
                    <ReactIcon
                        name={tech.icon}
                        iconViewBox={tech.iconViewBox}
                        color={tech.iconFill}
                        size={16}
                        className='mr-1 mt-1'
                    />
                    <p className='font-semibold'>{tech.name}</p>
                </div>
            }
            content={
                tech.relatedProjects &&
                (tech.relatedProjects.length > 0 ? (
                    tech.relatedProjects.map((project) => (
                        <a
                            href={`https://github.com/${project.author}/${project.name}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex text-sm hover:underline opacity-80 hover:opacity-100 transition-opacity py-0.5'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='12'
                                height='12'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='3'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='my-auto'>
                                <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
                                <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
                            </svg>
                            <ReactIcon
                                name='github'
                                size={12}
                                className='my-auto ml-0.5 mr-1'
                            />
                            {project.author}/{project.name}
                        </a>
                    ))
                ) : (
                    <p className='text-sm italic'>
                        All projects done with this technology are private/under NDA.
                    </p>
                ))
            }
        />
    ));
}
