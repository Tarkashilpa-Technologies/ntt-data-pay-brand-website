import React, { useEffect, useState } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import { apisDataApi, makeAnyMethodAPICall } from "./services/services";
import AjrmJsonEditor from "react-json-editor-ajrm";
import { NO_DATA_FOUND } from "../utils/messages";
import { generateExampleFromSchema } from "../utils/apiUtils";
import axios from "axios";
import {
  PRODUCTION_ATOM_TECH_URL,
  UAT_ATOM_TECH_URL,
} from "./config/APIConfig";
import { TRY_IT_OUT_ENDOINT } from "./config/APIEndpoints";
const TryItOutApiScreen = () => {
  // hardcoded Variables
  const envList = [
    { label: "UAT", value: "UAT" },
    {
      label: "PRODUCTION",
      value: "PROD",
    },
  ];
  // State Declarations
  const [apisData, setApisData] = useState([]);
  const [selectedEnv, setSelectedEnv] = useState({
    label: "UAT",
    value: "UAT",
  });
  const [selectedAPI, setSelectedAPI] = useState({
    label: "Select...",
    value: "",
  });
  const initialFormData = {
    merchId: 317159,
    encKey: "A4476C2062FFA58980DC8F79EB6A799E",
    saltKey: "75AEF0FA1B94B3C10D4F5B268F757F11",
    decKey: "75AEF0FA1B94B3C10D4F5B268F757F11",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [selectedFunction, setSelectedFunction] = useState();
  const [refresh, setRefresh] = useState(false);
  const [functionList, setFunctionList] = useState();
  const [json, setJson] = useState();
  const [responseJSON, setResponseJSON] = useState();
  const [selectedFunctionResetData, setSelectedFunctionResetData] = useState(
    {}
  );

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
        setSelectedFunctionResetData(
          generateExampleFromSchema(schemaData?.properties)
        );
      }
    });
  }

  async function handleSendRequestClick(e) {
    e.preventDefault();
    try {
      const res = await axios.post(TRY_IT_OUT_ENDOINT, {
        jsonData: json,
        method: selectedFunction?.method,
        host:
          selectedEnv?.value === "UAT"
            ? UAT_ATOM_TECH_URL
            : PRODUCTION_ATOM_TECH_URL,
        endpoint: selectedFunction?.api,
        merchId: formData?.merchId,
        encKey: formData?.encKey,
        decKey: formData?.decKey,
      });
      console.log(res);
      setResponseJSON(JSON.parse(res?.data?.data));
    } catch (error) {
      console.error("Error:", error);
    }
  }
  function handleReset(e) {
    e.preventDefault(); // Prevent the default form submission
    setJson(selectedFunctionResetData);
    setResponseJSON();
  }

  async function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Api Calls

  const apisDataApiCall = () => {
    apisDataApi()
      .then((res) => {
        setApisData(res?.data?.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  //Use Effects Function
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
  useEffect(() => {
    setRefresh(!refresh);
  }, [json]);

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
                  style={{ width: 250 }}
                >
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-white text-black"
                  >
                    <p className="text-truncate p-0 m-0">
                      {selectedEnv?.label ? selectedEnv?.label : "Select..."}
                    </p>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100 rounded-0 mt-0 max-h-300 overflow-auto">
                    {envList && envList?.length > 0 ? (
                      envList?.map((item, index) => {
                        return (
                          <Dropdown.Item
                            onClick={() => {
                              setSelectedEnv(item);
                              setSelectedFunction();
                              setSelectedAPI();
                              setJson();
                              setResponseJSON();
                              setFormData(initialFormData);
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

            <div className="flex-1 ">
              <label>API</label>
              <div>
                <Dropdown
                  size="full"
                  className="bg-primary"
                  style={{ width: 250 }}
                >
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className=" w-100 rounded-0  text-start d-flex justify-content-between align-items-center bg-white text-black"
                  >
                    <p className="text-truncate p-0 m-0">
                      {selectedAPI?.attributes?.Title
                        ? selectedAPI?.attributes?.Title
                        : "Select..."}
                    </p>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100 rounded-0 mt-0 max-h-300 overflow-auto">
                    {apisData && apisData?.length > 0 ? (
                      apisData?.map((item, index) => {
                        return (
                          <Dropdown.Item
                            className="me-4"
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
                  style={{ width: 250 }}
                >
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-white text-black"
                  >
                    <p className="text-truncate p-0 m-0">
                      {selectedFunction?.summary
                        ? selectedFunction?.summary
                        : "Select..."}
                    </p>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className={`w-100 rounded-0 mt-0 max-h-300 overflow-auto`}
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
          <Form onSubmit={handleSendRequestClick}>
            <div className="container_1300">
              <div className="d-flex flex-md-row flex-column w-100 h-100 pt-4 gap-4 px-2 ">
                <div className="w-lg-50 w-100"></div>
                <div className="w-lg-50 w-100"></div>
              </div>
            </div>

            {/* divider section start here */}
            <div className="container_1300">
              <div className="d-flex flex-md-row flex-column w-100 h-100 pt-4 px-3">
                <div className="w-lg-50 w-100 ">
                  <Row className="gap-1 gap-lg-0">
                    <Col sm={12} md={12} lg={6}>
                      <Form.Group>
                        <Form.Label className="my-1">Merchant ID</Form.Label>
                        <Form.Control
                          name="merchId"
                          type="number"
                          placeholder="Enter Merchant ID"
                          required
                          value={formData?.merchId}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Group>
                        <Form.Label className="my-1">Encryption Key</Form.Label>
                        <Form.Control
                          disabled={selectedEnv?.value === "UAT"}
                          name="encKey"
                          type="text"
                          placeholder="Enter Encryption Key"
                          required
                          value={formData?.encKey}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="gap-1 gap-lg-0 mt-1">
                    <Col sm={12} md={12} lg={6}>
                      <Form.Group>
                        <Form.Label className="my-1">Salt</Form.Label>
                        <Form.Control
                          disabled={selectedEnv?.value === "UAT"}
                          name="saltKey"
                          required
                          type="text"
                          placeholder="Enter Salt Key"
                          value={formData?.saltKey}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Group>
                        <Form.Label className="my-1">Decryption Key</Form.Label>
                        <Form.Control
                          disabled={selectedEnv?.value === "UAT"}
                          name="decKey"
                          required
                          type="text"
                          placeholder="Enter Decryption Key"
                          value={formData?.decKey}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="py-2">
                    <div className="pb-2">Request</div>
                    <div className="text-white d-flex flex-column justify-content-center  ">
                      <AjrmJsonEditor
                        width="100%"
                        height="320px"
                        placeholder={json} // Default Value
                        onChange={(newJSON) => {
                          setJson(newJSON?.jsObject);
                        }}
                        onKeyPressUpdate={true} // Do you want Auto Format??
                        waitAfterKeyPress={2000} // Auto format timing
                      />
                    </div>
                    <div className="pt-3">
                      <div className="d-flex justify-content-end gap-3">
                        <button
                          className="bg-black p-1 px-4 text-white"
                          onClick={handleReset}
                          type="buttom"
                        >
                          Reset
                        </button>
                        <button
                          disabled={!selectedAPI && !selectedFunction}
                          type="submit"
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
                          placeholder={responseJSON} // Default Value
                          viewOnly={true} // Do you want to View Only?
                          locale={`react-json-editor-ajrm/locale/en`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="d-inline-flex gap-1">
                    <a
                      className="btn btn-primary"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Endpoint Documentation
                      <img src="/images/down-arrow.svg" color="white" />
                    </a>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="w-lg-50 w-100 ps-md-3">
                  <div>
                    <div className="h2 fw-bold">Dummy Data</div>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default TryItOutApiScreen;
