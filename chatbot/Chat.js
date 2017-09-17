import React from 'react'
import {GiftedChat} from 'react-native-gifted-chat'

export default class Chat extends React.Component{
    state = {
        messages: []
    };
    componentWillMount() {
        
    }
    render(){
        return(
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) =>{
                    //send to backend
                }}
                user={{
                    _id:1,
                    name: this.props.name,
                }}
            />
        );
    }
    componentDidMount() {
    
    }

    componentWillUnmount(){

    }


}

Chat.defaultProps = {
    name: 'John Smith',
};
  
  Chat.propTypes = {
    name: React.PropTypes.string,
};