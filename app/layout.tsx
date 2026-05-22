import type { Metadata } from 'next';
import { Bricolage_Grotesque, Rubik, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import LightRays from '../components/LightRays';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevEvents',
  description: "The Hub For Every Dev Event You mustn't miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'min-h-screen',
        'antialiased',
        bricolage.variable,
        rubik.variable,
        'font-sans',
        geist.variable
      )}
    >
      <body>
        <div className=" absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={0.01}
            saturation={0.01}
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
