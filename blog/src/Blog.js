import { useState , useRef , useEffect} from 'react';
import styled from 'styled-components'
function BlogComponent() {

    const [formData, setFormData] = useState({ title: "", content: "" })
    const [blogs, setBlogs] = useState([]);
    const titleRef = useRef(null);
    useEffect(()=>{
        titleRef.current.focus();
    },[])//this effect only run on initial render

    useEffect(()=>{
        if(blogs.length)
            
            document.title = blogs[0].title ? blogs[0].title:document.title;
    },[blogs]);
    function handleSubmit(e) {
        e.preventDefault();

        setBlogs([formData, ...blogs]);
        setFormData({ title: "", content: "" });
        titleRef.current.focus();
        console.log(blogs);
    }

    function handleDelete(index){
        setBlogs(blogs.filter((blog,i)=>i !== index));
    }
    return (
        <>
            <h1>Blog App</h1>
            <Form>
                <Input ref={titleRef} placeholder='Enter Blog Title here ...' value={formData.title} onChange={(e) => { setFormData({ title: e.target.value ,content:formData.content}) }} />
                <Content  
                placeholder='Enter Blog Content here' 
                value={formData.content} 
                required 
                onChange={(e) => { 
                    setFormData({title:formData.title , content: e.target.value }) 
                    }}/>
                <Button onClick={handleSubmit}> Add Blog </Button>
            </Form>
            <History>
                <h1>Blogs:</h1>
                {blogs.map((blog, index) => {
                    return (<Blog key={index}>
                        <p>title:{blog.title}</p>
                        <p>content:{blog.content}</p>
                        <Delete onClick={()=>{handleDelete(index)}} key={index}>Delete</Delete>
                    </Blog>);
                    
                })}
            </History>

        </>
    )

}
const Form = styled.form`
padding:5px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:skyblue;
box-shadow:1px 2px 10px 10px;
`
const Input = styled.input`
padding:10px;
margin:10px;
word-spacing:2px;
border-radius:none;
box-shadow:1px 1px 5px 1px inset;
min-width:400px;


`
const Content = styled.textarea`
min-width:400px;
padding:10px;
margin:10px;
word-spacing:2px;
border-radius:none;
box-shadow:1px 1px 5px 1px inset;
`

const Button = styled.button`
padding: 10px;
margin: 10px;
word-spacing: 5px;
letter-spacing: 2px;
background-color: blue;
color: white;
font-weight:700;
text-align:center;
height: 30px;
border-radius: 5px;
&:hover{
background-color:#7070d0;
}
`
const History = styled.div`
width:100%;
padding:10px;
margin-top:20px;
display:flex;
flex-direction:column;
justify-content:center;
box-sizing:border-box;

`
const Blog = styled.div`
    position:relative;
    width: 70%;
    min-height: 50px;
    background-color: #d9caca;
    padding: 10px;
    border: 1px solid;
    margin: 10px;

`
const Delete = styled.button`
background-color:red;
color:white;
font-weight:700;
padding:5px;
margin:5px;
position:absolute;
right:1%;
top:60%;
&:hover{
background-color:#e47272;
}
`

export default BlogComponent;