import HeaderTwo from '../../Components/HeaderTwo'
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dropdown } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import Accordion from "react-bootstrap/Accordion";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
    tutorialDataApi,
    tutorialGroupDataApi,
    useCaseDataApi,
  } from "../../services/services";

const TutorialScreenPage = () => {
    const router = useRouter();
    const queryData = router.query?.query;
    const [tutorialsListData, setTutorialsListData] = useState([]);
    const [tutorialData, setTutorialData] = useState([]);
    const [showHelpfulData, setShowHelpfulData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedUrl, setSelectedUrl] = useState(0);
    const [isPageHelpful, setIsPageHelpful] = useState();
    const [pageHelpfulFalseData, setPageHelpfulFalseData] = useState([]);
    const divRef = useRef(null);
    const [overflowBtn,setOverflowBtn] = useState(false);
    const[fullHeight,setFullHeight]= useState(typeof window !== 'undefined' && window.innerHeight);
    const[fullWidth,setFullWidth] = useState();

    const tutorialListDataApiCall = () => {
        // setShowLoader(true);
        tutorialGroupDataApi()
          .then((res) => {
            if(res?.data){
            setTutorialsListData(res?.data?.data);
            }else {
              setTutorialsListData([])
            }
          })
          .catch((err) => {
            console.log("err", err);
            // setShowLoader(false);
          });
      };
    
      useEffect(() => {
        tutorialListDataApiCall();
      }, []);
    
      useEffect(() => {
        // console.log(queryData,"queryData")
        if (tutorialsListData && queryData) {
          tutorialsListData?.map((data) => {
    
            data?.attributes?.tutorials?.data?.map((title) => {
              if(title?.attributes?.Title.toLowerCase().replace(/\s+/g,"-") == queryData)
              {
                return  title?.attributes != undefined ?  UseCaseDataApiCall(
                  title?.id
                ) : router?.push('/404')
              }
            });
          });
        }
      }, [tutorialsListData,queryData]);

       // use case data api
  const UseCaseDataApiCall = (id) => {
    // setShowLoader(true);
    // console.log(id,"id")
    useCaseDataApi(id)
      .then((res) => {
        // console.log(res?.data.data,"res data")
        if(res?.data){
        setTutorialData(res?.data?.data?.attributes);
        }else {
          setTutorialData([]);
        }
      })
      .catch((err) => {
        console.log("err", err);
        setTutorialData([]);
        // setShowLoader(false);
      });
  };

  // fetch on this page data
  const sidebarData = [];
  if (tutorialData) {
    const regex = /# ([^\n]+)/g;
    let match;
    while ((match = regex.exec(tutorialData?.Content)) !== null) {
      sidebarData.push(match[1]);
    }
  }

  // page helpful array
  const pageHelpfulData = [
    {
      id: 1,
      value: "Issue with refund",
    },
    {
      id: 2,
      value: "Issue with activation (delay in KYC, follow-ups)",
    },
    {
      id: 3,
      value: "Issue with settlement",
    },
    {
      id: 4,
      value: "Issue with international payments",
    },
    {
      id: 5,
      value: "Unable to find information",
    },
    {
      id: 6,
      value: "Difficult to understand",
    },
    {
      id: 7,
      value: "Other",
    },
  ];

  // submit page helpful form
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get data from the form.
    const new_contact = {
      subject: isPageHelpful ? "What was the most helpful ?" : "What can be improved ?",
      article: tutorialData?.Title,
      message: event.target.message.value,
      data: pageHelpfulFalseData ? pageHelpfulFalseData : [],
    };

    await fetch("/api/formemail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_contact),
    }).then((res) => {
      // console.log(res.json());
      if (res.status === 200) {
      }
    });
    alert("Thank you for submitting your feedback to us.");
    setShowHelpfulData(false);
  };

  const reasonSelectionFunction = (data) => {
    setPageHelpfulFalseData((prevArray) => [...prevArray, data]);
  };


  function scrollToTarget(text) {
    const eleId= document.getElementById(text);
    eleId?.current?.scrollIntoView({ behavior: 'smooth', top:200});
  }

  const useResize = (myRef) => {
    const getWidth = useCallback(() => myRef?.current?.offsetWidth, [myRef]);
  
    const [width, setWidth] = useState(undefined);
  
    useEffect(() => {
        const handleResize = () => {
            setWidth(getWidth());
        };
  
        if (myRef.current) {
            setWidth(getWidth());
        }
  
        window.addEventListener('resize', handleResize);
  
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [myRef, getWidth]);
  
    return width && width > 25 ? width - 25 : width;
  };

  const maxWidth = useResize(divRef);
  // console.log(maxWidth,"maxWidth")

  useEffect(()=> {
    if(typeof window !== 'undefined')
    {
      setFullHeight(window.innerHeight);
    }

    window.addEventListener('resize', ()=> {
      setFullHeight(window.innerHeight);
      setFullWidth(window.innerWidth);
    });
    
 }, [])
  

  return (
    <>
      {fullHeight && (
        <div className='overflow-hidden' style={{ maxHeight: fullHeight }}>
          <div className='d-flex  flex-column h-100 w-100 overflow-hidden'>
            <div>
              <HeaderTwo />
            </div>
            <div>
              <div className='d-block d-lg-none overflow-auto'>
                <div className={`d-flex w-100 bg-primary`}>
                  <button
                    className='w-100 btn bg-primary text-white text-start rounded-0 link-primary'
                    style={{ minWidth: 140 }}
                    onClick={() => router.push('/integration-guides-new')}
                  >
                    {'<'} Back to home
                  </button>
                  <div className='d-flex'>
                    {tutorialsListData?.map((dropdown, index) => {
                      return (
                        <div key={index}>
                          <Dropdown className='bg-primary'>
                            <Dropdown.Toggle
                              id='dropdown-autoclose-true'
                              className={`p-2 m-0 border-0 bg-primary rounded-0 border-start my-1 show ${
                                queryData ==
                                dropdown?.attributes?.Title.replace(/\s+/g, '')
                                  ? 'text-white fw-bold'
                                  : 'bg-primary text-white'
                              }`}
                            >
                              {dropdown?.attributes?.Title}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {dropdown?.attributes?.tutorials?.data?.length >
                                0 &&
                                dropdown?.attributes?.tutorials?.data?.map(
                                  (tutorial, index) => {
                                    return (
                                      <Dropdown.Item>
                                        <div
                                          key={index}
                                          className={`rounded-start p-1 ps-2 ${
                                            queryData ==
                                            tutorial?.attributes?.Title.replace(
                                              /\s+/g,
                                              ''
                                            )
                                              ? 'fw-bold text-primary'
                                              : 'fw-normal'
                                          }`}
                                          onClick={() => {
                                            UseCaseDataApiCall(tutorial.id)
                                            router.push(
                                              `/tutorial-screen/${tutorial?.attributes?.Title.toLowerCase().replace(
                                                /\s+/g,
                                                '-'
                                              )}`
                                            )
                                          }}
                                        >
                                          {tutorial?.attributes?.Title}
                                        </div>
                                      </Dropdown.Item>
                                    )
                                  }
                                )}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='row gap-1'>
                <div className='mt-5 d-flex overflow-auto col-lg-2 col-xl-2 col-xxl-2'>
                  <div
                    className='col-12 bg-primary pt-1 first-section-width d-lg-block d-none '
                    style={{ maxHeight: fullHeight - 90 }}
                  >
                    <div className='p-2'>
                      {' '}
                      <button
                        className='w-100 btn bg-primary text-white text-start rounded-0 link-primary'
                        onClick={() => router.push('/integration-guides-new')}
                      >
                        {'<'} Back to home
                      </button>
                    </div>

                    <hr className='p-0 bg-white text-white m-0'></hr>
                    <div>
                      {' '}
                      <Accordion
                        defaultActiveKey='0'
                        className='border-0 bg-primary shadow-none rounded-0 p-0 m-0 hide-accordion-btn'
                        flush
                      >
                        {tutorialsListData?.map((dropdown, index) => {
                          console.log(dropdown?.id, selectedIndex)
                          return (
                            <div key={index}>
                              {/* <hr className="p-0 bg-white text-white m-0"></hr> */}

                              <Accordion.Item
                                eventKey={index}
                                className={`p-0 m-0 border-0 bg-primary rounded-0 ${
                                  queryData ==
                                  dropdown?.attributes?.Title.replace(
                                    /\s+/g,
                                    ''
                                  )
                                    ? 'bg-white text-primary'
                                    : 'bg-primary text-white'
                                }`}
                                onClick={() => {
                                  setSelectedIndex(dropdown?.id)
                                }}
                              >
                                <Accordion.Header
                                  className={`w-100 mb-0 cursor-pointer rounded-0 text-start d-flex justify-content-between align-items-center border-0 py-1 ps-2 ${
                                    queryData ==
                                    dropdown?.attributes?.Title.toLowerCase().replace(
                                      /\s+/g,
                                      '-'
                                    )
                                      ? 'fw-bold'
                                      : 'bg-primary text-white'
                                  }`}
                                >
                                  <div className='d-flex justify-content-between w-100'>
                                    <div
                                      className={`${
                                        dropdown?.id === selectedIndex
                                          ? 'fw-bold'
                                          : 'bg-primary text-white'
                                      }`}
                                    >
                                      {dropdown?.attributes?.Title}
                                    </div>
                                    <div>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                      >
                                        <path
                                          d='M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z'
                                          fill='#fff'
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </Accordion.Header>
                                <Accordion.Body className='m-0 p-0 py-2 ps-4 pb-3'>
                                  {dropdown?.attributes?.tutorials?.data
                                    ?.length > 0 &&
                                    dropdown?.attributes?.tutorials?.data?.map(
                                      (tutorial, index) => {
                                        return (
                                          <div
                                            key={index}
                                            style={{
                                              borderLeft: '1px solid white',
                                            }}
                                            className={`text-white  pointer p-2 ps-4 ${
                                              queryData ==
                                              tutorial?.attributes?.Title.toLowerCase().replace(
                                                /\s+/g,
                                                '-'
                                              )
                                                ? 'fw-bold'
                                                : 'bg-primary fw-normal'
                                            }`}
                                            onClick={() => {
                                              UseCaseDataApiCall(tutorial.id)
                                              router.push(
                                                `/tutorial-screen/${tutorial?.attributes?.Title.toLowerCase().replace(
                                                  /\s+/g,
                                                  '-'
                                                )}`
                                              )
                                            }}
                                          >
                                            {tutorial?.attributes?.Title}
                                          </div>
                                        )
                                      }
                                    )}
                                </Accordion.Body>
                                <hr className='p-0 m-0'></hr>
                              </Accordion.Item>
                            </div>
                          )
                        })}
                      </Accordion>
                    </div>
                  </div>
                </div>
                {/* middle section  */}
                <div className='h-100 col'>
                  <div
                    className='shadow p-xl-5 pb-3 middle-section-shadow'
                    style={{ maxHeight: fullHeight - 90 }}
                  >
                    <div className='text-start'>
                      {' '}
                      <h1 className='text-start title-font'>
                        {tutorialData?.Title}
                      </h1>
                      <hr className='my-md-4 my-2 mb-md-2 mb-1'></hr>
                      <div className='pb-3'>
                        {' '}
                        <ReactMarkdown
                          linkTarget='_blank'
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[rehypeRaw]}
                          className='react-markdown'
                          components={{
                            p: ({ node, ...props }) => (
                              <p
                                className='py-md-3 py-2 text-secondary'
                                {...props}
                              />
                            ),
                            p: ({ node, children }) => {
                              if (node.children[0].tagName == 'img') {
                                const image = node.children[0]
                                return (
                                  <div
                                    className='image my-md-5 my-3 display-center image-ref-div'
                                    ref={divRef}
                                  >
                                    <img
                                      src={image.properties.src}
                                      alt={image.properties.alt}
                                      maxWidth={fullWidth}
                                      className='image-width'
                                    />
                                  </div>
                                )
                              }

                              // Return default child if it's not an image
                              return <div>{children}</div>
                            },
                            div: ({ node, children }) => {
                              if (node.children[0].tagName == 'img') {
                                const image = node.children[0]
                                return (
                                  <div
                                    className='my-md-5 my-3 display-center image-ref-div'
                                    ref={divRef}
                                  >
                                    <img
                                      src={image.properties.src}
                                      alt={image.properties.alt}
                                      maxWidth={fullWidth}
                                      className='image-width'
                                    />
                                  </div>
                                )
                              }

                              // Return default child if it's not an image
                              return <div>{children}</div>
                            },
                            a: ({ node, children }) => {
                              if (node.children[0].tagName == 'img') {
                                const image = node.children[0]
                                return (
                                  <div
                                    className='my-md-5 my-2 display-center image-ref-div'
                                    ref={divRef}
                                  >
                                    <img
                                      src={image.properties.src}
                                      alt={image.properties.alt}
                                      maxWidth={fullWidth}
                                      className='image-width'
                                    />
                                  </div>
                                )
                              }

                              // Return default child if it's not an image
                              return <div>{children}</div>
                            },
                            a: ({ node, ...props }) => (
                              <a
                                className='fst-italic text-primary text-decoration-underline'
                                {...props}
                              />
                            ),

                            a: ({ node, ...props }) => {
                              if (node.children[0].tagName == 'img') {
                                const image = node.children[0]
                                return (
                                  <div
                                    className='my-md-5 my-3'
                                    style={{
                                      width: '50vw',
                                      display: 'flex',
                                      justifyContent: 'center',
                                    }}
                                    ref={divRef}
                                  >
                                    <video
                                      controls
                                      poster={image.properties.src}
                                      maxWidth={fullWidth}
                                      className='overflow-hidden'
                                    >
                                      <source
                                        src={node.properties.href}
                                        maxWidth={fullWidth}
                                      />
                                    </video>
                                  </div>
                                )
                              } else if (
                                node.properties.href.indexOf('youtube.com') !=
                                -1
                              ) {
                                return (
                                  <div className='display-center w-100 h-100'>
                                    <iframe
                                      src={node.properties.href}
                                      maxWidth={fullWidth}
                                      className='image-width'
                                    ></iframe>
                                  </div>
                                )
                              } else {
                                return (
                                  <a
                                    className='fst-italic text-primary text-decoration-underline'
                                    {...props}
                                  />
                                )
                              }
                            },
                            table: ({ node, ...props }) => (
                              <table
                                className='table table-hover p-2'
                                {...props}
                              />
                            ),
                            thead: ({ node, ...props }) => (
                              <thead className='table-light' {...props} />
                            ),

                            div: ({ node, ...props }) => (
                              <div className='py-md-3 py-1' {...props} />
                            ),

                            h1: ({ node, ...props }) => {
                              if (tutorialData?.Title) {
                                return (
                                  <h1
                                    className='pt-md-4 pb-md-2 heading-styles'
                                    id={`${node?.children[0]?.value.replace(
                                      /\s+/g,
                                      '-'
                                    )}`}
                                  >
                                    <a
                                      {...props}
                                      href={`#${node?.children[0]?.value.replace(
                                        /\s+/g,
                                        '-'
                                      )}`}
                                      target='_self'
                                      className='pe-1'
                                    >
                                      {node?.children[0]?.value}{' '}
                                      <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='text-primary'
                                      >
                                        <path
                                          d='M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z'
                                          fill='#0072bc'
                                        ></path>
                                        <path
                                          d='M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z'
                                          fill='#0072bc'
                                        ></path>
                                      </svg>
                                    </a>
                                  </h1>
                                )
                              }
                              return <h1 {...props} />
                            },
                            h2: ({ node, ...props }) => {
                              if (tutorialData?.Title) {
                                return (
                                  <h2
                                    className='pt-md-4 pb-md-2 heading-styles'
                                    id={`${node?.children[0]?.value.replace(
                                      /\s+/g,
                                      '-'
                                    )}`}
                                  >
                                    <a
                                      {...props}
                                      href={`#${node?.children[0]?.value.replace(
                                        /\s+/g,
                                        '-'
                                      )}`}
                                      target='_self'
                                      className='pe-1'
                                    >
                                      {node?.children[0]?.value}{' '}
                                      <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='text-primary'
                                      >
                                        <path
                                          d='M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z'
                                          fill='#0072bc'
                                        ></path>
                                        <path
                                          d='M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z'
                                          fill='#0072bc'
                                        ></path>
                                      </svg>
                                    </a>
                                  </h2>
                                )
                              }
                              return <h2 {...props} />
                            },

                            blockquote: ({ node, ...props }) => {
                              if (
                                node?.children[1]?.children[0]?.children[0]?.value?.toUpperCase() ==
                                  'INFO' ||
                                node?.children[1]?.children[0]?.children[0]?.value?.toUpperCase() ==
                                  'ERROR'
                              ) {
                                return (
                                  <blockquote
                                    {...props}
                                    className={node?.children[1]?.children[0]?.children[0]?.value?.toLowerCase()}
                                  ></blockquote>
                                )
                              } else {
                                return <blockquote {...props}></blockquote>
                              }
                            },

                            h3: ({ node, ...props }) => {
                              if (tutorialData?.Title) {
                                return (
                                  <h3
                                    className='pt-md-4 pb-md-2 heading-styles'
                                    id={`${node?.children[0]?.value.replace(
                                      /\s+/g,
                                      '-'
                                    )}`}
                                  >
                                    <a
                                      {...props}
                                      href={`#${node?.children[0]?.value.replace(
                                        /\s+/g,
                                        '-'
                                      )}`}
                                      target='_self'
                                      className='pe-1'
                                    >
                                      {node?.children[0]?.value}{' '}
                                      <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='text-primary'
                                      >
                                        <path
                                          d='M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z'
                                          fill='#0072bc'
                                        ></path>
                                        <path
                                          d='M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z'
                                          fill='#0072bc'
                                        ></path>
                                      </svg>
                                    </a>
                                  </h3>
                                )
                              }
                              return <h3 {...props} />
                            },
                            h4: ({ node, ...props }) => {
                              if (tutorialData?.Title) {
                                return (
                                  <h4
                                    className='pt-md-4 pb-md-2 heading-styles'
                                    id={`${node?.children[0]?.value.replace(
                                      /\s+/g,
                                      '-'
                                    )}`}
                                  >
                                    <a
                                      {...props}
                                      href={`#${node?.children[0]?.value.replace(
                                        /\s+/g,
                                        '-'
                                      )}`}
                                      target='_self'
                                      className='pe-1'
                                    >
                                      {node?.children[0]?.value}{' '}
                                      <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='text-primary'
                                      >
                                        <path
                                          d='M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z'
                                          fill='#0072bc'
                                        ></path>
                                        <path
                                          d='M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z'
                                          fill='#0072bc'
                                        ></path>
                                      </svg>
                                    </a>
                                  </h4>
                                )
                              }
                              return <h4 {...props} />
                            },
                            h5: ({ node, ...props }) => {
                              if (tutorialData?.Title) {
                                return (
                                  <h5
                                    className='pt-md-4 pb-md-2 heading-styles'
                                    id={`${node?.children[0]?.value.replace(
                                      /\s+/g,
                                      '-'
                                    )}`}
                                  >
                                    <a
                                      {...props}
                                      href={`#${node?.children[0]?.value.replace(
                                        /\s+/g,
                                        '-'
                                      )}`}
                                      target='_self'
                                      className='pe-1'
                                    >
                                      {node?.children[0]?.value}{' '}
                                      <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='text-primary'
                                      >
                                        <path
                                          d='M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z'
                                          fill='#0072bc'
                                        ></path>
                                        <path
                                          d='M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z'
                                          fill='#0072bc'
                                        ></path>
                                      </svg>
                                    </a>
                                  </h5>
                                )
                              }
                              return <h5 {...props} />
                            },
                          }}
                        >
                          {tutorialData?.default_tutorial
                            ? tutorialData?.default_tutorial?.data?.attributes
                                ?.Content
                            : tutorialData?.Content}
                        </ReactMarkdown>
                      </div>
                      {/* was this page helpful section */}
                      {/* related tutorials */}
                      <div>
                        {tutorialData?.tutorials?.data?.length > 0 && (
                          <div className='pb-3'>
                            <hr className='text-secondary'></hr>
                            <label className='fs-5 fw-bold pt-3 pb-2'>
                              Related Tutorials{' '}
                            </label>
                            {tutorialData?.tutorials?.data?.map(
                              (tutorial, index) => {
                                return (
                                  <div className='p-1'>
                                    <a
                                      href={`/tutorial-screen?data=${tutorial?.attributes?.Title.replace(
                                        /\s+/g,
                                        ''
                                      )}&id=`}
                                      className='text-primary text-decoration-underline'
                                    >
                                      {tutorial?.attributes?.Title}
                                    </a>
                                  </div>
                                )
                              }
                            )}
                          </div>
                        )}
                      </div>
                      <hr className='text-secondary'></hr>
                      {showHelpfulData &&
                        (isPageHelpful == null ? (
                          <div className='d-flex flex-sm-row flex-column gap-3 align-items-center w-100'>
                            <label className='fw-bold fs-6'>
                              Was this page helpful?
                            </label>
                            <div className='d-flex gap-2'>
                              <button
                                className='btn border-primary rounded-0 text-primary px-4'
                                style={{ backgroundColor: '#F3FFFF' }}
                                onClick={() => setIsPageHelpful(true)}
                              >
                                {' '}
                                Yes{' '}
                              </button>
                              <button
                                className='btn border-danger text-danger rounded-0 px-4'
                                style={{ backgroundColor: '#FFEAE9' }}
                                onClick={() => setIsPageHelpful(false)}
                              >
                                {' '}
                                No{' '}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <form
                              onSubmit={(e) => {
                                handleSubmit(e)
                              }}
                            >
                              {isPageHelpful == false ? (
                                <div>
                                  <div>
                                    <label className='fw-bold fs-6 pt-2'>
                                      Let us know what went wrong.
                                    </label>
                                  </div>
                                  <div className='p-2 ps-0'>
                                    {pageHelpfulData?.map((data, index) => {
                                      return (
                                        <div
                                          className='d-flex align-items-center gap-2 p-1'
                                          key={index}
                                          id={data.value.replace(/\s+/g, '-')}
                                        >
                                          <input
                                            type='checkbox'
                                            onClick={(e) => {
                                              // e.preventDefault();
                                              reasonSelectionFunction(
                                                data.value
                                              )
                                            }}
                                          />
                                          <label>{data?.value}</label>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                              ) : (
                                ''
                              )}
                              <div className='py-3 d-flex flex-column gap-2'>
                                <label className='fw-bold fs-6'>
                                  {isPageHelpful
                                    ? 'What was most useful?'
                                    : 'What can be improved?'}
                                </label>
                                <textarea
                                  id='message'
                                  required
                                  className='w-50 p-2 border-0 bg-lighgray border-bottom border-secondary'
                                ></textarea>
                              </div>
                              <button className='btn btn-primary px-4 mt-2 mb-2'>
                                Submit
                              </button>
                            </form>
                          </div>
                        ))}
                      {showHelpfulData && <hr className='text-secondary'></hr>}
                    </div>
                  </div>
                </div>

                {/* last section */}
                <div
                  style={{ height: fullHeight - 90 }}
                  className='d-lg-block d-none third-section col-lg-2 col-xl-2 col-xxl-2'
                >
                  <div className='p-3 pt-4'>
                    <h6 className='fw-bold'>ON THIS PAGE</h6>
                    {sidebarData?.map((data, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedUrl(index)
                          }}
                          className='border-2 ps-2 py-1 border-start-primary fw-semibold pointer'
                        >
                          <a
                            href={`#${data.replace(/\s+/g, '-')}`}
                            className={`${
                              selectedUrl == index
                                ? 'text-primary'
                                : 'text-Black'
                            }`}
                            onClick={() =>
                              scrollToTarget(`${data.replace(/\s+/g, '-')}`)
                            }
                          >
                            {data}
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TutorialScreenPage