import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Techorc | Leading Software & IT Solutions Company in India",
  description: "Techorc is a premier software development company in India offering web development, mobile apps, custom software, and digital transformation solutions to drive business growth.",
  keywords: ["Software Development India", "IT Company Coimbatore", "Web Design India", "Custom Software Solutions"],
};

export default function Home() {
  return <HomeClient />;
}
