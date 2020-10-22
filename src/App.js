import React from "react";
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import "./App.css";

var customTheme = {
  "common.bi.image": "none",
  "common.bisize.width": "0",
  "common.bisize.height": "0",
  "common.backgroundImage": "dope",
  "common.backgroundColor": "#ffe7e6",
  "common.border": "0px",

  // header
  "header.backgroundImage": "none",
  "header.backgroundColor": "transparent",
  "header.border": "0px",

  // load button
  "loadButton.backgroundColor": "#fff",
  "loadButton.border": "1px solid #ddd",
  "loadButton.color": "#222",
  "loadButton.fontFamily": "NotoSans, sans-serif",
  "loadButton.fontSize": "12px",

  // download button
  "downloadButton.backgroundColor": "#222",
  "downloadButton.border": "1px solid #222",
  "downloadButton.color": "#fff",
  "downloadButton.fontFamily": "NotoSans, sans-serif",
  "downloadButton.fontSize": "12px",

  // icons default
  "menu.normalIcon.color": "#8a8a8a",
  "menu.activeIcon.color": "#555555",
  "menu.disabledIcon.color": "#434343",
  "menu.hoverIcon.color": "#ff87b0",
  "submenu.normalIcon.color": "#8a8a8a",
  "submenu.activeIcon.color": "#ff87b0",

  "menu.iconSize.width": "24px",
  "menu.iconSize.height": "24px",
  "submenu.iconSize.width": "32px",
  "submenu.iconSize.height": "32px",

  // submenu primary color
  "submenu.backgroundColor": "#ffdcdb",
  "submenu.partition.color": "#222",

  // submenu labels
  "submenu.normalLabel.color": "#222",
  "submenu.normalLabel.fontWeight": "lighter",
  "submenu.activeLabel.color": "#222",
  "submenu.activeLabel.fontWeight": "lighter",

  // checkbox style
  "checkbox.border": "1px solid #ff87b0",
  "checkbox.backgroundColor": "#ff87b0",

  // rango style
  "range.pointer.color": "#fff",
  "range.bar.color": "#666",
  "range.subbar.color": "#d1d1d1",

  "range.disabledPointer.color": "#414141",
  "range.disabledBar.color": "#282828",
  "range.disabledSubbar.color": "#414141",

  "range.value.color": "#fff",
  "range.value.fontWeight": "lighter",
  "range.value.fontSize": "11px",
  "range.value.border": "1px solid #353535",
  "range.value.backgroundColor": "#151515",
  "range.title.color": "#fff",
  "range.title.fontWeight": "lighter",

  // colorpicker style
  "colorpicker.button.border": "1px solid #1e1e1e",
  "colorpicker.title.color": "#fff",
};
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
                theme: customTheme,
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
