import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AiChatbot } from "@/components/ai-chatbot";

const manropeHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nivara Housing Finance | Apna Ghar, Apni Pehchan",
  description:
    "Nivara Housing Finance provides affordable home loans, home construction loans, renovation loans, and loan against property across India.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        manropeHeading.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 pt-[104px] sm:pt-[116px] flex flex-col">
          {children}
        </main>
        <Footer />
        <AiChatbot />
      </body>
    </html>
  );
}
