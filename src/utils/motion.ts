import { Variants } from 'framer-motion';

type TransitionType = 'spring' | 'tween' | '';
type Direction = 'left' | 'right' | 'up' | 'down' | '';

export const textVariant = (delay: number = 1): Variants => {

    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1,
                delay
            }
        }
    }; 
}

export const fadeIn = (direction: Direction, type: TransitionType, delay: number, duration: number): Variants => {

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

export const zoomIn = (delay: number, duration: number): Variants => {

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

export const slideIn = (direction: Direction, type: TransitionType, delay: number, duration: number): Variants => {
    
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

// 다수의 요소가 순차적으로 나타날 때 상요
export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Variants => {

    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren: delayChildren || 0
            }
        }
    }
}