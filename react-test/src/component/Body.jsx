import { useRef, useState } from "react";

function Body(){
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if(text.length < 5) {
      textRef.current.focus();
  } else {
    alert(text);
    setText("");
  } 
};

  return(
    <>
      <input ref={textRef} value={text} onChange={handleOnchange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </>
  );
};
export { Body };
