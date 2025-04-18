import localFont from "next/font/local";
import '../app/styles/global.css'
import '../app/styles/normalize.css'

const coreSansC = localFont({
  variable: "--font-core-sans-c",
  src: [
    {
      path: "../../public/fonts/CoreSansC-25ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/CoreSansC-65Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CoreSansC-35Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Commit Identity",
  description: "Сервис авторизации",
  icons: {
    icon: '/favicon/favicon.ico',    
    shortcut: '/favicon/favicon-96x96.png',  
    apple: '/favicon/apple-touch-icon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={coreSansC.variable}>{children}</body>
    </html>
  );
}
