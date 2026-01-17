import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { useState, useEffect } from "react";

export function App() {
  const [number, setNumber] = useState(100);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:7071");

    socket.onmessage = (event) => {
      setNumber(Number(event.data));
    };

    socket.onerror = () => {
      alert(`WebSocket error: ${socket.error}`);
    };

    return () => socket.close();
  }, []);

  return (
    <div
      style={{
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <h1 style={{ margin: 0 }}>NumberFlow Memory Issue Repro</h1>
      <NumberFlowGroup>
        <NumberFlow
          value={number}
          style={{ fontSize: 48, fontWeight: 700 }}
          transformTiming={{
            duration: 450,
            easing:
              "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)",
          }}
        />
      </NumberFlowGroup>
      <div>
        Steps:
        <ol>
          <li>
            Open the page in a new tab. Open the DevTools in a separate window.
          </li>
          <li>Background the tab for 5-10 minutes.</li>
          <li>
            Observe the JS heap size in DevTools while the tab is backgrounded
          </li>
        </ol>
      </div>
    </div>
  );
}
