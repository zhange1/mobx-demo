import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('stores')
@observer
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {stores} = this.props
    console.log('store:',stores)
    const {home : {id, list , changeList}} = stores
    let a = [
      {name:'已修改',age:1}
    ]

    return (
      <div>
        <h1>{id}</h1>
        {
          list.map((item,index)=>{
            return (
              <div key={index}>
                <span>{item.name}</span>
                <span>{item.age}</span>
              </div>
            )
          })
        }
        <button onClick={()=>{changeList(a)}}>按钮</button>
      </div>
    )
  }
}


export default App;