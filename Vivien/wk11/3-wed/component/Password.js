import react from 'react'

export default class Password extends React.Component{

constructor(props){
	super(props)
	this.state:{
		strength:''
	}
	this.state=this.state.bind(this)

}

evaluateStrnth(event){

	const char=event.target.value
    var strength = 0
    var evaluate

   	if (char.match(/[a-z]/)) {

      strength+=1
    }else if (char.match(/[A-Z]/)) {

      strength+=1 
    }else if (char.length >= 8) {

      strength+=1
    } else if (char.match(/[0-9]/)) {

      strength+=1
    }else if (char.match(/[^a-zA-Z\d\s:]/)) {
    	
      strength+=1
    }
   
   if (strength<5){
   		evaluate='weak'

   }else{

   		evaluate='strong'

   }

    this.setState({strength:evaluate})

}

render(){
	return <div>
     <input type='password' onChange={evaluateStrnth}/>
		  <p>{this.state.strength}</p>
  </div>
}



}