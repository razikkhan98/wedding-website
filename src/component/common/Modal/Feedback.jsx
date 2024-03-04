import React from "react";

const Feedback = () => {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="inputBox">
                      <input type="text" name="firstName" required />
                      <span>First Name</span>
                      <i></i>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="inputBox">
                      <input type="text" name="lastName" required />
                      <span>Last Name</span>
                      <i></i>
                    </div>
                  </div>
                 
                 
                  <div className="col-lg-6">
                    <div className="inputBox">
                      <input type="text" name="mobileNumber" required />
                      <span>Mobile Number</span>
                      <i></i>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="inputBox">
                      <input type="email" name="emailID" required />
                      <span>Email ID</span>
                      <i></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inputBox">
                    <input type="text" name="location" required />
                    <span>Location</span>
                    <i></i>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
