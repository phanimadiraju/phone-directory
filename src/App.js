import Header from './Header';
import './App.css';

function App() {
  let subscribers=[
    {
      id:1,
      name:'Kishore',
      phone:'9988776655'
    },
  {
    id:2,
    name:'Ram',
    phone:'9988776644'
  }
  ]
  return (
    <div className='component-container'>
    <Header/>
    <div className='component-body-container'>
      
      <button className='custom-btn add-btn'>Add</button>
      <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
      subscribers.map(sub => {
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

export default App;
