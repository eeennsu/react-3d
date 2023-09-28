type NavLink = {
    id: string;
    title: string;
}

type Service = {
    title: string;
    icon: string;
}

type Technology = {
    name: string;
    icon: string;
}

type Experience = {
    title: string;
    title: string
    company_name: string;
    icon: string
    iconBg: string
    date: string
    points: string[]
}

type Testimonial = {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}

type Color = {
    name: string;
    color: string;
}

type Project = {
    name: string;
    description: string;
    tags: Color[];
    image: string;
    source_code_link: string;
}