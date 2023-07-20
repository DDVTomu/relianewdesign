import React from "react"
import axios from 'axios';
import validator from "email-validator"
import Animation from "../common/Animation"

const SubmitSuccess = () => (
  <div className="container">
    <div className="box-thanks">
      <h3>Thank for your submitted!</h3>
    </div>
  </div>
)
const CareerstForm = ({ isValid, onChange, onSubmit, data }) => {
  const { Resume, coverLetter } = data
  return (
    <form
      name="apply-job"
      id="careers-form"
      className="apply-job"
      onChange={onChange}
      onSubmit={onSubmit}
    >
      <Animation className="form-group">
        <label htmlFor="firstName">
          First name <span>(*required)</span>
        </label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          id="firstName"
        />
      </Animation>
      <Animation className="form-group">
        <label htmlFor="lastName">
          Last name <span>(*required)</span>
        </label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          id="lastName"
        />
      </Animation>
      <Animation className="form-group">
        <label htmlFor="email">
          Email <span>(*required)</span>
        </label>
        <input type="email" name="email" className="form-control" id="email" />
      </Animation>
      <Animation className="form-group">
        <label htmlFor="phoneNumber">
          Phone Number <span>(*required)</span>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          className="form-control"
          id="phoneNumber"
        />
      </Animation>
      <Animation className="form-group row">
        <div className="col">
          <label htmlFor="Resume">Resume</label>
          <div className="upload-btn-wrapper">
            <button className="form-control">
              <svg
                width="31px"
                height="29px"
                viewBox="0 0 31 29"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "10px" }}
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-691.000000, -2530.000000)"
                    fill="#050429"
                    fillRule="nonzero"
                  >
                    <g transform="translate(625.000000, 1920.000000)">
                      <g transform="translate(66.000000, 610.000000)">
                        <g>
                          <path d="M22.562,11.491 C22.562,11.491 23.789,10.558 22.855,9.625 C21.921,8.692 21.013,9.896 21.013,9.896 L11.624,19.287 C11.624,19.287 9.425,22.125 7.753,20.409 C6.083,18.691 8.874,16.537 8.874,16.537 L21.185,4.227 C21.185,4.227 24.058,1.062 26.759,3.761 C29.456,6.461 26.282,9.34 26.282,9.34 L12.449,23.173 C12.449,23.173 8.023,28.286 3.926,24.188 C-0.171,20.09 4.992,15.714 4.992,15.714 L15.494,5.209 C15.494,5.209 16.67,4.227 15.789,3.343 C14.904,2.46 13.924,3.638 13.924,3.638 L1.873,15.689 C1.873,15.689 -2.676,20.678 2.404,25.757 C7.484,30.839 12.476,26.29 12.476,26.29 L29.039,9.725 C29.039,9.725 32.353,6.07 28.402,2.117 C24.451,-1.836 20.795,1.478 20.795,1.478 L6.543,15.728 C6.543,15.728 2.893,18.697 6.205,22.007 C9.517,25.321 12.432,21.617 12.432,21.617 L22.562,11.491 Z"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              {Resume ? Resume[0].name : "Attach File"}
            </button>
            <input type="file" name="Resume" id="Resume" />
          </div>
        </div>
        <div className="col">
          <label htmlFor="coverLetter">Cover Letter</label>
          <div className="upload-btn-wrapper">
            <button className="form-control">
              <svg
                width="31px"
                height="29px"
                viewBox="0 0 31 29"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "10px" }}
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-691.000000, -2530.000000)"
                    fill="#050429"
                    fillRule="nonzero"
                  >
                    <g transform="translate(625.000000, 1920.000000)">
                      <g transform="translate(66.000000, 610.000000)">
                        <g>
                          <path d="M22.562,11.491 C22.562,11.491 23.789,10.558 22.855,9.625 C21.921,8.692 21.013,9.896 21.013,9.896 L11.624,19.287 C11.624,19.287 9.425,22.125 7.753,20.409 C6.083,18.691 8.874,16.537 8.874,16.537 L21.185,4.227 C21.185,4.227 24.058,1.062 26.759,3.761 C29.456,6.461 26.282,9.34 26.282,9.34 L12.449,23.173 C12.449,23.173 8.023,28.286 3.926,24.188 C-0.171,20.09 4.992,15.714 4.992,15.714 L15.494,5.209 C15.494,5.209 16.67,4.227 15.789,3.343 C14.904,2.46 13.924,3.638 13.924,3.638 L1.873,15.689 C1.873,15.689 -2.676,20.678 2.404,25.757 C7.484,30.839 12.476,26.29 12.476,26.29 L29.039,9.725 C29.039,9.725 32.353,6.07 28.402,2.117 C24.451,-1.836 20.795,1.478 20.795,1.478 L6.543,15.728 C6.543,15.728 2.893,18.697 6.205,22.007 C9.517,25.321 12.432,21.617 12.432,21.617 L22.562,11.491 Z"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              {coverLetter ? coverLetter[0].name : "Attach File"}
            </button>
            <input type="file" name="coverLetter" id="coverLetter" />
          </div>
        </div>
      </Animation>
      <button type="submit" className="btn btn-primary" disabled={!isValid}>
        Submit
      </button>
    </form>
  )
}

class CareersContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      Resume: "",
      isValid: false,
      coverLetter: "",
      submitted: false,
    }
  }
  validateEmail = () => {
    if (this.state.email !== "") {
      this.setState({ isValid: validator.validate(this.state.email) })
    } else {
      this.setState({ isValid: false })
    }
  }

  onUpdateValues = e => {
    if (e.target.type === "file") {
      this.setState({ [e.target.name]: e.target.files })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }

    e.target.className =
      e.target.value !== "" ? `form-control has-value` : "form-control invalid"
    this.validateEmail()
  }
  handleSubmit = async e => {
    e.preventDefault()
    const data = { ...this.state }
    axios({
      url: `https://script.google.com/macros/s/AKfycbxOyvGvKKdB6P3_c-ldJDGsqf41yoQpyzM_SdK33g/exec`,
      data: JSON.stringify(data),
      headers: { "content-type": "application/x-www-form-urlencoded" },
      method: "POST",
    }).then(res => {
      if (res.data.result) {
        this.setState({ submitted: true })
      }
    })
  }
  resetForm() {
    document.getElementById("careers-form").reset()
  }

  render() {
    const { isValid, submitted } = this.state
    return (
      <>
        {submitted ? (
          <SubmitSuccess />
        ) : (
          <CareerstForm
            onChange={this.onUpdateValues}
            onSubmit={this.handleSubmit}
            isValid={isValid}
            data={this.state}
          />
        )}
      </>
    )
  }
}
export default CareersContact
