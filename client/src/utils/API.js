import axios from 'axios'

export default {
    getMessages: function(){
        return axios.get('/api/messages')
    }, 
    saveMessage: function(userData){
        return axios.post('/api/messages', userData)
    }
}; 