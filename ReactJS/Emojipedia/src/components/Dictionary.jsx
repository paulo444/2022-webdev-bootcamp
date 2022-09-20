import React from "react";
import Term from "./Term";
import Emojipedia from "../emojipedia";

function Dictionary() {
  return <dl className="dictionary">{Emojipedia.map(currentTerm => {
    <Term
      emoji={currentTerm.emoji}
      name={currentTerm.name}
      description={currentTerm.meaning}
    />
  })}</dl>;
}

export default Dictionary;
