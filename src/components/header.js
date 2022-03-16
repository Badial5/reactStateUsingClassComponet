import React, {Component} from "react";
import './styles/style.css';

class Header extends Component {

    state = {
        name: 'Calvin',
        title: 'The keywords are: ',
        keywords: '',
        count:0
    }

   
   

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }


    addOne(){
        this.setState({count: this.state.count + 1})
    }

    render() {


        //If you dont want to see the state
        //then comment this console log 
        console.log(this.state)


        return(
            <header>
                <div className="logo">Logo</div>
                <input onChange={ this.inputChangeHandler} />

                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
                <br />
                <div>{this.state.count}</div>

                <br />

                <button onClick={() => this.addOne()} >Add</button>
            </header>
        )
    }




    



}















export default Header;