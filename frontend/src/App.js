import React, {Component} from 'react';
import axios from 'axios';
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount()
          {
            axios.get('http://192.168.1.137:4000/users')
            .then(response=>{
              console.log(response);
              const updatedrows=response.data.map(row=>{
              return {
                ...row,
                author:'Ravali'
              }
            })
            this.setState({users:updatedrows});
            }).catch(err => {
            console.log('caught it!',err);
            })
          }
    render() {

      const posts=this.state.users.map(post=>
              {
                 return(
                   <div>
                <p>{post.empid}</p>
                <p>{post.empname}</p>
                <p>{post.addr}</p>
                </div>
              )
              })


        return (
        <div className="container">
            <div className="panel panel-default p50 uth-panel">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                        <td>{posts}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}
