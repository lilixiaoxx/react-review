class Image extends React.Component {
  render(){
    return (
      <div>
        <img src="https://1.bp.blogspot.com/-3CMTnxVnudM/VqprPp_mVEI/AAAAAAAACrk/DUuxnoCbuaw/s640/full-hd-happy-valentines-day-hd-wallpapers.jpg" />
      </div>
    )
  }
}

class Button extends React.Component {
  constructor(){
    super();
    this.state={
      showResult: true,
      image:"https://1.bp.blogspot.com/-3CMTnxVnudM/VqprPp_mVEI/AAAAAAAACrk/DUuxnoCbuaw/s640/full-hd-happy-valentines-day-hd-wallpapers.jpg"
    }
}
  toggleImage(){
    this.setState({ showResult: !this.state.showResult });
  }

  render(){
    return (
      <div>
        {this.state.showResult? <Image/> :null}
        <button onClick={this.toggleImage.bind(this)}>click me</button>
      </div>

    )
  }
}
ReactDOM.render(<Button/>, document.getElementById('app-container'));
