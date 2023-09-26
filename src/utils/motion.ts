type TransitionType = 'spring' | 'tween';
type Direction = 'left' | 'right' | 'up' | 'down'

type Point = {
    x: number | string;
    y: number | string;
    opacity: number;
    scale: number;
}

type Hidden = Partial<Point>;

type Transition = {
    type?: TransitionType;
    duration?: number;
    delay?: number;
    ease?: 'easeOut';
    staggerChildren?: unknown;
    delayChildren?: unknown;
}

type Show = Partial<Point> & {
    transition: Transition
}

type Animation = {
    hidden: Hidden;
    show: Show
}

export const textVariant = (delay: number): Animation => {

    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.25,
                delay
            }
        }
    }; 
}

export const fadeIn = (direction: Direction, type: TransitionType, delay: number, duration: number): Animation => {

    const x = direction === 'left' ? 100 : direction === 'right' ? -100 : 0;
    const y = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;

    return {
        hidden: {
            x,
            y,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut'
            }
        }
    };
}

export const zoomIn = (delay: number, duration: number): Animation => {

    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'tween',
                delay,
                duration,
                ease: 'easeOut'
            }
        }
    };
}

export const slideIn = (direction: Direction, type: TransitionType, delay: number, duration: number): Animation => {
    
    const x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0;
    const y = direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0;

    return {
        hidden: {
            x,
            y
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut'
            }
        }
    }
}

export const staggerContainer = (staggerChildren: unknown, delayChildren: unknown): Animation => {

    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren
            }
        }
    }
}