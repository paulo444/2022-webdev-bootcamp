import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function contentHandler(event) {
    setContent(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={titleHandler}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={contentHandler}
          value={content}
        />
        <button onClick={(e) => props.addNote(e, title, content)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
