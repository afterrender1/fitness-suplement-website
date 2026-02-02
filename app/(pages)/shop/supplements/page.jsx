"use client";

import Navbar from '@/app/components/Navbar';
import { AuthorityHero } from '@/app/components/AuthorityHero';
import ShopComponent from '@/app/components/ShopComponent';

const ShopPage = () => {
    return (
        <div className="relative  bg-black min-h-screen">
            <Navbar />

            {/* STICKY WRAPPER 
                h-[100vh] ensures the hero stays visible for the full viewport.
                z-0 keeps it behind the upcoming content.
            */}
            <div className="h-135 md:min-h-screen md:sticky top-0 overflow-hidden z-0">
                <AuthorityHero />
            </div>

            {/* OVERLAY CONTENT 
                relative z-10 ensures this layer is on top.
                The -mt-20 pull-up creates a seamless transition over the Hero's bottom edge.
                rounded-t-[40px] maintains the premium aesthetic.
            */}
            <div className="
  relative z-10 bg-[#FAFAFA]
  rounded-t-[40px] md:rounded-t-[80px]
  shadow-[0_-30px_60px_rgba(0,0,0,0.4)]
  -mt-20 sm:-mt-20
">

                <ShopComponent />
            </div>
        </div>
    );
};

export default ShopPage;