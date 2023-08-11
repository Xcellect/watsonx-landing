import "./App.css";
import Plx from "react-plx";

export default function App() {
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 90,
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="background.png" alt="background" />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 240,
          width: "100%"
        }}
      >
        
        {/* create a text box saying "Light at the end of forest of information" using sans font styling*/}
        <p style={{ color: "black", fontSize: "1.5vw", textAlign: "center", fontFamily: "sans-serif" }}>
          Light at the End of <span style={{ color: "#0E67FE" }}>Forest of Information</span>
        </p>
        
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "30vw"
          }}
          src="/text-img.png"
          alt="Goonies"
        />
        <p style={{ color: "black", fontSize: "2vw", textAlign: "center", fontFamily: "sans-serif"}}>
          Government Assistant
        </p>
      </Plx>
      
      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>
    </div>
  );
}