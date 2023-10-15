import "./globals.css";
import "../functions_tools/global_functions";
import { Suspense } from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import menus from "./menu_options.json";
import ContentHeader from "@/components/content_header/content_header";
import Loading from "./loading";
import { BlackOpsOne, Inter, Permanent_Marker } from "next/font/google";

const fontStyle = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Animax",
 description:
  "Esta pagina te da descripcion de los animes mas conocidos del mundo",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <head>
    <link
     rel="stylesheet"
     href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
    />
   </head>
   <body className={fontStyle.className}>
    <div className={styles.grid}>
     <header className={styles.header}>
      <ContentHeader navigationMenus={menus} />
     </header>
     <main className={styles.main}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
     </main>
     <fooder className={styles.fooder}>
      <label>Animax web side ®</label>
     </fooder>
    </div>
   </body>
  </html>
 );
}
