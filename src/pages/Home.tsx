import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import HeroVisual from '../components/ui/HeroVisual';
import { HeroCards } from '../components/ui/HeroCards';
import { Suspense, lazy } from 'react';

// Lazy load below-the-fold components
const BetterDatabaseSection = lazy(() => import('../components/ui/BetterDatabaseSection').then(module => ({ default: module.BetterDatabaseSection })));
const ProjectShowcase = lazy(() => import('../components/ui/ProjectShowcase').then(module => ({ default: module.ProjectShowcase })));
const TrustedSection = lazy(() => import('../components/ui/TrustedSection').then(module => ({ default: module.TrustedSection })));

import { WelcomePopup } from '../components/ui/WelcomePopup';

const Home = () => {
    return (
        <div className="bg-background min-h-screen text-secondary selection:bg-primary/30 selection:text-white overflow-x-hidden">
            <WelcomePopup />
            <Navbar />
            <HeroVisual />
            <HeroCards />

            <Suspense fallback={<div className="min-h-[50vh] bg-white" />}>
                <BetterDatabaseSection />

                <ProjectShowcase />
                <TrustedSection />
            </Suspense>

            <Footer />
        </div>
    );
};



export default Home;
