import { useState, useEffect } from "react";
import "../Components/Contact.css";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";


function Contact() {
  const initialValues = { username: "", email: "", phonenumber: "", contry: "", State:"", city:"",paragraph:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [paraValues, setParaValues] = useState(initialValues);
  const [paraErrors, setParaErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState( true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setParaValues({ ...paraValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setParaErrors(validate(paraValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors , paraErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors , paraErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "phonenumber is required";
    } else if (values.phonenumber.length = 10) {
      errors.phonenumber = "phonenumber Must be 10 Digit";
    }
    if (!values.contry) {
      errors.contry = "contry is required";
    }
    if (!values.Statee) {
      errors.State = "State is required";
    }
    if (!values.city) {
      errors.city = "city is required";
    }
    if (!values.paragraph) {
      errors.paragraph = "paragraph is required";
    }
    return errors;
  };

  return (
    <div className="container">
      <div className="form_group">
        <form onSubmit={handleSubmit}>
          <div className="ui divider"></div>
          <div className="ui_form">
            <div className="field">
              <label className="label_group">Company Name:</label> <br/>
              <input className="input_group"
                type="text"
                name="email"
                placeholder="Enter Your Company Name (Option)"
                // value={formValues.email}
                // onChange={handleChange}
              />
            </div>

            <div className="field">
              <label className="label_group">Contact Person: </label> <br/>
              <input className="input_group"
                type="text"
                name="username"
                placeholder="Enter Your Name"
                value={formValues.username}
                onChange={handleChange}
              /> <br/>
              <span>{formErrors.username}</span>
            </div>
            
            

            <div className="field">
              <label className="label_group">E-mail Address: </label> <br/>
              <input className="input_group"
                type="text"
                name="email"
                placeholder="Enter Your Email"
                value={formValues.email}
                onChange={handleChange}
              /> <br/>
              <span>{formErrors.email}</span>
            </div>
            
           

            <div className="field">
              <label className="label_group">Phone No.:</label> <br/>
              <input className="input_group"
                type="number"
                name="phonenumber"
                placeholder="Enter Your Phone no."
                value={formValues.phonenumber}
                onChange={handleChange}
              /> <br/>
                <span>{formErrors.phonenumber}</span>
            </div>
          
            

            <div className="field">
              <label className="label_group">Contry.:</label> <br/>
              <select value={formValues.contry} onChange={handleChange} name="contry"  className="input_group">
              <option value="Odi">Select One</option>
                <option value="india">India</option>
                <option value="Australia">Australia</option>
                <option value="England">England</option>
              </select> <br/>
              <span>{formErrors.contry}</span>
            </div>
          
            


            <div className="field">
              <label className="label_group">State.:</label> <br/>
              <select value={formValues.State} onChange={handleChange} name="State"  className="input_group">
              <option value="Odi">Select One</option>
                <option value="Odisha">Odisha</option>
                <option value="Bihar">Bihar</option>
                <option value="Gujrat">Gujrat</option>
              </select> <br/>
              <span>{formErrors.State}</span>
            </div>
         
            

            <div className="field">
              <label className="label_group">City.:</label> <br/>
              <input className="input_group"
                type="Text"
                name="city"
                placeholder="Enter Your city."
                value={formValues.city}
                onChange={handleChange}
              /> <br/>
              <span>{formErrors.city}</span>
            </div>
            
            <button className="main_btn">Send Request</button>
          </div>
        </form>
      </div>

      {/* second section */}

      <div className="main">
        <h4 className="secondhead">2. Project Specification</h4>
      </div>
      <div>
        <p className="type_of_services" >
          Plese Select type of service you are looking for?
        </p> 
      </div>
      <div className="radiabtn">
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="New Website"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Website Redesign"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                name="group1"
                label="Website Maintenance"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                name="group1"
                label="SEO Service"
                type={type}
                id={`inline-${type}-4`}
              />
              <Form.Check
                inline
                name="group1"
                label="Hire Devloper"
                type={type}
                id={`inline-${type}-5`}
              />
              <Form.Check
                inline
                name="group1"
                label="App Devlopment"
                type={type}
                id={`inline-${type}-6`}
              />
            </div>
          ))}
        </Form>
      </div>

      <div>
        <p className="para"  name="paragraph" value={paraValues.paragraph}
                onChange={handleChange}>
          Provide links to at least 2 websites from your industry(Only url in
          single line)
        </p> <br/> <span className="para_twoo">{paraErrors.paragraph}</span>
        <>
          <div className="col-md-6">
            <fieldset>
              <textarea
                refs="message"
                cols="2"
                rows="2"
                className="message"
                placeholder="Message"
              />
            </fieldset>
          </div>
        </>
      </div>
      

      <div>
        <p className="para_one"  name="paragraph" value={paraValues.paragraph}
                onChange={handleChange}>
          Provide at least 2 links websites with design you feel are closely
          aligned with your taste and needs.(One url in single line)
        </p> <br/>
        <span className="para_threee">{paraErrors.paragraph}</span>
        <>
        <div className="col-md-6">
            <fieldset>
              <textarea
                refs="message"
                cols="2"
                rows="2"
                className="message_one"
                placeholder="Message"
              />
            </fieldset>
          </div>
        </>
      </div>

      <p className="para_two" > 
      Do you need Brand Devlopment?</p><br/>

      <div className="radiabtn_second">
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Yes"
                name="group2"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="No"
                name="group2"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form>
      </div>

      <div>
        <p className="para_three"  name="paragraph" value={paraValues.paragraph}
                onChange={handleChange}> 
          What would you identify as the primary purpose of your website?
        </p> <br/> <span className="para_fourrr">{paraErrors.paragraph}</span>
        <>
        <div className="col-md-6">
            <fieldset>
              <textarea
                refs="message"
                cols="2"
                rows="2"
                className="message_three"
                placeholder="Message"
              />
            </fieldset>
          </div>
        </>
      </div>

      <div>
        <p className="para_four"  name="paragraph" value={paraValues.paragraph}
                onChange={handleChange}> 
          Please brief us about your xompetitors information?
        </p> <br/> <span className="para_fiveee">{paraErrors.paragraph}</span>
        <>
        <div className="col-md-6">
            <fieldset>
              <textarea
                refs="message"
                cols="2"
                rows="2"
                className="message_four"
                placeholder="Message"
              />
            </fieldset>
          </div>
        </>
      </div>

      <div>
        <p className="para_five"  name="paragraph" value={paraValues.paragraph}
                onChange={handleChange}> 
          Do you have a color palette in mind, please brief us?
        </p> <br/> <span className="para_sixxx">{paraErrors.paragraph}</span>
        <>
        <div className="col-md-6">
            <fieldset>
              <textarea
                refs="message"
                cols="2"
                rows="2"
                className="message_five"
                placeholder="Message"
              />
            </fieldset>
          </div>
        </>
      </div>

      <div>
        <p className="para_six"  name="paragraph" value={paraValues.paragraph}
                onChange={handleChange}> 
          How would someone 'Google' you if they werw browsing?
        </p> <br/> <span className="para_sevennn">{paraErrors.paragraph}</span>
        <>
         <div className="col-md-6">
            <fieldset>
              <textarea
                refs="message"
                cols="2"
                rows="2"
                className="message_six"
                placeholder="Message"
              />
            </fieldset>
          </div>
        </>
      </div>

      <div>
        <p className="para_seven"  name="paragraph" value={paraValues.paragraph}
                onChange={handleChange}> 
          What pages do you envision for your website?
        </p> <br/> <span className="para_eighttt">{paraErrors.paragraph}</span>
        <>
        <div className="col-md-6">
            <fieldset>
              <textarea
                refs="message"
                cols="2"
                rows="2"
                className="message_seven"
                placeholder="Message"
              />
            </fieldset>
          </div>
        </>
      </div>



      <div>
        <p  className="para_eight" >
          Please select additional service which are required to you?
        </p>{" "} <br/>
       
        <div className="check_btn">
          <Form>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`}>
                <Form.Check
                  inline
                  label="E-Commerce Function"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Domain Registration`}
                />

                <Form.Check
                  inline
                  label="Website Hosting"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Content Writing`}
                />

                <Form.Check
                  inline
                  label="Social Media Marketing"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />

                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Website Backup/Restore`}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Copyright Protection`}
                />
              </div>
            ))}
          </Form>
        </div>
        <p
          className="para_night"
          name="paragraph"
          value={paraValues.paragraph}
          onChange={handleChange}
        >
          Anything else we should know about project?
        </p>{" "} <br/>
        <span className="para_nineee">{paraErrors.paragraph}</span>
        <>
          <div className="col-md-6">
            <fieldset>
              <textarea
                refs="message"
                cols="2"
                rows="2"
                className="message_night"
                placeholder="Message"
              />
            </fieldset>
          </div>
        </>
        <p
          className="para_ten"
          name="paragraph"
          value={paraValues.paragraph}
          onChange={handleChange}
        >
          Do you have question for us?
        </p>{" "} <br/>
        <span className="para_tennn">{paraErrors.paragraph}</span>
        <>
          <div className="col-md-6">
            <fieldset>
              <textarea
                refs="message"
                cols="2"
                rows="2"
                className="message_ten"
                placeholder="Message"
              />
            </fieldset>
          </div>
        </>
      </div>
    </div>
  );
}

export default Contact;
