import React, { Component } from 'react'
//import {Card} from 'react-bootstrap'
import '../App.css';
import axios from 'axios'

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
            alert('Error retrieving data')
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
        <div key={index} className="display_post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h5>author: {post.author}</h5>
        </div>

        ))
    }

    render() {

        console.log('State: ',this.state)
        return (
            <div>            
               <div className="App">
                    <form onSubmit={this.submit}>
                        <div className="col-75">
                        <input type="text" name="title" placeholder="Post Title.." value={this.state.title} onChange={this.handleChange} required/>
                    </div>
                        <div className="col-75">
                        <textarea  placeholder="Write something.." name="body" value={this.state.body} onChange={this.handleChange}></textarea>
                        </div>
                        <div className="col-75">
                        <input type="text"  name="author" placeholder="Author.."  value={this.state.author} onChange={this.handleChange} required/>
                        </div>
                        <button>submit</button>
                    </form>
                    </div>
                   

               <div>
                {this.displayBlogPost(this.state.posts)}
                </div>
            </div>



        )
    }
}

export default FormPost
