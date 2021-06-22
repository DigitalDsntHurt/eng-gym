const { Component, useEffect, useState, useContext } = React

// Beer recipes
const url = 'https://api.punkapi.com/v2/beers'

// Part 1: Fetch endpoint and display a list of all recipe names
// Part 2: Create a simple filter search bar that will filter recipe names by text included in name or description of recipe, case insensitive.

// input search
// state: query
  // when we update query state
    // invoke a filter function that filters this.state.beers


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      query: '',
    }

    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidMount() {
    axios.get(url)
    .then(results => {
      // console.log(results.data)
      this.setState({
        beers: results.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  updateQuery(event) {
    // read input off event
    // update query state
    this.setState({
      query: event.target.value
    })
    // console.log(this.state.query);
    // apply the filter
    // this.setState({
      // beers: this.state.beers.filter(beer => {
      //   return beer.name.toLowerCase().includes(this.state.query);
      // })
    // })

    // prevent default
    event.preventDefault();
  }



  render(){
    // console.log(this.state.beers)
    let displayBeers = this.state.beers.filter(beer => {
        return beer.name.toLowerCase().includes(this.state.query) || beer.description.toLowerCase().includes(this.state.query);
      });

    return <>
      <div>
        <form>
          <input type='text' value={this.state.query} onChange={this.updateQuery}></input>
        </form>
      </div>

      <div>
      {displayBeers.map(obj => (
        <div>{obj.name}</div>
      ))}
     </div>
    </>
  }

}

ReactDOM.render(
	<App />,
  document.getElementById('root')
);
