import React from 'react';
import { Component } from 'react';

class List extends Component{
    render(){
            return(
                <div>
                    <ul className='list_group mt-3'>
                        {
                              
                            this.props.dir.map((item,index)=>
                            (<div className='list_group-item' key={index}>
                           <table class="table table-hover">
                                    <thead className='table-dark'>
                               
                                        <tr>
                                        <th scope='col'></th>
                                        <th scope="col">Employee_id</th>
                                        <th scope="col">First_Name</th>
                                        <th scope="col">Last_Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody> 
                                        <tr>
                                        <th scope="row"></th>
                                        <td >{item.employee_id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <tr>
                                        <div  className='float-right' >
                                            <th><button className='btn btn-success btn-sm mr-2' 
                                            onClick={(e)=>this.props.view(item,e)}>View</button></th>
                                            <th>  <button className='btn btn-warning btn-sm mr-2' 
                                            onClick={(e)  =>this.props.edit(index,e)}>Edit</button> </th> 
                                            <th> <button className='btn btn-danger btn-sm' 
                                            onClick={(e)=>this.props.delete(index,e)}>Delete</button></th> 
                                        </div>
                                        </tr>    
                                        </tr>
                                        </tbody> 
                                        
                                        </table> 
                                        </div>
                                     ))
                                     
                    }
                   
                    </ul>
                     
                    </div>
            )
        
    }
}
export default List;