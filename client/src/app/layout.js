import localFont from "next/font/local";
import "./globals.css";
import Providers from "./components/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
    title: "BMO",
    description: "REDEPHARMA BMO - YoYolops",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" data-theme="pastel">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased  overflow-hidden`}
            >
                <div className="video-background">
                    <video autoPlay muted loop>
                        <source src="/grav.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="bmo_content">
                        <Providers>
                            {children}
                        </Providers>
                    </div>
                </div>
            </body>
        </html>
    );
}
