import AppStore from "../../Assets/Icons/App Store.png";
import GooglePlay from "../../Assets/Icons/Google Play.png";
import Makarandalogo from "../../Assets/Icons/Makaranda.lk.png";

function Footer() {
  return (
    <div className="border-t-2 border-primary mt-20">
      <div className="hidden md:flex md:flex-row container mx-auto border-b-2 border-primary  justify-between pb-3 w-2/3">
        <div className="flex flex-col m-3">
          <div>
            <h1 className="font-Lato text-secondaryText font-semibold mb-2">
              Download App
            </h1>
            <a href="/xxx">
              <img src={AppStore} alt="appstore" className="w-32" />
            </a>
            <a href="/xxx">
              <img src={GooglePlay} alt="googlestore" className="w-32 mt-2" />
            </a>
          </div>
          <div>
            <h1 className="font-Lato text-secondaryText font-semibold mt-2 mb-1">
              Countries
            </h1>
            <a href="/xxx" className="font-Lato text-primary">
              Sri Lanka
            </a>
          </div>
        </div>
        <div className="flex flex-col m-3">
          <h1 className="font-Lato text-secondaryText font-semibold mb-2">
            More from Makaranda
          </h1>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Sell Fast
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Memberships
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Banners ads
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Ad promotions
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Staffing solution
          </a>
        </div>
        <div className="flex flex-col m-3">
          <h1 className="font-Lato text-secondaryText font-semibold mb-2">
            More from Makaranda
          </h1>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            FAQ
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Stay Safty
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col m-3">
          <h1 className="font-Lato text-secondaryText font-semibold mb-2">
            More from Makaranda
          </h1>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            About Us
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Career
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Privacy Policy
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Ad promotions
          </a>
          <a href="/xxx" className="font-Lato text-primary mt-1">
            Sitemap
          </a>
        </div>
      </div>
      <div className="container mx-auto flex flex-row justify-between mt-4 mb-5 md:mb-5 items-center w-2/3">
        <p className="max-w-xs font-Lato text-primaryText leading-tight tracking-wide ml-2">
          Copyright MIT | UOK
        </p>
        <div className="flex flex-row items-center">
          <img src={Makarandalogo} alt="makaranda.lk" className="w-6 mr-3" />
          <p className="max-w-xs font-Lato text-primaryText leading-tight tracking-wide mr-2">
            Makaranda.lk
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
