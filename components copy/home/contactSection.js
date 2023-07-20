import React from "react"
import { navigate } from "react-router-dom"
import axios from "axios"
import validator from "email-validator"
import ExportedImage from "next/image";
import Animation from "@components/common/Animation"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

const LoadingSubmit = () => (
  <div className="contact-loading">
    <span className="contact-loading-inner" />
  </div>
)
const ContactForm = ({
  isValid,
  onChange,
  onSubmit,
  showEmailError,
  loading,
  state,
  onUpdatePhone,
}) => {
  const [value, setValue] = React.useState()
  const onChangePhone = phone => {
    onUpdatePhone(phone)
  }
  return (
    <div className="contact">
      {loading && <LoadingSubmit />}
      <div className="container">
        <Animation>
          <h2 className="hdg-lv2">
            Become one of our clients.
            <br />
            Let's make <span>great things!</span>
          </h2>
        </Animation>
        <div className="contact__block">
          <div className="contact__block__map">
            <ExportedImage
              src="/images/home/contact-map.png"
              width={597}
              height={360}
              layout="intrinsic"
              alt="Work word"
              priority
            />
          </div>
          <div className="contact__block__form">
            <form
              name="contact-form"
              className="contact-form"
              onSubmit={onSubmit.bind(this)}
            >
              <div className="form-group">
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  id="FullName"
                  value={state.fullName}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                />
                <label htmlFor="FullName">Full name</label>
              </div>
              <div
                className={`${showEmailError !== "" && showEmailError === false
                  ? "form-group error"
                  : "form-group"
                  }`}
              >
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="Email"
                  value={state.email}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                />
                <label htmlFor="Email">Email Address</label>
              </div>
              <div className="form-group">
                <PhoneInput
                  name="contactNumber"
                  className="form-control"
                  id="ContactNumber"
                  international
                  defaultCountry="US"
                  value={value || ""}
                  onChange={(setValue, onChangePhone)}
                  placeholder="select"
                  required
                />

                <label htmlFor="ContactNumber">Contact number</label>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="Message"
                  value={state.message}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                />
                <label htmlFor="Message">Message</label>
              </div>
              <div className="form-check">
                <label className="form-check-label" htmlFor="NDA">
                  <input
                    name="nDA"
                    type="checkbox"
                    className="form-check-input"
                    id="NDA"
                  />
                  <span className="checkmark"></span>
                  Send me a copy of NDA
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isValid}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

class ContactSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: "",
      email: "",
      contactNumber: "",
      message: "",
      isValid: false,
      emailInvalid: "",
      nDA: false,
      submitted: false,
      loading: false,
    }
    this.onUpdateValues = this.onUpdateValues.bind(this)
  }
  validateEmail = () => {
    if (this.state.email !== "") {
      this.setState({
        isValid: validator.validate(this.state.email),
        emailInvalid: validator.validate(this.state.email),
      })
    } else {
      this.setState({ isValid: false, emailInvalid: false })
    }
  }
  onUpdatePhone = number => {
    this.setState({ contactNumber: number })
  }
  hasNull(target) {
    for (var val in target) {
      if (target[val] === "" || target[val] === undefined) return true
    }
    return false
  }
  checkDataNull(arr) {
    this.setState({ isValid: !this.hasNull(arr) })
  }
  onUpdateValues = e => {
    this.setState({ [e.target.name]: e.target.value })
    e.target.className =
      e.target.value != "" ? `form-control has-value` : "form-control"
    this.validateEmail()
    this.checkDataNull({ ...this.state })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const data = { ...this.state }
    if (data.email && data.fullName && data.contactNumber) {
      this.setState({ loading: true })
      axios({
        url: `https://script.google.com/macros/s/AKfycbzhePOWbcawV3iG3yVe-Z3xyeB1tFFvXZXZbqs9DT0NvecFycYD/exec`,
        data: JSON.stringify(data),
        headers: { "content-type": "application/x-www-form-urlencoded" },
        method: "POST",
      }).then(res => {
        if (res.data.result) {
          this.setState({ submitted: true })
          this.setState({ loading: false })
        }
      })
    } else {
      this.checkDataNull(data)
    }
  }
  resetForm() {
    document.getElementById("contact-form").reset()
  }

  render() {
    const { isValid, submitted } = this.state

    return (
      <>
        {submitted ? (
          navigate("/thanks")
        ) : (
          <ContactForm
            onChange={this.onUpdateValues.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
            isValid={isValid}
            loading={this.state.loading}
            showEmailError={this.state.emailInvalid}
            state={this.state}
            onUpdatePhone={this.onUpdatePhone}
          />
        )}
      </>
    )
  }
}
export default ContactSection
