import type { FC, ChangeEvent, FormEvent } from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn, textVariant } from '../utils/motion';

type UserForm = {
    name: string;
    email: string;
    message: string;
}

// emailjs의 퍼블릭 키     : t-Xuibt7ibDFlA6e8
// emailjs의 서비스 아이디 : service_30lobhs
// emailjs의 템플릿 아이디 : template_qlj8t7e

const initialUserForm: UserForm = {
    name: '',
    email: '',
    message: ''
};

const Contact: FC = () => {

    const refForm = useRef<any>();
    const [form, setForm] = useState<UserForm>(initialUserForm);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // setForm(prev => ({
        //     ...prev,
        //     [e.target.name]: e.target.value
        // }))

        setForm(prev => {
            const { name, value } = e.target;

            return {
                ...prev,
                [name]: value
            }
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        
        const body = {
            from_name: form.name,
            to_name: 'eeennsu',
            from_email: form.email,
            to_email: 'xxx592@naver.com',
            message: form.message
        };

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            body,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(res => {
            setIsLoading(false);

            alert('Thanks! I call back to you ASAP');
    
            setForm(initialUserForm);
        })
        .catch(err => {
            if (err instanceof Error) {
                console.log(err.message);
                alert('something wrong');
                setIsLoading(false);
                throw new Error();
            }    
        })
    }

    return (
        <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
                <p className={styles.sectionSubText}>
                    GET IN TOUCH
                </p>
                <h3 className={styles.sectionHeadText}>
                    Contact.
                </h3>
                <form 
                    ref={refForm}
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-8 mt-12' 
                >
                    <label className='flex flex-col'>
                        <span className='font-medium text-white'>
                            your name
                        </span>
                        <input required type="text" name='name' value={form.name} onChange={handleChange} placeholder="what's your name?"
                        className='px-6 py-4 font-medium text-white transition-colors border-none rounded-lg outline-none focus:bg-violet-900/40 bg-tertiary placeholder:text-secondary' />
                    </label>

                    <label className='flex flex-col'>
                        <span className='font-medium text-white'>
                            your email
                        </span>
                        <input required type="email" name='email' value={form.email} onChange={handleChange} placeholder="what's your email?"
                        className='px-6 py-4 font-medium text-white transition-colors border-none rounded-lg outline-none focus:bg-violet-900/40 bg-tertiary placeholder:text-secondary' />
                    </label>

                    <label className='flex flex-col'>
                        <span className='font-medium text-white'>
                            your message
                        </span>
                        <textarea required rows={7}  name='message' value={form.message} onChange={handleChange} placeholder="what's your message?"
                        className='px-6 py-4 font-medium text-white transition-colors border-none rounded-lg outline-none focus:bg-violet-900/40 bg-tertiary placeholder:text-secondary' />
                    </label>
                    <button type='submit' className='px-8 py-3 font-bold transition-colors rounded-md shadow-md hover:bg-violet-900 active:bg-violet-950 w-fit shadow-primary bg-tertiary' disabled={isLoading}> 
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>           

            <motion.div 
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'    
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');