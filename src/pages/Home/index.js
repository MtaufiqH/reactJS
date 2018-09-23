import React from 'react';
// import Button from '../../component/Button';
// import Status from '../../component/Status';
import Input from '@material-ui/core/Input';
const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isAuthenticated: false,
            name: "",
            list: null,
            keyword: ""
        };
    }

    componentDidMount(){
        this.fetchData();
    }


    fetchData = () => {
        return fetch(link)
        .then(res => res.json())
        .then(res => {
            this.setState({
                list:res
            });
        });
    };

    handleLogin = () => {
        this.setState({
            isAuthenticated: true
        });
    };

    handleForm = event =>{
        this.setState({
            keyword: event.target.value
        });
    };

    render() {
        const listStyle ={marginBottom:10};
        return(
            <div>
                <Input fullWidth={true} onChange={this.handleForm} value={this.state.keyword} /> <br/>
                {/* <Button onClick={this.handleLogin} size="sm" >Login</Button> */}
                {/* <Status 
                    isAuthenticated={this.state.isAuthenticated}
                    name={this.state.name} /> */}
                    <br></br>

                {this.state.list &&
                    this.state.list
                    .filter(article =>{
                        return (
                            article.title.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
                            article.content.toLowerCase().includes(this.state.keyword.toLowerCase()) 
                        );
                    })
                    
                    .map(article =>{
                        return <div key={article.id}>
                                <strong  style={listStyle} >{article.title}</strong><br/>
                                <small  style={listStyle} >{article.author}</small><br/><br/>
                                <div style={listStyle} >{article.content}</div>
                            </div>
                        
                    })
                    }
                
            </div>
        );
    
    }
}



export default Home;