import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    // figma,
    // docker,
    rmta,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    recoil,
    reactQuery,
    zustand,
    nextjs,
} from '../assets';

export const navLinks: NavLink[] = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

export const services: Service[] = [
    {
        title: 'React',
        icon: web,
    },
    {
        title: 'TypeScript',
        icon: mobile,
    },
    {
        title: 'Tailwind CSS',
        icon: backend,
    },
    {
        title: 'Next.js',
        icon: creator,
    },
];

// 크롬의 캔버스 개수 제한으로 (16개) 조정 필요함
// https://github.com/adrianhajdin/project_3D_developer_portfolio/issues/7
export const technologies: Technology[] = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Recoil',
        icon: recoil,
    },
    {
        name: 'React(Tanstack) Query',
        icon: reactQuery,
    },
    {
        name: 'Zustand',
        icon: zustand,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    // {
    //     name: 'MongoDB',
    //     icon: mongodb,
    // },
    {
        name: 'Next.js',
        icon: nextjs,
    },
    // {
    //     name: 'Three JS',
    //     icon: threejs,
    // },
    // {
    //     name: 'git',
    //     icon: git,
    // }, 
];

export const experiences: Experience[] = [
    {
        title: 'React.js Developer',
        company_name: 'Starbucks',
        icon: starbucks,
        iconBg: '#383E56',
        date: 'March 2020 - April 2021',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'React Native Developer',
        company_name: 'Tesla',
        icon: tesla,
        iconBg: '#E6DEDD',
        date: 'Jan 2021 - Feb 2022',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Web Developer',
        company_name: 'Shopify',
        icon: shopify,
        iconBg: '#383E56',
        date: 'Jan 2022 - Jan 2023',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Full stack Developer',
        company_name: 'Meta',
        icon: meta,
        iconBg: '#E6DEDD',
        date: 'Jan 2023 - Present',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
];

export const testimonials: Testimonial[] = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
];

export const projects: Project[] = [
    {
        name: 'Movie Search App',
        description:
            'This is an information website built with React that provides the latest information and search functionality for movies, TV shows, and actors. We sourced our data from the online database known as TMDB.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'typescript',
                color: 'blue-text-gradient',
            },          
            {
                name: 'zustand',
                color: 'pink-text-gradient',
            },
            {
                name: 'react-query',
                color: 'pink-text-gradient',
            },
            {
                name: 'tailwind css',
                color: 'green-text-gradient',
            },
            {
                name: 'Ant Design',
                color: 'green-text-gradient',
            },
        ],
        image: rmta,
        source_code_link: 'https://eeennsu.github.io/react-movie-tv-actor/',
    },
    {
        name: 'Job IT',
        description:
            'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Trip Guide',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: tripguide,
        source_code_link: 'https://github.com/',
    },
];

export const myBlogLink: string = 'https://velog.io/@diso592';