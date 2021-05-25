import React, { Component } from 'react'
import './app.css';
import Habbits from './components/habits';
import Navigationbar from './components/navbar';
import Add from './components/add';
import Reset from './components/reset';

export default class App extends Component {
  state = {
    habits : [
      
    ],
};

    handleIncrement = (habit) => {
        // // 내 코드
        // this.state.habits[habit.id].count ++;
        // this.setState(this.state.habits);
        // console.log(this.state.habits[habit.id]);
        // // 쉬운 코드
        // habit.count++;
        // this.setState(this.state);
        // 엘리님 코드 (state 직접 수정 x !!!!)
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits[index].count++;
        // this.setState({habits});
        const habits = this.state.habits.map(item => {
          if(item.id === habit.id){
            return {...habit, count: habit.count +1 }
          } 

          return item;
        });
        this.setState({habits});
        
    };

    handleDecrement = (habit) => {
        // // 내 코드
        // this.state.habits[habit.id].count --;
        // if(this.state.habits[habit.id].count<0){
        //     this.state.habits[habit.id].count = 0 ; 
        // } 
        // this.setState(this.state.habits);
        // console.log(this.state.habits[habit.id]);
        // 엘리님 코드 
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // const count = habits[index].count -1;
        // this.setState({habits});
        const habits = this.state.habits.map(item => {
          if(item.id === habit.id){
            const count = habit.count -1;
            return {...habit, count: count<0 ? 0 : count }
          } 

          return item;
        });
        this.setState({habits});
        
    }; 

    handleDelete = (habit) => {
        // // 내코드
        // delete this.state.habits[habit.id];
        // this.setState(this.state.habits);
        // 엘리님 코드 
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };
    
    handleAdd = (habitName) => {
        const habits = [...this.state.habits, {id:Date.now(), name : habitName, count:0}];
        this.setState({habits});
    }

    handleReset = () => {
      // const habits = [...this.state.habits];
      // habits.map(habit=>(
      //   habit.count = 0
      // ));
      // this.setState({habits});

      const habits = this.state.habits.map(habit => {
        if(habit.count !==0){
          return {...habit, count : 0};
        }
         return habit
      });
      console.log(habits);
      this.setState({habits});
      

    }

  render() {
    return (
      <>
      <Navigationbar total={this.state.habits.filter(item=>item.count>0).length}/>
      {/* <Add
        onAdd={this.handleAdd}
      /> */}
      <Habbits 
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onReset={this.handleReset}
      />
      {/* <Reset onReset={this.handleReset}/> */}
      </>
    )
  }
}
