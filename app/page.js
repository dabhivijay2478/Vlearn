'use client'
import Header from "./LandingPage/Header";
import Hero1 from "./LandingPage/Hero1";
import Hero2 from "./LandingPage/Hero2";
import Hero3 from "./LandingPage/Hero3";
import GetStarted from "./LandingPage/GetStarted";

export default function LandingPage() {

    return (
        <>
            <Header />
            <main>
                <div>
                    <GetStarted />
                </div>
                <div>
                    <Hero1 />
                </div>
                <div>
                    <Hero2 />
                </div>
                <div>
                    <Hero3 />
                </div>
            </main>
        </>
    )
}




