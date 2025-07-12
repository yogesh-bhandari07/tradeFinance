import "@/app/globals.css";
import AppLayout from "@/shared/layout/AppLayout";

export const metadata = {
  title: "Trade Treasury Payments",
  description: "A modern scalable app with Next.js 15",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
