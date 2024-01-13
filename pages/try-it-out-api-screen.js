import React, { useEffect, useState } from "react";
import { Col, Dropdown, Form, Row, Spinner } from "react-bootstrap";
import { apisDataApi } from "../services/services";
import AjrmJsonEditor from "react-json-editor-ajrm";
import { NO_DATA_FOUND, REQUIRED, SELECT_FUNCTION_MESSAGE } from "../utils/messages";
import { generateExampleFromSchema } from "../utils/apiUtils";
import axios from "axios";
import {
  PRODUCTION_ATOM_TECH_URL,
  UAT_ATOM_TECH_URL,
  TRY_IT_OUT_ENDOINT,
} from "../Messages/Endpoints";
import {
  disableShouldErrorShow,
  enableShouldErrorShow,
  onFormFeildsChange,
} from "../utils/formValidator";
import ApiEndpoint from "../Components/ApiEndpoint";
import { updateSelectedApi } from "../utils/utils";
import JsonEditor from "../Components/JsonEditor";
import HeaderTwo from "../Components/HeaderTwo";
import Loader from "../Components/Loader";
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
  const [apiSpecification, setApiSpecification] = useState();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [loader, setLoader] = useState(false);
  const arrowClass = isCollapsed ? "down" : "up";
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
    merchId: {
      value: null,
      error: "",
      check: [REQUIRED],
      shouldShowError: false,
    },
    encKey: {
      value: "A4476C2062FFA58980DC8F79EB6A799E",
      error: "",
      check: [REQUIRED],
      shouldShowError: false,
    },
    saltKey: {
      value: "75AEF0FA1B94B3C10D4F5B268F757F11",
      error: "",
      check: [REQUIRED],
      shouldShowError: false,
    },
    decKey: {
      value: "75AEF0FA1B94B3C10D4F5B268F757F11",
      error: "",
      check: [REQUIRED],
      shouldShowError: false,
    },
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
  const [copyText,  setCopyText]  = useState(false);
  const[copyTextResponse,setCopyTextResponse] = useState(false);

  const [fullHeight, setFullHeight] = useState(
    typeof window !== 'undefined' && window.innerHeight
  )
  const[showError,setShowError] = useState(false);

  //Handler Function
  function handleFunctionItemClick(item) {
    const promise2 = setResponseJSON({});
    Promise?.all([promise2]).then(() => { 
       setResponseJSON();
    });
    setSelectedFunction(item);
    setShowError(false);
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
    setLoader(true)
    e.preventDefault();
    if(!showError){
    try {
      const res = await axios.post(TRY_IT_OUT_ENDOINT, {
        jsonData: json,
        method: selectedFunction?.method,
        host:
          selectedEnv?.value === "UAT"
            ? UAT_ATOM_TECH_URL
            : PRODUCTION_ATOM_TECH_URL,
        endpoint: selectedFunction?.api,
        merchId: formData?.merchId?.value,
        encKey: formData?.encKey?.value,
        decKey: formData?.decKey?.value,
      });
      setResponseJSON(JSON.parse(res?.data?.data));
    } catch (error) {
      console.error("Error:", error);
    }
  }
    setLoader(false)
  }
  
  function handleReset(e) {
    e.preventDefault(); // Prevent the default form submission
    const promise = setJson({});
    const promise2 = setResponseJSON({});
    Promise?.all([promise,promise2]).then(() => { 
       setJson(selectedFunctionResetData);
       setResponseJSON();
    })
    setShowError(false);
  }

  // Api Calls

  const apisDataApiCall = () => {
    apisDataApi()
      .then((res) => {
        setApisData(res?.data?.data);
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  //Use Effects Function

  useEffect(() => {
    apisDataApiCall();
  }, []);

  useEffect(() => {
    setApiSpecification(updateSelectedApi(selectedAPI, selectedFunction));
  }, [selectedFunction]);

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
    if (!selectedAPI) {
      setFunctionList();
    }
  }, [selectedAPI]);

  useEffect(() => {
    setRefresh(!refresh);
  }, [json, responseJSON]);
  
  return (
    <div className='overflow-hidden w-100 d-flex flex-column justify-content-center' style={{maxHeight: fullHeight-100}}>
      <div className='container overflow-y-scroll'>
      <div style={{ minHeight: 600 }} className="bg-white">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <h2 className="common-ttle ">API  Explorer</h2>
          <h3 className="text-primary  pb-3">Test our APIs right here.</h3>
          <p className="common-desc text-center api-explorer-page-size">
            {SELECT_FUNCTION_MESSAGE}
          </p>
        </div>
        <div className="w-100 pt-4 h-100">
          <div className="d-flex flex-wrap justify-content-center gap-4 w-100">
            {/* <div className="flex-1">
              <label>Environment</label>
              <div className="border border-primary ps-2 env-style">UAT</div>
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
                      {selectedEnv?.label ? selectedEnv?.label : 'Select...'}
                    </p>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100 rounded-0 mt-0 max-h-300 overflow-auto">
                    {envList && envList?.length > 0 ? (
                      envList?.map((item, index) => {
                        return (
                          <Dropdown.Item
                            onClick={() => {
                              setSelectedEnv(item)
                              setSelectedFunction()
                              setSelectedAPI()
                              setJson()
                              setResponseJSON()
                              setFormData(initialFormData)
                            }}
                          >
                            {item?.label}
                          </Dropdown.Item>
                        )
                      })
                    ) : (
                      <center>{NO_DATA_FOUND}</center>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div> */}

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
                        : 'Select...'}
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
                              setJson(null);
                              setCopyText(false);
                              setShowError(false);
                              const promise2 = setResponseJSON({});
                              Promise?.all([promise2]).then(() => { 
                                 setResponseJSON();
                              });
                            }}
                          >
                            {item?.attributes?.Title}
                          </Dropdown.Item>
                        )
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
                        : 'Select...'}
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
          <div>
         
          <Form onSubmit={handleSendRequestClick}>
            <div className="container_1300">
              <div className="d-flex flex-md-row flex-column w-100 h-100 pt-4 gap-4 px-2 ">
                <div className="w-lg-50 w-100"></div>
                <div className="w-lg-50 w-100"></div>
              </div>
            </div>
            
            {/* divider section start here */}
            <div className="container_1300">
              <div className="d-flex flex-md-row flex-column justify-content-center w-100 h-100 pt-4 px-3">
                <div className="w-100 overflow-auto api-explorer-page-size">
                  <Row className="gap-1 gap-lg-0">
                    <Col sm={12} md={12} lg={6}>
                      <Form.Group>
                        <Form.Label className="my-1">
                          Merchant ID <span className="text-danger ">*</span>
                        </Form.Label>
                        <Form.Control
                          name="merchId"
                          type="number"
                          placeholder="Enter Merchant ID"
                          required
                          value={formData?.merchId?.value}
                          onBlur={($event) => {
                            enableShouldErrorShow($event, formData, setFormData)
                          }}
                          onFocus={($event) => {
                            disableShouldErrorShow(
                              $event,
                              formData,
                              setFormData
                            )
                          }}
                          className={
                            (formData?.merchId?.error &&
                            formData?.merchId?.shouldShowError
                              ? 'border border-danger'
                              : '') + ' form-control custom-input'
                          }
                          onChange={($event) => {
                            onFormFeildsChange($event, formData, setFormData)
                          }}
                        />
                        {formData.merchId.error &&
                          formData.merchId.shouldShowError && (
                            <div className="text-danger mt-1">
                              {formData.merchId.error}
                            </div>
                          )}
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Group>
                        <Form.Label className="my-1">
                          Encryption Key <span className="text-danger ">*</span>
                        </Form.Label>
                        <Form.Control
                          // disabled={selectedEnv?.value === 'UAT'}
                          name="encKey"
                          type="text"
                          placeholder="Enter Encryption Key"
                          required
                          value={formData?.encKey?.value}
                          onBlur={($event) => {
                            enableShouldErrorShow($event, formData, setFormData)
                          }}
                          onFocus={($event) => {
                            disableShouldErrorShow(
                              $event,
                              formData,
                              setFormData
                            )
                          }}
                          className={
                            (formData?.encKey?.error &&
                            formData?.encKey?.shouldShowError
                              ? 'border border-danger'
                              : '') + ' form-control custom-input'
                          }
                          onChange={($event) => {
                            onFormFeildsChange($event, formData, setFormData)
                          }}
                        />
                        {formData.encKey.error &&
                          formData.encKey.shouldShowError && (
                            <div className="text-danger mt-1">
                              {formData.encKey.error}
                            </div>
                          )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="gap-1 gap-lg-0 mt-1">
                    <Col sm={12} md={12} lg={6}>
                      <Form.Group>
                        <Form.Label className="my-1 d-flex">
                          Salt
                          <span className="text-danger ">*</span>
                        </Form.Label>
                        <Form.Control
                          // disabled={selectedEnv?.value === 'UAT'}
                          name="saltKey"
                          required
                          type="text"
                          placeholder="Enter Salt Key"
                          value={formData?.saltKey?.value}
                          onBlur={($event) => {
                            enableShouldErrorShow($event, formData, setFormData)
                          }}
                          onFocus={($event) => {
                            disableShouldErrorShow(
                              $event,
                              formData,
                              setFormData
                            )
                          }}
                          className={
                            (formData?.saltKey?.error &&
                            formData?.saltKey?.shouldShowError
                              ? 'border border-danger'
                              : '') + ' form-control custom-input'
                          }
                          onChange={($event) => {
                            onFormFeildsChange($event, formData, setFormData)
                          }}
                        />
                        {formData.saltKey.error &&
                          formData.saltKey.shouldShowError && (
                            <div className="text-danger mt-1">
                              {formData.saltKey.error}
                            </div>
                          )}
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Group>
                        <Form.Label className="my-1">
                          Decryption Key <span className="text-danger ">*</span>
                        </Form.Label>
                        <Form.Control
                          // disabled={selectedEnv?.value === 'UAT'}
                          name="decKey"
                          required
                          type="text"
                          placeholder="Enter Decryption Key"
                          value={formData?.decKey?.value}
                          onBlur={($event) => {
                            enableShouldErrorShow($event, formData, setFormData)
                          }}
                          onFocus={($event) => {
                            disableShouldErrorShow(
                              $event,
                              formData,
                              setFormData
                            )
                          }}
                          className={
                            (formData?.decKey?.error &&
                            formData?.decKey?.shouldShowError
                              ? 'border border-danger'
                              : '') + ' form-control custom-input'
                          }
                          onChange={($event) => {
                            onFormFeildsChange($event, formData, setFormData)
                          }}
                        />
                        {formData.decKey.error &&
                          formData.decKey.shouldShowError && (
                            <div className="text-danger mt-1">
                              {formData.decKey.error}
                            </div>
                          )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="py-2 w-100">
                    <div className="pb-2 fw-bold">Request</div>
                    <div className="text-white d-flex flex-column justify-content-center  w-100 w-md-50  position-relative">
                      <JsonEditor
                        width="100%"
                        height="320px"
                        json={json}
                        onChange={(newJSON) => {
                          if(newJSON?.error)
                          {
                            console.log(newJSON?.error,'newJSON?.error')
                            setShowError(true)
                          }
                          setJson(newJSON?.jsObject)
                        }}
                        onKeyPressUpdate={true}
                        waitAfterKeyPress={2000}
                        viewOnly={false}
                      />
                     
                      <div className={`position-absolute bottom-0 end-0 m-3 btn p-1  border-0 cursor-pointer tooltip-btn ${json? 'd-block':'d-none'}`}
                        onClick={(e) =>  {
                          e.preventDefault();
                          navigator.clipboard.writeText(JSON.stringify(json));
                          setCopyText(true);
                        }} 
                        disabled={json ? false: true}
                        > 
                          <span class={`pe-3 ${copyText  ? "tooltiptext" : ''}`} id="myTooltip">{copyText ? 'Copied to Clipboard': 'Copy Text'}</span>
                          <img src="images/paste.png" width={20}/>  
                      </div>
                    
                    </div>
                    <div className="pt-3 me-md-4 me-0">
                      <div className="d-flex justify-content-end gap-3">
                        <button
                          className="d-flex align-items-center justify-content-center bg-dark p-1 px-3 text-white rounded-pill border-0"
                          onClick={handleReset}
                          type="buttom"
                          style={{ minWidth: 100 }}
                        >
                          Reset
                        </button>
                        <button
                          disabled={showError== true ? showError : (!selectedAPI && !selectedFunction)}
                          type="submit"
                          style={{ minWidth: 100 }}
                          className={`bg-primary d-flex align-items-center justify-content-center gap-2 p-1 px-3 text-white rounded-pill border-0 ${!selectedAPI && !selectedFunction ? 'bg-gray' : ''}`}
                        >
                          {loader && (
                            <Spinner
                              animation="border"
                              role="status"
                              style={{ fontSize: 20, height: 20, width: 20 }}
                            />
                          )}
                          Send
                        </button>
                      </div>
                    </div>
                          {json &&  (<>
                      <div className="w-100 overflow-auto">
                      <p className="d-inline-flex gap-1 w-100 pt-4">
                        <a
                          className="btn bg-primary text-white w-100 d-flex justify-content-between"
                          data-bs-toggle="collapse"
                          href="#collapseExample"
                          role="button"
                          aria-expanded={isCollapsed ? 'false' : 'true'}
                          aria-controls="collapseExample"
                          onClick={() => {
                            setIsCollapsed(!isCollapsed)
                          }}
                        >
                          API Documentation
                          <img
                            src={`/images/${arrowClass}-arrow.svg`}
                            alt={`Arrow ${arrowClass}`}
                          />
                        </a>
                      </p>
                      <div
                        className={`collapse ${isCollapsed ? '' : 'show'} mb-4 `}
                        id="collapseExample"
                      >
                        <ApiEndpoint apiData={apiSpecification} />
                        <div className="d-flex justify-content-end">
                          <button
                            type="button"
                            onClick={() => {
                              setIsCollapsed(!isCollapsed)
                            }}
                            className="btn bg-primary rounded-1 text-white px-3 py-1"
                          >
                            Hide
                          </button>
                        </div>
                      </div>
                    </div>
                    </>)}
                    

                    <div className="mt-4">
                      <div className="pb-2 fw-bold">
                        <label> Response</label>
                      </div>
                      <div className="text-white d-flex flex-column justify-content-center  position-relative">
                        <JsonEditor
                          width="100%"
                          height="320px"
                          json={responseJSON}
                          onChange={(newJSON) => {
                            setResponseJSON(newJSON?.jsObject)
                          }}
                          onKeyPressUpdate={true}
                          waitAfterKeyPress={2000}
                          viewOnly={true}
                          setShowError={setShowError}
                        />
                        <div className={`position-absolute bottom-0 end-0 m-3 btn p-1  border-0 cursor-pointer tooltip-btn ${json? 'd-block':'d-none'}`}
                          onClick={(e) =>  {
                            e.preventDefault();
                            navigator.clipboard.writeText(JSON.stringify(responseJSON));
                            setCopyTextResponse(true);
                          }} 
                          disabled={responseJSON ? false: true}
                          > 
                            <span class={`pe-3 ${copyTextResponse  ? "tooltiptext" : ''}`} id="myTooltip">{copyTextResponse ? 'Copied to Clipboard': 'Copy Text'}</span>
                            <img src="images/paste.png" width={20}/>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </Form>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
};
export default TryItOutApiScreen;
