import React, { Component } from 'react'
import axios from 'axios'
//import {Alert} from 'react-bootstrap'

class FormPost extends Component {
    state = {
        title:"",
        body:"",
        author:"",
        posts:[]
    }
    componentDidMount = () =>{
        this.getBlogPost()
    }



    getBlogPost = () => {
        axios.get('/posts')
        .then((response)=>{
            const data = response.data;
            this.setState({posts : data})
            console.log('data has been recieved')
        })
        .catch(()=>{

         alert('problem retrieving data')

            
        })
    }

    handleChange = ({target}) =>{
        const {name, value} = target
        this.setState({[name]:value})}

    submit = (e) =>{
    e.preventDefault()
    const payload = {
        title:this.state.title,
        body:this.state.body,
        author:this.state.author
    }

    axios({
        url:"/posts/save",
        method:"POST",
        data:payload
    })
    .then(()=>{
        console.log('data has been sent to the server');
        this.resetUserInput()
        this.getBlogPost()
    })
    .catch((err)=>{
       console.log(err,'internal error')
    })

}

resetUserInput = () => {
    this.setState({
        title:"",
        body:"",
        author:""
    })
}
    displayBlogPost = (posts) =>{
        if(!posts.length) return null

       return posts.map((post,index)=>(
        <div>
            <div key={index} className="card border border-none shadow p-3 mb-5 bg-white rounded" >
                <div className="card-body">
                    <h5 className="card-title badge badge-primary text-wrap mx-auto"  >{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.author}</h6>
                    <p className="card-text text-primary">{post.body}</p>
                </div>
            </div>
            </div>

        ))
    }

    render() {

        console.log('State: ',this.state)
        return (
            <div>            
               <div className="App">
               <div className="badge badge-success text-wrap" >
                    welcome, write your first quote
                </div>
                    <form onSubmit={this.submit}>
                        <div className="form-group">
                        <input type="text"
                        className="form-control"
                         name="title" 
                         placeholder="Post Title.." 
                         value={this.state.title} 
                         onChange={this.handleChange} 
                         required/>
                    </div>
                        <div className="form-group">
                        <textarea  placeholder="Write something.." 
                        className="form-control"
                        name="body" value={this.state.body} 
                        onChange={this.handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <input type="text"
                        className="form-control"  
                        name="author" 
                        placeholder="Author.."  
                        value={this.state.author} 
                        onChange={this.handleChange}
                        required/>
                        </div>
                        <button className="btn btn-primary">submit</button>
                    </form>
                    </div>
                   

               <div className="container" className="shadow-none p-3 mb-5 bg-light rounded" style={{position:"relative",top:40}}>
                {this.displayBlogPost(this.state.posts)}
                </div>
            </div>



        )
    }
}

export default FormPost
