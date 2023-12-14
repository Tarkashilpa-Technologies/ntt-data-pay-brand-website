import React, { useEffect, useState } from "react";
import AjrmJsonEditor from "react-json-editor-ajrm";

const JsonEditor = ({
  json,
  width,
  height,
  viewOnly,
  onChange,
  waitAfterKeyPress,
  onKeyPressUpdate,
}) => {
  const [jsonData, setJsonData] = useState();
  useEffect(() => {
    if (json) {
      setJsonData(json);
    }
  }, [json]);

  return (
    <AjrmJsonEditor
      width={width ? width : '100%'}
      height={height ? height : '100%'}
      placeholder={jsonData} // Default Value
      viewOnly={viewOnly} // Do you want to View Only?
      onChange={onChange}
      waitAfterKeyPress={waitAfterKeyPress}
      onKeyPressUpdate={onKeyPressUpdate}
      colors={{
        string: '#2EDB00',
        number: '#FC9CC6',
        colon: 'FF00D8',
        keys: '#ea00be',
      }}
      style={{
        errorMessage: {
          color: '#FF5349',
        },
        warningBox: {
          color: '#f93e3e',
        },
      }}
    />
  )
};

export default JsonEditor;
