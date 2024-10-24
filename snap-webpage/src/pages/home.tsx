import smallImage from "../assets/image-hero-mobile.png";
import largeImage from "../assets/image-hero-desktop.png";
import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";

function Home() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <div>
          <img src={smallImage} alt="Small Image" className="block sm:hidden" />
          <img
            src={largeImage}
            alt="Large Image"
            className="hidden sm:block"
          ></img>
        </div>
        <div className=" text-center md:text-left py-8">
          <h1 className="text-4xl font-bold">Make Remote work</h1>
          <div className="text-base font-medium py-4">
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <div>
            <button className="bg-black font-semibold text-white px-4 py-2 rounded-xl border-2 text-center">
              Learn more
            </button>
          </div>
          <div className=" flex gap-4 pt-10 justify-center">
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
