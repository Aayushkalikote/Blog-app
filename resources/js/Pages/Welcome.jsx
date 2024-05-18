import Cards from '@/Components/BlogCards/Cards';
import NavBar from '@/Components/NavigationBar/NavBar';


export default function Welcome() {
    return (
        <>
            <div className='w-9/12 m-auto py-4'>
                <NavBar/>
            </div>

            <div className='w-9/12 m-auto grid grid-cols-2 gap-6 justify-center'>
                <Cards imgSrc="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=800"/>
                <Cards imgSrc="https://images.pexels.com/photos/2220286/pexels-photo-2220286.jpeg?auto=compress&cs=tinysrgb&w=800"/>
                <Cards imgSrc="https://images.pexels.com/photos/220755/pexels-photo-220755.jpeg?auto=compress&cs=tinysrgb&w=800"/>
                <Cards imgSrc="https://images.pexels.com/photos/1126380/pexels-photo-1126380.jpeg?auto=compress&cs=tinysrgb&w=800"/>
                <Cards imgSrc="https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&w=800" />
                <Cards imgSrc="https://images.pexels.com/photos/1035682/pexels-photo-1035682.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </div>

        </>
    );
}
