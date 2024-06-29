import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../../components/Header";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const roboto = Roboto({ weight:'400',subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Calculate your expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={roboto.className}>
        <main className="margin: 30px auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
"> 
        <ToastContainer/>
          <Header/>
          {children}
        </main>
      
        </body>
    </html>
    </ClerkProvider>
  );
}
