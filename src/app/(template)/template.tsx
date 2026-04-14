import Footer from "@/components/navigation/footer";
import Navigation from "@/components/navigation/navigation";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <div className="pt-16 *:min-h-[calc(100dvh-115px)]">{children}</div>
      <Footer />
    </>
  );
}
