import React, { useState } from "react";

const desc =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

  const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
      <div className="border border-black p-2 m-2">
        <h3 className="font-bold text-xl">{title}</h3>
        {isVisible ? (
          <button
            onClick={() => setIsVisible(false)}
            className="cursor-pointer underline"
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => setIsVisible(true)}
            className="cursor-pointer underline"
          >
            Show
          </button>
        )}
  
        {isVisible && <p>{description}</p>}
      </div>
    );
  };

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <>
      <Section
        title="About"
        description={desc}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />

      <Section
        title="Teams"
        description={desc}
        isVisible={visibleSection === "teams"}
        setIsVisible={() => setVisibleSection("teams")}
      />
    </>
  );
};

export default Instamart;
