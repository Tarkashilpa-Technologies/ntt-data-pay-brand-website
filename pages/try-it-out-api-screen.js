import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { apisDataApi } from "./services/services";
import JSONEditor from "jsoneditor";
import dynamic from "next/dynamic";

const TryItOutApiScreen = () => {
  const [apisData, setApisData] = useState([]);
  const [jsonData, setJsonData] = useState();
  const data = {
    id: 11,
    title: "perfume Oil",
    description: "Mega Discount, Impression of A...",
    price: 13,
    discountPercentage: 8.4,
    rating: 4.26,
    stock: 65,
    brand: "Impression of Acqua Di Gio",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/11/1.jpg",
      "https://i.dummyjson.com/data/products/11/2.jpg",
      "https://i.dummyjson.com/data/products/11/3.jpg",
      "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    ],
  };

  const apisDataApiCall = () => {
    // setShowLoader(true);

    apisDataApi()
      .then((res) => {
        // setPageNumber(pageNo ? pageNo : pageNumber);
        console.log(res?.data, "res?.data");
        setApisData(res?.data?.data);
        setJsonData(
          res?.data?.data[0]?.attributes?.Defination?.components?.requestBodies
        );
        // setShowLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        // setShowLoader(false);
      });
  };

  useEffect(() => {
    apisDataApiCall();
  }, []);

  console.log(apisData, "apis data");

  const JsonEditor = dynamic(
    {
      loader: () => import("nextjs-jsoneditor").then((mod) => mod.JsonEditor),
      render: (props, JsonEditor) => {
        return JsonEditor;
      },
    },
    {
      ssr: false,
    }
  );

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
                    Production
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100 rounded-0 mt-0">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
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
                    Penny drop Api
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100 rounded-0 mt-0">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
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
                    Verify Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100 rounded-0 mt-0">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
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
                  <div className="pb-2">Request </div>
                  <div className="text-white d-flex flex-column justify-content-center">
                    {/* <JSONPretty
                    id="json-pretty"
                    data={data}
                    theme={JSONPrettyMon}
                    themeClassName="p-4"
                  ></JSONPretty> */}
                    <JsonEditor
                      search={false}
                      navigationBar={false}
                      value={jsonData}
                    />
                  </div>
                  <div className="pt-3">
                    <div className="d-flex justify-content-end gap-3">
                      <button className="bg-black p-1 px-4 text-white">
                        Reset
                      </button>
                      <button className="bg-black p-1 px-4 text-white">
                        Send
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="pb-2">
                      <label> Response</label>
                    </div>
                    <div className="text-white d-flex flex-column justify-content-center">
                      {/* <JSONPretty
                      id="json-pretty"
                      data={data}
                      theme={JSONPrettyMon}
                      themeClassName="p-4"
                    ></JSONPretty> */}
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
