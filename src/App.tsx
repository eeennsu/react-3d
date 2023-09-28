import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Loader, Header, Tech, Works } from './features';
import { StarsCanvas } from './features/canvas';
import { useRecoilValue } from 'recoil';
import { isDrawerOpenState } from './recoil/drawerStore';

const App = () => {

    const isDrawerOpen = useRecoilValue(isDrawerOpenState);

    // 페이지가 하나일 때는 <Routes>, <Route> 컴포넌트는 필요하지 않다.
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
                    <Header />
                    <Hero />
                </div>
                <div className={`${isDrawerOpen && 'opacity-40'} relative z-0`}>
                    <About />
                    <Experience />
                    <Tech />
                    <Works />
                    <Feedbacks />

                     {/* 3d 별 몇개를 표시할 예정*/}
                    <div className='relative z-0 '>
                        <Contact />
                        <StarsCanvas />
                    </div>
                </div>               
            </div>
        </BrowserRouter>
    )
}

export default App