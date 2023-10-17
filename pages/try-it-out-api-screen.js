import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { apisDataApi, makeAnyMethodAPICall } from "./services/services";
import dynamic from "next/dynamic";
import AjrmJsonEditor from "react-json-editor-ajrm";
import { NO_DATA_FOUND } from "../utils/messages";
import { generateExampleFromSchema } from "../utils/apiUtils";
import axios from "axios";
import {
  PRODUCTION_ATOM_TECH_URL,
  UAT_ATOM_TECH_URL,
} from "./config/APIConfig";
const TryItOutApiScreen = () => {
  const [apisData, setApisData] = useState([]);
  const envList = [{ label: "UAT", value: "UAT" }];
  const [selectedEnv, setSelectedEnv] = useState({
    label: "UAT",
    value: "UAT",
  });
  const [selectedAPI, setSelectedAPI] = useState({
    label: "Select...",
    value: "",
  });
  const [selectedFunction, setSelectedFunction] = useState();
  const [functionList, setFunctionList] = useState();
  const [json, setJson] = useState();
  const [responseJSON, setResponseJSON] = useState();
  const apisDataApiCall = () => {
    apisDataApi()
      .then((res) => {
        setApisData(res?.data?.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  //Handler Function
  function handleFunctionItemClick(item) {
    setSelectedFunction(item);
    Object.entries(
      selectedAPI?.attributes?.Defination?.components?.schemas || {}
    ).forEach(([searchString, schemaData]) => {
      const url =
        item?.requestBody?.content?.["application/json"]?.schema?.$ref;
      if (url?.includes(searchString)) {
        setJson(generateExampleFromSchema(schemaData?.properties));
      }
    });
  }
  //UseEffects Function
  useEffect(() => {
    apisDataApiCall();
  }, []);

  useEffect(() => {
    const nestedObject = selectedAPI?.attributes?.Defination?.paths;
    if (nestedObject) {
      let ObjEnt1 = Object.entries(nestedObject);
      let tempArr = [];
      ObjEnt1.map((data) => {
        Object?.entries(data[1]).map((item) => {
          tempArr?.push({
            method: item[0],
            api: data[0],
            ...item[1],
          });
        });
      });
      setFunctionList(tempArr);
    }
  }, [selectedAPI]);
  async function handleSendRequestClick() {
    try {
      const res = await axios.post("/api/try-it-out", {
        jsonData: `${JSON.stringify(json)}`,
        method: selectedFunction?.method,
        host:
          selectedEnv?.value === "UAT"
            ? UAT_ATOM_TECH_URL
            : PRODUCTION_ATOM_TECH_URL,
        endpoint: selectedFunction?.api,
      });
      setResponseJSON(JSON.parse(res?.data?.data));
      console.log(JSON.parse(res?.data?.data));
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="api-reference-page bg-white">
      <div style={{ minHeight: 600 }} className="bg-white">
        <div className="w-100 pt-4 h-100">
          <div className="d-flex flex-wrap justify-content-center gap-4 w-100">
            <div className="flex-1">
              <label>Environment</label>
              <div>
                <Dropdown
                  size="full"
                  className="bg-primary"
                  style={{ minWidth: 250 }}
                >
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-white text-black"
                  >
                    {selectedEnv?.label ? selectedEnv?.label : "Select..."}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100 rounded-0 mt-0">
                    {envList && envList?.length > 0 ? (
                      envList?.map((item, index) => {
                        return (
                          <Dropdown.Item
                            onClick={() => {
                              setSelectedEnv(item);
                            }}
                          >
                            {item?.label}
                          </Dropdown.Item>
                        );
                      })
                    ) : (
                      <center>{NO_DATA_FOUND}</center>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="flex-1">
              <label>API</label>
              <div>
                <Dropdown
                  size="full"
                  className="bg-primary"
                  style={{ minWidth: 250 }}
                >
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-white text-black"
                  >
                    {selectedAPI?.attributes?.Title
                      ? selectedAPI?.attributes?.Title
                      : "Select..."}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100 rounded-0 mt-0">
                    {apisData && apisData?.length > 0 ? (
                      apisData?.map((item, index) => {
                        return (
                          <Dropdown.Item
                            onClick={() => {
                              setSelectedAPI(item);
                              setSelectedFunction();
                            }}
                          >
                            {item?.attributes?.Title}
                          </Dropdown.Item>
                        );
                      })
                    ) : (
                      <center>{NO_DATA_FOUND}</center>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="flex-1">
              <label>Function</label>
              <div>
                <Dropdown
                  size="full"
                  className="bg-primary"
                  style={{ minWidth: 250 }}
                >
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-white text-black"
                  >
                    {selectedFunction?.summary
                      ? selectedFunction?.summary
                      : "Select..."}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className={`w-100 rounded-0 mt-0 ${
                      functionList?.length > 1 ? "h-200 overflow-auto" : ""
                    }`}
                  >
                    {functionList ? (
                      functionList.map((item, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => handleFunctionItemClick(item)}
                        >
                          {item.summary}
                        </Dropdown.Item>
                      ))
                    ) : (
                      <center>{NO_DATA_FOUND}</center>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          {/* divider section start here */}
          <div className="container_1300">
            <div className="d-flex flex-md-row flex-column w-100 h-100 pt-4">
              <div className="w-lg-50 w-100">
                <div className="p-2">
                  <div className="pb-2">Request</div>
                  <div className="text-white d-flex flex-column justify-content-center  ">
                    <AjrmJsonEditor
                      width="100%"
                      height="320px"
                      placeholder={json}
                      onChange={(newJSON) => {
                        console.log(newJSON);
                        setJson(newJSON?.jsObject);
                      }}
                    />
                  </div>
                  <div className="pt-3">
                    <div className="d-flex justify-content-end gap-3">
                      <button className="bg-black p-1 px-4 text-white">
                        Reset
                      </button>
                      <button
                        onClick={handleSendRequestClick}
                        className="bg-black p-1 px-4 text-white"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="pb-2">
                      <label> Response</label>
                    </div>
                    <div className="text-white d-flex flex-column justify-content-center">
                      <AjrmJsonEditor
                        width="100%"
                        height="320px"
                        placeholder={responseJSON}
                        viewOnly={true}
                        locale={`react-json-editor-ajrm/locale/en`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-lg-50 w-100 p-3">
                <div>
                  <div className="h2 fw-bold">Dummy Data</div>
                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TryItOutApiScreen;
