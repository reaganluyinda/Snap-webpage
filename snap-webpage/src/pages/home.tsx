import smallImage from "../assets/image-hero-mobile.png";
import largeImage from "../assets/image-hero-desktop.png";
import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";

function Home() {
  return (
    <div className="bg-zinc-50 py-16">
      <div className="container mx-auto grid md:grid-cols-2 md:items-center md:gap-16 lg:px-48">
        <div className="md:order-2 ">
          <img src={smallImage} alt="Small Image" className="block sm:hidden" />
          <img
            src={largeImage}
            alt="Large Image"
            className="hidden sm:block  h-70 w-96"
          ></img>
        </div>
        <div className=" text-center md:text-left py-8 ">
          <h1 className="text-4xl md:text-6xl font-bold leading-20">
            Make Remote work
          </h1>
          <div className="text-base md:text-lg font-medium py-4 md:py-12 leading-7 md:pr-24 text-zinc-500">
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <div>
            <button className="bg-black font-semibold text-white px-4 py-2  rounded-xl border-2 text-center">
              Learn more
            </button>
          </div>
          <div className=" flex gap-4 pt-10 justify-center md:justify-start md:pt-24">
            <img src={databiz} alt="databiz" />
            <img src={audiophile} alt="audiophile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
