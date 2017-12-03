import React from "react";


class DiaryGraph extends React.Component {
	render(){
		return(
			<div>
			Graph goes here.
			</div>
		);
	}
}

class UserInputDiary extends React.Component {
	render() {
		return(
			[<h2>What would you call that feeling?</h2>,
    			<input type="text"/>,
			<h2>What happened?</h2>,
    			<input type="text"/>
			]			
		);
	}
}

/*
export class TestValue extends React.Component{
	render(){
		return(
			<div>
			{this.props.display}
			</div>
		);
	}
}
*/


/*
export class Home extends React.Component {

  
    handleSubmit(){
  	  this.setState({display:1})
    }
  
	render() {
		return(
			<div>
	   <TestValue display={this.state.display}/>
	  	  </div>,
	  	  <div>
	  	  <DiaryGraph />
	  	  </div>,
	  	  <div>
	  	  <UserInputDiary />
	  	  </div>,
			<div>
	  		  <button type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>

		);
	}
}
*/


export class Home extends React.Component {
	
	/*
    constructor(props){
  	super(props)
  	this.state = {display:5}
    }
	*/
	
    handleSubmit(){
  	  this.setState({display:1})
    }
	
	render(){
		return(
			[<div>
			<DiaryGraph />
			<UserInputDiary />
			</div>,
			<div>
	  		<button type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>
			]
		);
	}
}