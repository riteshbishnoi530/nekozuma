import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '@/components/Hero';
import SliderImages from '@/components/SliderImages';
import Story from '@/components/Story';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <Hero/>
    <SliderImages/>
    <Story/>
    <Team/>
    <Footer/>
    </>
  );
}
