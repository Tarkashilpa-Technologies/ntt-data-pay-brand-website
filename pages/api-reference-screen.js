import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { apisDataApi, singleApiDataApi } from "./services/services";
import ReactMarkdown from "react-markdown";
import HeaderTwo from "../Components/HeaderTwo";
import ApiEndpoint from "../Components/ApiEndpoint";

const ApiReferenceScreen = () => {
  const router = useRouter();
  const queryData = router.query?.data;
  const queryId = router.query?.id;
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [apisListData, setApisListData] = useState([]);
  const [apiData, setApiData] = useState();
  const[searchData,setSearchData]= useState();
  const divRef = useRef(null);
  const[fullHeight,setFullHeight]= useState(typeof window !== 'undefined' && window.innerHeight);
  const[fullWidth,setFullWidth] = useState();
  const [isReady, setIsReady] = useState(false);
  const[headerListData,setHeaderListData]= useState([]);

  const apisListDataApiCall = () => {
    // setShowLoader(true);
    apisDataApi()
      .then((res) => {
        // setPageNumber(pageNo ? pageNo : pageNumber);
        setApisListData(res?.data?.data);
        // setShowLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        // setShowLoader(false);
      });
  };

  useEffect(() => {
    apisListDataApiCall();
  }, []);

  useEffect(() => {
    if (apisListData) {
      apisListData?.map((data) => {
        if ((data?.attributes?.Title).replace(/\s+/g, "") == queryData) {
          return setApiData(data);
        }
      });
    }
  }, [setApisListData, queryData]);
 

  const singleApisDataApiCall = (id) => {
    // setShowLoader(true);
    singleApiDataApi(id)
      .then((res) => {
        // setPageNumber(pageNo ? pageNo : pageNumber);
        setApiData(res?.data?.data);
        // setShowLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        // setShowLoader(false);
      });
  };

  useEffect(() => {
    if(queryId){
      singleApisDataApiCall(queryId);
    }
  }, [queryId]);

  useEffect(()=> {
    window.addEventListener('resize', ()=> {
      setFullHeight(window.innerHeight);
      setFullWidth(window.innerWidth);
    });
    if (typeof window !== 'undefined') {
      setIsReady(true);
    }
    
 }, [])
  
 useEffect(() => {
  if (typeof window !== "undefined") {
    const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const headersData = [];
    headingElements.forEach((element) => {
      console.log(element.innerText,"element")
      headersData.push(element.innerText);
    });

    setHeaderListData(headersData);
  }
}, [isReady]);

useEffect(() => {
  console.log(headerListData,"header list data");
},[headerListData])

  return (

    <div>
      {fullHeight &&  isReady ?
      <div className=" overflow-hidden w-100" style={{maxHeight:fullHeight}}>
        <HeaderTwo />
          <div className="d-flex pt-4 pt-md-3 d-block d-lg-none overflow-x-scroll">
              <div className="d-flex bg-primary w-100">
                {apisListData?.map((dropdown, index) => {
                  return (
                        <Dropdown className="bg-primary api-integration-dropdown" key={index}>
                          <Dropdown.Toggle id="dropdown-autoclose-true"
                            className={`p-2 px-3 m-0 border-0 bg-primary rounded-0 border-start show ${
                                selectedTitle == index
                                  ? "text-white fw-bold"
                                  : "bg-primary text-white"
                              }`}
                              onClick={() => {
                                setSelectedTitle(index);
                                setApiData(dropdown);
                              }}
                              >
                            {dropdown?.attributes?.Title}
                          </Dropdown.Toggle>
                        </Dropdown>
                  );
                })}
              </div>
            </div>
          
        <div className="d-flex w-100 h-100" style={{ minHeight: 600 }}>
          <div style={{ width: 300, height:fullHeight }} className="bg-primary overflow-y-auto  d-lg-block d-none">
            <div>
              {apisListData?.map((dropdown, index) => {
                return (
                  <div key={index}>
                    <div className={`bg-primary border-bottom p-2 ${
                                selectedTitle == index
                                  ? "text-white fw-bold"
                                  : "bg-primary text-white"
                              }`}>
                      <button
                        className="btn w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-primary border-0 p-1 text-white"
                        onClick={() => {
                          setSelectedTitle(index);
                          setApiData(dropdown);
                        }}
                      >
                        {dropdown?.attributes?.Title}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* mid section starts */}
          <div className="h-100 w-75 middle-section-width">
          <div className="p-xl-5 middle-section-shadow overflow-y-scroll" style={{maxHeight: fullHeight-150}}>
              <div className="text-start">
                {" "}
                <h1 className="text-start pb-3 title-font" id={apiData?.attributes?.Title.replace(/\s+/g,'-')}>{apiData?.attributes?.Title}</h1>
                {apiData?.attributes?.Description &&
                <div>
                  <h2 id="Introduction">Introduction </h2>
                  <p>{apiData?.attributes?.Description}</p>
                </div>
                }
                  {apiData?.Defination?.info?.title &&
                <div>
                  <h3>{apiData?.attributes?.Defination?.info?.title} : {apiData?.attributes?.Defination?.info?.version} </h3>
                </div>
                }
                <div className="w-100 overflow-auto">
                  <ReactMarkdown
                    components={{
                      p:({ node, ...props }) => (
                        <p
                          className="py-md-3 py-2 text-secondary"
                          {...props}
                        />
                      ),
                      div: ({ node, ...props }) => (
                        <div
                          className="py-md-3 py-2"
                          {...props}
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li
                          className="py-2"
                          {...props}
                        />
                      ),
                      p: ({ node, children }) => {
                        if (node.children[0].tagName == "img") {
                          const image = node.children[0];
                          return (
                            <div className="image my-md-5 my-3 display-center image-ref-div"  
                              ref={divRef}>
                              <img
                                src={image.properties.src}
                                alt={image.properties.alt}
                                maxWidth={fullWidth}
                                className="image-width"
                              />
                            </div>
                          );
                        }
                        // Return default child if it's not an image
                        return <div>{children}</div>;
                      },
                      blockquote: ({ node, ...props }) => { 
                          return <blockquote {...props} className="rounded-1 api-blackquote-style my-3 p-3" style={{backgroundColor: '#e4eeff'}}></blockquote>;   
                      },
                      h1: ({ node, ...props }) => {
                          return (
                            <h1 className="pt-md-4 pb-md-2 heading-styles">
                              <a
                                {...props}
                                href={`#${node?.children[0]?.value.replace(/\s+/g, "-")}`}
                                target="_self"
                                className="pe-1"
                              >{node?.children[0]?.value} <svg width="20" height="20" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" className="text-primary"><path d="M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z" fill="#0072bc"></path><path d="M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z" fill="#0072bc"></path></svg></a>
                            </h1>
                          );
                      },
                      h2: ({ node, ...props }) => {
                          return (
                            <h2 className="pt-md-4 pb-md-2 heading-styles">
                              <a
                                {...props}
                                href={`#${node?.children[0]?.value.replace(/\s+/g, "-")}`}
                                target="_self"
                                className="pe-1"
                              >{node?.children[0]?.value} <svg width="20" height="20" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" className="text-primary"><path d="M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z" fill="#0072bc"></path><path d="M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z" fill="#0072bc"></path></svg></a>
                            </h2>
                          );          
                      },
                      }}
                  >
                    {apiData?.attributes?.Defination?.info?.description}
                  </ReactMarkdown>
                </div>
                {apiData?.attributes?.Defination?.info?.termsOfService &&
                <div className="pt-3">
                  <h1 className="pb-3" id={('Terms-Of-Services')}>Terms Of Service</h1>
                  <p>{apiData?.attributes?.Defination?.info?.termsOfService}</p>
                </div>
                }
                
                <div>
                  {apiData?.attributes?.Defination?.tags && <h3 className="pb-2" id="tags">Tags :</h3> }
                  {apiData?.attributes?.Defination?.tags?.length > 0 &&
                
                  apiData?.attributes?.Defination?.tags.map((tag,index) => {
                    return(
                      <div className="border-start ps-3" key={index}>
                        <h4 id={tag.name.replace(/\s+/g,'-')}>{tag.name}</h4>
                        <label className="pb-1">URL : {tag?.externalDocs?.url}</label>
                        <p>{tag?.description}</p>
                    </div>
                    )
                  })
                  }
                </div>
                
                {apiData?.attributes?.Defination?.servers?.length > 0 &&
                (
                <div className="pt-3">
                  <h1 className="pb-3" id='Environments'>Environments </h1>
                <table className="table border mt-2">
                  <tbody>
                  {
                    apiData?.attributes?.Defination?.servers?.map((env,index) => {
                      return(                      
                            <tr className="text-start" key={index}>
                              <td className="border-end">{env?.description}</td>
                              <td className="ps-3">{env?.url}</td>
                            </tr>                                            
                      )
                    })  
                  }
                  </tbody>
                </table> 
                </div>
                )}
                <ApiEndpoint apiData={apiData}/>           
              </div>
            </div>
          </div>
          <div className="d-lg-block d-none" style={{width: 400,maxHeight:fullHeight-200}}>
          <div className="p-3 pt-4">
              <div className="fw-bold fs-6">ON THIS PAGE</div>
              {console.log(headerListData,"data inside array")}
                {headerListData?.length > 0 && headerListData?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="border-2 ps-2 py-1 border-start-primary fw-semibold pointer"
                    >
                      <a href={`#${data.replace(/\s+/g,'-')}`}>{data}</a>
                    </div>
                  );
                })}

            </div>
          </div>
        </div>
      </div>
      :  <div className="p-5  fs-3 fw-bold d-flex justify-content-center"> Loading ...</div>}
    </div>
  );
};

export default ApiReferenceScreen;
