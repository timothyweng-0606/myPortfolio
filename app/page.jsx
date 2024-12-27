import Head from 'next/head';
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">MS in Computer Science / Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Timothy Weng</span>
            </h1>
              <p className="max-w-[600px] mb-9 text-white/80">
              Transition from a marketing background into the tech world !
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent text-base rounded-full flex justify-center
                    items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home