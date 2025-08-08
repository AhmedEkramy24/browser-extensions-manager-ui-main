import { useContext } from "react";
import { ExtentionsContext } from "../../Context/ExtentionsContext";
import Card from "../Card/Card";

export default function All() {
  const { extentions } = useContext(ExtentionsContext);

  return (
    <>
      <div className="container">
        {extentions.length > 0 ? (
          <div className="extentions flex flex-wrap pb-10">
            {extentions.map((ext, index) => (
              <div className="lg:w-1/3 md:w-1/2 p-1.5">
                <Card
                  key={index}
                  logo={ext.logo}
                  name={ext.name}
                  isActive={ext.isActive}
                  description={ext.description}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No extensions found.</p>
        )}
      </div>
    </>
  );
}
