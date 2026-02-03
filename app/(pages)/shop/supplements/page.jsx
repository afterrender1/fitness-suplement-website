"use client";

import Navbar from '@/app/components/Navbar';
import { AuthorityHero } from '@/app/components/AuthorityHero';
import ShopComponent from '@/app/components/ShopComponent';
import Footer from '@/app/components/Footer';

const ShopPage = () => {
    return (
        <div className="relative  bg-black min-h-screen">
            <Navbar />


            <div className="h-135 md:min-h-screen md:sticky top-0 overflow-hidden z-0">
                <AuthorityHero />
            </div>

            <div className="
  relative z-10 
  rounded-t-[40px] md:rounded-t-[80px]
  shadow-[0_-30px_60px_rgba(0,0,0,0.4)]
  -mt-20 sm:-mt-20
">

                <ShopComponent />
            </div>
            <Footer />
        </div>
    );
};

export default ShopPage;