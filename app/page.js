'use client'
import Header from "./(public)/LandingPage/Header";
import Hero1 from "./(public)/LandingPage/Hero1";
import Hero2 from "./(public)/LandingPage/Hero2";
import Hero3 from "./(public)/LandingPage/Hero3";
import GetStarted from "./(public)/LandingPage/GetStarted";

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




