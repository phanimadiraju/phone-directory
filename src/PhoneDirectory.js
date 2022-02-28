import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter, Routes,Route } from 'react-router-dom';

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            subscribersList:[
                {
                    id:1,
                    name:'Krishna',
                    phone:'9876543210'
                },
                {
                    id:2,
                    name:'Pasha',
                    phone:'9876789900'
                }
            ]
        }
    }

    addSubscriberHandler =(newSubscriber) =>{
        let subscribersList=this.state.subscribersList;
        if(subscribersList.length>0){
            newSubscriber.id= subscribersList[subscribersList.length-1].id +1;
        }else{
            newSubscriber.id=1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList:subscribersList});
        console.log(this.state.subscribersList);
    }
    render(){
        return(
            //<AddSubscriber  addSubscriberHandler={this.addSubscriberHandler}/>
            //<ShowSubscribers subscribersList={this.state.subscribersList}/>
            <BrowserRouter>
            <Routes>
                
                <Route exact path ="/" element={ <ShowSubscribers subscribersList={this.state.subscribersList}/>} />
                <Route exact path="/add" element={<AddSubscriber  addSubscriberHandler={this.addSubscriberHandler}/>}/>
                </Routes>
                </BrowserRouter>
        );
    }
}

export default PhoneDirectory;