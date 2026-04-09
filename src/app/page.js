import { getAllContent } from '@/lib/content';
import { defaults } from '@/lib/defaults';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import EcosystemSection from './components/EcosystemSection';
import WhoThisIsForSection from './components/WhoThisIsForSection';
import AboutLeaderSection from './components/AboutLeaderSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import WhatsAppSticky from './components/WhatsAppSticky';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let content;
  try {
    const dbContent = await getAllContent();
    content = { ...defaults };
    for (const key of Object.keys(dbContent)) {
      if (dbContent[key]) {
        content[key] = dbContent[key];
      }
    }
  } catch {
    content = { ...defaults };
  }

  const whatsappPhone = content.footer.phone
    ? '91' + content.footer.phone
    : content.hero.whatsappPhone;

  const callPhone = content.footer.callPhone || content.footer.phone || '9820496991';

  return (
    <>
      <Navbar whatsappPhone={whatsappPhone} />
      <main>
        <HeroSection data={content.hero} whatsappPhone={whatsappPhone} />
        <IntroSection data={content.intro} />
        <EcosystemSection data={content.ecosystem} whatsappPhone={whatsappPhone} />
        <WhoThisIsForSection data={content.whoThisIsFor} whatsappPhone={whatsappPhone} />
        <AboutLeaderSection data={content.aboutLeader} />
        <ContactSection whatsappPhone={whatsappPhone} callPhone={callPhone} />
        <FinalCTASection data={content.finalCta} whatsappPhone={whatsappPhone} />
        <Footer data={content.footer} />
      </main>
      <WhatsAppSticky phone={whatsappPhone} />
    </>
  );
}
