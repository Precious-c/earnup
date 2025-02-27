import { BottomNavbar } from "@/components/BottomNavbar/BottomNavbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen pb-16">
        {children}
        <BottomNavbar />
      </body>
    </html>
  );
}
