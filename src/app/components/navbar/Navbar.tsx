import DesktopNavbar from "./DesktopNavbar";
import MobileFooter from "./MobileFooter";

const Navbar = () => {
  return (
    <div className="h-full">
      <DesktopNavbar />
      <MobileFooter />
    </div>
  );
};

export default Navbar;
