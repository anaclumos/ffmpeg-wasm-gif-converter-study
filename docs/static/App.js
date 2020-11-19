import React, {useState, useEffect} from "../web_modules/react.js";
import "./App.css.proxy.js";
import {createFFmpeg, fetchFile} from "../web_modules/@ffmpeg/ffmpeg.js";
const ffmpeg2 = createFFmpeg({log: true});
function App2() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();
  const load = async () => {
    await ffmpeg2.load();
    setReady(true);
  };
  useEffect(() => {
    load();
  }, []);
  const convertToGif = async () => {
    ffmpeg2.FS("writeFile", "test.mp4", await fetchFile(video));
    await ffmpeg2.run("-i", "test.mp4", "-t", "2.5", "-ss", "2.0", "-f", "gif", "out.gif");
    const data = ffmpeg2.FS("readFile", "out.gif");
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "image/gif"}));
    setGif(url);
  };
  return ready ? /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, video && /* @__PURE__ */ React.createElement("video", {
    controls: true,
    width: "250",
    src: URL.createObjectURL(video)
  }), /* @__PURE__ */ React.createElement("input", {
    type: "file",
    onChange: (e) => setVideo(e.target.files?.item(0))
  }), /* @__PURE__ */ React.createElement("h3", null, "Result"), /* @__PURE__ */ React.createElement("button", {
    onClick: convertToGif
  }, "Convert"), gif && /* @__PURE__ */ React.createElement("img", {
    src: gif,
    width: "250"
  })) : /* @__PURE__ */ React.createElement("p", null, "Loading...");
}
export default App2;
