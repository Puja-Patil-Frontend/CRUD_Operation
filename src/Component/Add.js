import React from 'react';
import { Component } from 'react';
import List from './List'
import '../App.css';


export class Add extends Component{
    constructor(props){
        super(props);
        this.state = {
            dir:[],
            item:{
                employee_id:'',
                first_name:'',
                last_name:'',
                email:'',
               
            },
            isEditing:false,
            temp_id:null,

        }

        this.handleChange=this.handleChange.bind(this)
        this.add=this.add.bind(this)
        this.delete=this.delete.bind(this)
        this.edit=this.edit.bind(this)
        this.update=this.update.bind(this)
        this.view=this.view.bind(this)
    }

    view(item){
         
         alert(
            `
            employee_id:-${item.employee_id}\n
            first_name:-${item.first_name}\n
            last_name:-${item.last_name}\n
            email:-${item.email}
            `
        )
        
    }


    handleChange(event){
        const name=event.target.name;
        // const first_name= event.target.first_name;
        // const last_name= event.target.last_name;
        // const email=event.target.email;
        const value= event.target.value;
        let item = this.state.item;
        item[name]=value

        // item[first_name,last_name,email]= value;

        this.setState({item:item})

    }

    add(e){
        e.preventDefault()
        let dir=this.state.dir;
        dir.push(this.state.item)
        this.setState({dir:dir,item:{employee_id:'',first_name:'',last_name:'',email:''}})
        console.log(this.state.dir)
    }

    edit(id){
        let item=this.state.dir[id]
        this.setState({item:item,isEditing:true,temp_id:id})
    }

    update(e){
        e.preventDefault();
        let dir=this.state.dir;
        dir[this.state.temp_id]=this.state.item;

        this.setState({
            dir:dir,
            item:{
                employee_id:'',
                first_name:'',
                last_name:'',
                email:'',
                
            },
            isEditing:false,
            temp_id:null

        })
    }

    delete(id){
        let dir=this.state.dir;
        dir.splice(id,1)
        this.setState({dir:dir})
    }
    render(){
        return(
            
            <div className='col.md-3'>
                <h1 className='detail'>Employee details</h1>
                
                <form method='POST' onSubmit={this.state.isEditing ? this.update: this.add}>
                    <h1></h1>
                    <div className='input-group-mb-3'><br/>
                    <label>Employee Id:</label><br/>
                        <input className='form-control'
                        type='number' 
                        name='employee_id' 
                        placeholder='Enter Employee Id'
                        value={this.state.item.employee_id}
                        onChange={this.handleChange}/>
                        <br/>

                        <label>First_Name:</label><br/>
                        <input className='form-control'
                        type='text' 
                        name='first_name' 
                        placeholder='Enter Employee first_name'
                        value={this.state.item.first_name}
                        onChange={this.handleChange}/>
                        <br/>
                        <label>Last_Name:</label><br/>
                        <input className='form-control'
                        type='text' 
                        name='last_name' 
                        placeholder='Enter Employee name'
                        value={this.state.item.last_name}
                        onChange={this.handleChange}/>
                        <br/>
                        <label>Email.Id :</label><br/>
                        <input className='form-control'
                        type='text' 
                        name='email' 
                        placeholder='Enter Employee Email_id'
                        value={this.state.item.email}
                        onChange={this.handleChange}/>
                        <br/>
                        
                        <button className='btn btn-success' type ='submit'
                        value={this.state.isEditing ? "Update" : "save"}>Add User</button>
                        
                    </div>
                    
                </form>
                
                <List
                    dir={this.state.dir}
                    delete={this.delete}
                    edit={this.edit}
                    view={this.view}
                />
                
            </div>
        )
    }
}
export default Add;