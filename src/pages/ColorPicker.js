import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const ColorPicker = () => {
  const changePenColor = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };

  return (
    <div className="m-2 md:m-10 p-2 bg-white dark:bg-main-dark-bg rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-gray-400">
              Inline Pallete
            </p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              inline={true}
              modeSwitcher={false}
              showButtons={false}
              change={changePenColor}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-gray-400">
              Inline Picker
            </p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              inline={true}
              modeSwitcher={false}
              showButtons={false}
              change={changePenColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
