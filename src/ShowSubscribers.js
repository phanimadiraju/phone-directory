import Header from './Header';
import './ShowSubscribers.css';
import React,{Component} from 'react';

class ShowSubscribers extends Component {
  // let subscribers=[
  //   {
  //     id:1,
  //     name:'Kishore',
  //     phone:'9988776655'
  //   },
  // {
  //   id:2,
  //   name:'Ram',
  //   phone:'9988776644'
  // }
  // ]

//   constructor(){
//     console.log('constructor called');
//     super();
//     this.state={
//       subscribersListToShow:[]
//     }
// }

// componentDidMount(){
//   console.log('component did mount called');
// let newSubscriber={
//   id:0,
//   name:'Gaurav',
//   phone:'9977886655'
// }
// let subscribersList=this.state.subscribersListToShow;
// subscribersList.push(newSubscriber);
// this.setState({ subscribersListToShow:subscribersList})

//}
  render(){
    console.log('Render method called');

return(
    <div className='component-container'>
    <Header heading="Phone Directory" instructor="Phani" />
    <div className='component-body-container'>
      
      <button className='custom-btn add-btn'>Add</button>
      <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
      this.props.subscribersList.map(sub => {
        return <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>
          <span className='grid-item'><button className='custom-btn delete-btn'>Delete</button></span>
          
          </div>
      })
    }
    </div>
    
    
    </div>
  );

  }
  
}

export default ShowSubscribers;
