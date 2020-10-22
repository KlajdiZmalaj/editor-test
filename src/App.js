import React from "react";
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import "./App.css";

class App extends React.Component {
  state = {
    hasImg: "",
    mode: "",
    brush: {
      width: 5,
      color: "blue",
    },
  };
  editorRef = React.createRef();

  componentDidMount() {
    console.log("ca ka ref", this.editorRef?.current?.imageEditorInst);
  }
  setImg = (e) => {
    this.setState({ hasImg: e });
  };
  setDrawing = () => {
    const imageEditor = this.editorRef?.current?.imageEditorInst;
    imageEditor.startDrawingMode("FREE_DRAWING");
    imageEditor.setBrush({
      width: this.state.brush.width,
      color: this.state.brush.color,
    });
  };

  render() {
    const { mode, hasImg } = this.state;
    return (
      <div className="App" style={{ display: "flex" }}>
        <div style={{ display: "flex", flexFlow: "column", width: "10%" }}>
          <img
            src="https://gradm-api.pcluster.info/api/skin/10/image/d29af18b67a5a2a0f249387dd316e72f.jpeg"
            onClick={(e) => {
              this.setImg(e.target.src);
            }}
            alt=""
          />
          <img
            src="https://gradm-api.pcluster.info/api/skin/10/image/2a75c4b9b02f6020b6b77d2c5cb39a26.jpeg"
            alt=""
            onClick={(e) => {
              this.setImg(e.target.src);
            }}
          />
        </div>
        {""}
        <div className="editor">
          {hasImg && (
            <ImageEditor
              includeUI={{
                loadImage: {
                  path: hasImg,
                  name: "SampleImage",
                },

                uiSize: {
                  width: "1000px",
                  height: "730px",
                },
                menuBarPosition: "right",
              }}
              ref={this.editorRef}
              incl
              cssMaxHeight={500}
              cssMaxWidth={700}
              usageStatistics={true}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
