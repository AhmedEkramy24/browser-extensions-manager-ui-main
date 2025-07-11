import { useContext } from "react";
import { ExtentionsContext } from "../../Context/ExtentionsContext";

export default function All() {
  const { extentions } = useContext(ExtentionsContext);
  console.log(extentions);

  return (
    <>
      <div className="container">
        <div className="extention">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}
