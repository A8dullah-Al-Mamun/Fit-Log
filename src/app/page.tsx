import Hero from './components/hero/banner';
import Workout from './workouts/page';
export const dynamic = 'force-dynamic';

const page = () => {
    return (
        <div>
            <Hero />
            <Workout />
        </div>
    );
};

export default page;