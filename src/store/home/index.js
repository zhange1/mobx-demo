import {observable,action,runInAction,computed, makeObservable} from 'mobx'

export default class HomeStore {
  constructor(){
    makeObservable(this)
  }
  id = Math.random()
  @observable list = [
    {name:'张三',age:11},
    {name:'李四',age:12},
    {name:'王五',age:13},
    {name:'赵六',age:14}
  ]

  @action changeList = (params) => {
    this.list = [
      ...params
    ]
    console.log('改变')
    console.log('list',this.list)
  }
}