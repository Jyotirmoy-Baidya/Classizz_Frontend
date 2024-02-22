import { SignInButton } from "@clerk/clerk-react";

const LandingPage = () => {
    return (
        <div className="h-screen w-screen flex flex-col bg-slate-800">
            <div className="h-24 p-6 border-b-2 hero-nav">
                <div className="w-32 h-12 flex justify-center ms-auto items-center bg-yellow-300 rounded-lg tracking-widest text-lg font-normal shadow-sm signedIn-btn">
                    <SignInButton />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center  justify-between lg:px-32 pt-12 gap-10 lg:gap-36 hero-section">
                <div className="flex flex-col order-2 lg:order-1 gap-10 hero-text-area">
                    <div className="text-2xl text-slate-100 tracking-wider welcome">Welcome To
                        <div className="text-6xl tracking-wider font-semibold website-name">Classizz</div>
                    </div>
                    <div className="w-32 h-12 flex justify-center items-center bg-yellow-300 rounded-lg tracking-widest text-lg font-normal shadow-sm signedIn-btn  ">
                        <SignInButton />
                    </div>
                </div>
                <div className="order-1 flex  hero-img-area">
                    <figure className="w-10/12 mx-auto ">
                        <img src="/image/laptop.jpg" className=" rounded-lg" alt="Classizz" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;
