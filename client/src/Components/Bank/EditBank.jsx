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
import axios from "../Api";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";
import mapboxgl from "mapbox-gl";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function ProfilePage() {
    const { handle } = useParams();
    const { getLoggedIn, user } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState(0);
    const [district, setDistrict] = useState(0);
    const [address, setAddress] = useState("");
    const [edit, setEdit] = useState(true);
    const [hospital, setHospital] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [website, setWebsite] = useState("");
    const [category, setCategory] = useState("Private");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    setName(user.name);
        setHospital(user.hospital);
        setContactPerson(user.contactPerson);
        setCategory(user.category);
        setWebsite(user.website);
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
        setLatitude(user.latitude);
        setLongitude(user.longitude);
  }, [user]);

  useEffect(() => {
    if (longitude == 0) return;
    mapboxgl.accessToken = 'pk.eyJ1IjoiY29yb2JvcmkiLCJhIjoiY2s3Y3FyaWx0MDIwbTNpbnc4emxkdndrbiJ9.9KeSiPVeMK0rWvJmTE0lVA';
    var map = new mapboxgl.Map({
        container: 'map', style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude], zoom: 10.7
    });
    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
}, [latitude, longitude]);


  const update = async () => {
    const formData = {
        name: name,
        email: mail,
        phone: phone,
        state: data.states[state].state,
        district: data.states[state].districts[district],
        address: address,
        latitude: latitude,
        longitude: longitude,
        hospital: hospital,
        contactPerson: contactPerson,
        website: website,
        category: category
    };

    try {
      await axios.put(`/bank`, formData);
      setEdit(true);
      await getLoggedIn();
      alert("Blood Bank updated successfully");
    } catch (error) {
        alert("Something went wrong");
    }
  };
  const fetchGeo = async () => {
    if (latitude == user.latitude && longitude == user.longitude) return;
    await navigator.geolocation.getCurrentPosition((p) => {
        setLatitude(p.coords.latitude);
        setLongitude(p.coords.longitude);
    }, () => {
        alert("Please allow location access");
        setLatitude(user.latitude);
        setLongitude(user.longitude);
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });

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
                      <MDBCardText>Blood Bank Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{name || "N/A"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="text"
                          placeholder="Enter full name"
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
                      <MDBCardText>Parent Hospital Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{hospital || "N/A"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="text"
                          placeholder="Enter Hospital Name"
                          required
                          value={hospital}
                          onChange={(e) => setMail(e.target.value)}
                        />
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>Contact Person</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{contactPerson || "N/A"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="text"
                          placeholder="Contact person"
                          required
                          value={contactPerson}
                          onChange={(e) => setPhone(e.target.value)}
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
                          type="Number"
                          placeholder="phone number"
                          required
                          value={contactPerson}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  
                  <MDBRow>
      <MDBCol sm="6">
        <MDBCardText>Category</MDBCardText>
      </MDBCol>
      <MDBCol sm="4">
        <MDBDropdown>
          <MDBDropdownToggle
            disabled={edit}
            className="text-left"
          >
            {category
              ? category.charAt(0).toUpperCase() + category.slice(1)
              : "Select Category"}
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem
              active={category === "Private"}
              onClick={() => setCategory("Private")}
            >
              Private
            </MDBDropdownItem>
            <MDBDropdownItem
              active={category === "Govt."}
              onClick={() => setCategory("Govt.")}
            >
              Govt.
            </MDBDropdownItem>
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
                  <hr/>
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
                  <hr/>
                  <MDBRow>
                    <MDBCol sm="6">
                      <MDBCardText>Website</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="4">
                      {edit ? (
                        <MDBCardText>{website || "N/A"}</MDBCardText>
                      ) : (
                        <MDBInput
                          type="text"
                          placeholder="Website"
                          required
                          value={website}
                          onChange={(e) => setPhone(e.target.value)}
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
                  <MDBRow className="mb-4">
      <MDBCol sm="3">
        <MDBCardText className="font-weight-bold">
          Location <span style={{ color: 'red' }}>*</span>
        </MDBCardText>
      </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol sm="18">
        <MDBRow className="g-3">
          <MDBCol md="8">
            <div id="map" className="w-400" style={{ height: '200px' }}></div>
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              type="number"
              step="0.01"
              label="Latitude"
              disabled
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="mb-2"
              placeholder="Latitude"
            />
            <MDBInput
              type="number"
              step="0.01"
              label="Longitude"
              disabled
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              className="mb-3"
              placeholder="Longitude"
            />
            <MDBBtn
              type="button"
              disabled={false}
              color="purple"
              className="w-200"
              onClick={() => fetchGeo()}
            >
              Update Geocode
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
                  <hr/>
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
                        Blood 
                      </span>{" "}
                      Stock Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      A+
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      O+
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      B+
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                     AB+
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Blood Requests
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
                        Rare Blood
                      </span>{" "}
                      Stock
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      A-
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      O-
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      B-
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      AB-
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Blood Requests
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
