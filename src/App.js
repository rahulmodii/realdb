import React from 'react';
import './App.css';
import firebase from './firebase'
import faker from 'faker'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: []
    }
  }

  componentDidMount() {
    const tasks = firebase.database().ref("/tasks")
    tasks.orderByChild("timestamp").on('value', snapshot => {
      const state = snapshot.val();
      // console.log(state)
      const data = [];
      snapshot.forEach(element => {
        console.log(element)
        let some = { "title": element.val().title, "description":element.val().description,"image":element.val().image }
        data.unshift(some)
        // console.log(some)
      });
      this.setState({ developers: data })
      // console.log(state)
    });




  }
  create=()=>{
    console.log('create')
        const tasks = firebase.database().ref("/tasks")
        let data={"title":[faker.lorem.sentence()],"description":[faker.lorem.paragraph()],"image":[faker.image.abstract()],'timestamp':(new Date()).getTime()}
        tasks.push().set(data)
  }
  render() {
    console.log(this.state.developers)

    if (this.state.developers.length) {
      return (
        <React.Fragment>
          <button onClick={()=>this.create()}>Hello</button>
          {
             this.state.developers.map((u, i) => {
              return   <div class="card">
              <img class="card-img-top" src={u.image} alt="Card image cap" style={{height:200}} />
              <div class="card-body">
                <h5 class="card-title">{u.title}</h5>
             <p class="card-text">{u.description}</p>
              </div>
            </div>
            })
          }
       
        </React.Fragment>
      )


    }
    return  <button onClick={()=>this.create()}>Hello</button>;



  }
}

export default App;