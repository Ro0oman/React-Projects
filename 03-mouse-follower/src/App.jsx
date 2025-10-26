import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //Pointer Move
  useEffect(() => {
    console.log("Effecto", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("Handle Move", clientX, clientY);
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("mousemove", handleMove);
    }

    return () => {
      //Remove Effect 
      window.removeEventListener("mousemove", handleMove);
      setPosition({ x: 0, y: 0 });
    };
  }, [enabled]);


  //Change Body ClassName
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled)

    return()=>{
      document.body.classList.remove("no-cursor")
    }
    
  },[enabled])
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          display: enabled ? " " : "none",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <h3>Mouse Follower</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Disable " : "Enable "}
        Pointer Follow
      </button>
    </>
  );
};

function App() {

  return (
    <main>
     <FollowMouse />
    </main>
  );
}

export default App;
