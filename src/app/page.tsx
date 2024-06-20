import styles from './page.module.scss'

import Header from '@/components/Header/page';
import SectionHome from '@/components/SectionHome/page';
import SectionServices from '@/components/SectionServices/page';

import Footer from '@/components/Footer/page';

export default function Home() {
  return (
    <>
      <Header />
      <SectionHome />

      <SectionServices />      
    </>
  );
}
