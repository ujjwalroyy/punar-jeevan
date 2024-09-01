import React, { useState, useEffect, useContext } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
} from "mdb-react-ui-kit";
import data from "../../assets/data.json";
import { useParams } from "react-router-dom";
import axios from "../Api";
import AuthContext from "../context/AuthContext";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function ProfilePage() {
  const { handle } = useParams();
  const { getLoggedIn, user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("male");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState(0);
  const [district, setDistrict] = useState(0);
  const [address, setAddress] = useState("");
  const [blood, setBlood] = useState(0);
  const [edit, setEdit] = useState(true);
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  useEffect(() => {
    setName(user.name);
    setAge(user.age);
    setGender(user.gender);
    setMail(user.email);
    setPhone(user.phone);
    data.states.map((e, i) => {
      if (e.state === user.state) {
        setState(i);
        setDistrict(e.districts.indexOf(user.district));
      }
    });
    setPassword("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
    setAddress(user.address);
    setBlood(bloodGroups.indexOf(user.bloodGroup));
  }, [user]);

  const update = async () => {
    const formData = {
      name,
      age,
      gender,
      bloodGroup: bloodGroups[blood],
      email: mail,
      phone: phone,
      state: data.states[state].state,
      district: data.states[state].districts[district],
      address,
    };

    try {
      await axios.put(`/user/`, formData);
      setEdit(true);
      await getLoggedIn();
      alert("User updated successfully");
    } catch (error) {
      alert("User not updated");
    }
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
   

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />

              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mrdeveloper.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: "#333333" }}
                    />
                    <MDBCardText>Mr. develover</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <MDBCardText>@Mr. developer</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    />
                    <MDBCardText>Mr. developer</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    />
                    <MDBCardText>Mr. developer</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <form
                  className="space-y-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    update();
                  }}
                >
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{name || "N/A"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="text"
                          placeholder="Enter your full name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{mail || "N/A"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="email"
                          placeholder="Enter your email"
                          required
                          value={mail}
                          onChange={(e) => setMail(e.target.value)}
                        />
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{phone || "N/A"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="text"
                          placeholder="Enter your phone number"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>Age</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{age || "N/A"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="number"
                          placeholder="Enter your age"
                          required
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
      <MDBCol sm="6">
        <MDBCardText>Gender</MDBCardText>
      </MDBCol>
      <MDBCol sm="4">
        <MDBDropdown>
          <MDBDropdownToggle
            disabled={edit}
            className="text-left"
          >
            {gender
              ? gender.charAt(0).toUpperCase() + gender.slice(1)
              : "Select Gender"}
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem
              active={gender === "male"}
              onClick={() => setGender("male")}
            >
              Male
            </MDBDropdownItem>
            <MDBDropdownItem
              active={gender === "female"}
              onClick={() => setGender("female")}
            >
              Female
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBCol>
    </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>Blood Group</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      <MDBDropdown>
                        <MDBDropdownToggle
                          className="text-left"
                          disabled={edit}
                        >
                          {bloodGroups[blood] || "Select Blood Group"}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          {bloodGroups.map((group, i) => (
                            <MDBDropdownItem
                              key={i}
                              active={blood === i}
                              onClick={() => setBlood(i)}
                            >
                              {group}
                            </MDBDropdownItem>
                          ))}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>Password</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{"••••••••"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="password"
                          placeholder="Enter your password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>State</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      <MDBDropdown>
                        <MDBDropdownToggle
                          className="text-left"
                          disabled={edit}
                        >
                          {data.states[state]?.state || "Select State"}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          {data.states.map((e, i) => (
                            <MDBDropdownItem
                              key={i}
                              active={state === i}
                              onClick={() => {
                                setState(i);
                                setDistrict(0);
                              }}
                            >
                              {e.state}
                            </MDBDropdownItem>
                          ))}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>District</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      <MDBDropdown>
                        <MDBDropdownToggle
                          className="text-left"
                          disabled={edit}
                        >
                          {data.states[state]?.districts[district] ||
                            "Select District"}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          {data.states[state]?.districts.map((e, i) => (
                            <MDBDropdownItem
                              key={i}
                              active={district === i}
                              onClick={() => setDistrict(i)}
                            >
                              {e}
                            </MDBDropdownItem>
                          ))}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{address || "N/A"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="text"
                          placeholder="Enter your address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol md="12" className="d-flex justify-content-center">
                      <button
                        type="button"
                        onClick={() => setEdit(!edit)}
                        className="w-44 mt-8 px-7 py-2 bg-blood text-white-900 hover:bg-gray-darkest rounded-full text-lg font-bold align-bottom"
                      >
                        {edit ? "Edit" : "Cancel"}
                      </button>
                      {!edit && (
                        <button
                          type="submit"
                          className="w-44 mt-8 px-7 py-2 bg-blood text-white-900 hover:bg-gray-darkest rounded-full text-lg font-bold align-bottom"
                        >
                          Save
                        </button>
                      )}
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        Blood Donation
                      </span>{" "}
                Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Web Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Website Markup
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      One Page
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Mobile Template
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Backend API
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>


              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Web Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Website Markup
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      One Page
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Mobile Template
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Backend API
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
