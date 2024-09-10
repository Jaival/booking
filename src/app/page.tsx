import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="flex items-center flex-col justify-center gap-4">
        <h1 className="text-4xl font-bold">Streamline Your Schedule with Seamless Appointment Booking</h1>
        <p className="text-lg">
        Effortless Management, Anytime, Anywhere
        </p>
        <Button className="text-xl" variant={"default"}>Get Started</Button>
      </div> */}
      <HeroSection/>
    </main>
  );
}
