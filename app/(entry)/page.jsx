import { HeroSection,WhyUsSection } from "@/components/Home";
import Image from "next/image";

export default function Home() {
    return (
        <div className="container">
            <HeroSection/>
            <WhyUsSection/>
        </div>
    )
}