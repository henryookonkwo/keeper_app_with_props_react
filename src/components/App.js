import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
console.log(notes);

function App() {
  return (
    <div>
      <Header />
      {/* <Note /> */}
      {notes.map((NodeItem) => (
        <Note
          key={NodeItem.key}
          title={NodeItem.title}
          content={NodeItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
