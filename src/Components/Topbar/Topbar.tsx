import logo from "../../assets/images/logo.svg";
import dark from "../../assets/images/icon-moon.svg";
import light from "../../assets/images/icon-sun.svg";

export default function Topbar() {
  return (
    <>
      <div className="mb-5 p-2">
        <div className="container flex justify-between bg-[#fff] rounded-lg p-2 items-center shadow-md">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="theme cursor-pointer">
            <div className="size-10 bg-[#ecedec] flex justify-center items-center rounded-lg">
              <img src={dark} alt="theme" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
