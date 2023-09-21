import React from "react";
import { Dropdown } from "react-bootstrap";

const TryItOutApiScreen = () => {
  return (
    <div className="powerful-gateway ">
      <div className="w-100 pt-4" style={{ minHeight: 600 }}>
        <div className="pt-4 d-flex justify-content-center gap-4 w-100">
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
        <div className="d-flex w-100 h-100 pt-4">
          <div className="w-25">
            <div className="p-2">
              <div className="pb-2">Request </div>
              <div
                className="bg-black p-3 text-white d-flex flex-column justify-content-center"
                style={{ minHeight: 300 }}
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
              <div className="pt-3">
                <div className="d-flex justify-content-end gap-3">
                  <button className="bg-black p-1 px-4 text-white">
                    Reset
                  </button>
                  <button className="bg-black p-1 px-4 text-white">Send</button>
                </div>
              </div>
              <div
                className="bg-black p-3 text-white d-flex flex-column justify-content-center mt-4"
                style={{ minHeight: 300 }}
              >
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-75 p-3">
            <div>
              <div className="h2 fw-bold">Dummy Data</div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TryItOutApiScreen;
