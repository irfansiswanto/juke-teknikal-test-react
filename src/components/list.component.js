import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function List() {

    const [employee, setEmployee] = useState([])

    useEffect(()=>{
        fetchEmployee() 
    },[])

    const fetchEmployee = async () => {
        await axios.get('http://localhost:8000/api/employee').then(({data})=>{
            setEmployee(data.data)
        })
    }

    const deleteEmployee = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8000/api/employee/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchEmployee()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/create"}>
                    Create Employee
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date of Birth</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Province</th>
                                    <th>City</th>
                                    <th>Street</th>
                                    <th>Zip Code</th>
                                    <th>KTP</th>
                                    <th>Position</th>
                                    <th>Bank Acc Name</th>
                                    <th>Bank Acc Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employee.length > 0 && (
                                        employee.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.first_name} {row.last_name}</td>
                                                <td>{row.date_of_birth}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.email}</td>
                                                <td>{row.province}</td>
                                                <td>{row.city}</td>
                                                <td>{row.street}</td>
                                                <td>{row.zip_code}</td>
                                                <td>{row.ktp}</td>
                                                <td>{row.position}</td>
                                                <td>{row.bank_acc_name}</td>
                                                <td>{row.bank_acc_number}</td>
                                                <td>
                                                    <Link to={'/edit/${row.id}'} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteEmployee(row.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}