import { useEffect, useState } from "react";

function BackendMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" color-green fontWeight-bold marginTop-1rem" >
      {message || "...جاري التحميل"}
    </div>
  );
}

export default BackendMessage;
