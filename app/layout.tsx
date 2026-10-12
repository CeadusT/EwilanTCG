import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Gwendalavir's Battle · Deckbuilder V1.7",description:"Créez, organisez et exportez vos decks Gwendalavir's Battle.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
