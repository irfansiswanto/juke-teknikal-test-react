import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function CreateEmployee() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [province, setProvince] = useState("")
  const [city, setCity] = useState("")
  const [street, setStreet] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [ktp, setKtp] = useState("")
  const [position, setPosition] = useState("")
  const [bankAccName, setBankAccName] = useState("")
  const [bankAccNumber, setBankAccNumber] = useState("")
  const [validationError,setValidationError] = useState({})

  

  const createEmployee = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('first_name', firstName)
    formData.append('last_name', lastName)
    formData.append('date_of_Birth', dateOfBirth)
    formData.append('phone', phone)
    formData.append('email', email)
    formData.append('province', province)
    formData.append('city', city)
    formData.append('street', street)
    formData.append('zip_code', zipCode)
    formData.append('ktp', ktp)
    formData.append('position', position)
    formData.append('bank_acc_name', bankAccName)
    formData.append('bank_acc_number', bankAccNumber)

    await axios.post('http://localhost:8000/api/employee', formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
            
            <div className="row">
                <div className='col-12'>
                    <Link className='btn btn-danger mb-2 float-end' to={"/"}>
                        Cancel
                    </Link>
                </div>
            </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Create Employee</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={createEmployee}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="First Name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={firstName} onChange={(event)=>{
                              setFirstName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Last Name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={(event)=>{
                              setLastName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Date Of Birth">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" value={dateOfBirth} onChange={(event)=>{
                              setDateOfBirth(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" value={phone} onChange={(event)=>{
                              setPhone(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={email} onChange={(event)=>{
                              setEmail(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Province">
                            <Form.Label>Province</Form.Label>
                            <Form.Control type="text" value={province} onChange={(event)=>{
                              setProvince(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="City">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value={city} onChange={(event)=>{
                              setCity(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Street">
                            <Form.Label>Street</Form.Label>
                            <Form.Control as="textarea" rows={3} value={street} onChange={(event)=>{
                              setStreet(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Zip Code">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="text" value={zipCode} onChange={(event)=>{
                              setZipCode(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="KTP">
                            <Form.Label>KTP</Form.Label>
                            <Form.Control type="text" value={ktp} onChange={(event)=>{
                              setKtp(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Position">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type="text" value={position} onChange={(event)=>{
                              setPosition(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Bank Acc Name">
                            <Form.Label>Bank Acc Name</Form.Label>
                            <Form.Control type="text" value={bankAccName} onChange={(event)=>{
                              setBankAccName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Bank Acc Number">
                            <Form.Label>Bank Acc Number</Form.Label>
                            <Form.Control type="text" value={bankAccNumber} onChange={(event)=>{
                              setBankAccNumber(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Save
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}