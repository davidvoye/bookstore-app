import React from 'react';
import BookItem from './BookItem'
import {FormControl, FormGroup, ControlLab, InputGroup, Glyphicon} from 'react-bootstrap'
var booksAthroughM = []
var booksNthroughZ = []

function compare(a, b) {
  const bookTitleA = a.volumeInfo.title[0].toUpperCase();
  const bookTitleB = b.volumeInfo.title[0].toUpperCase();

  let comparison = 0;
  if (bookTitleA > bookTitleB) {
    comparison = 1;
  } else if (bookTitleA < bookTitleB) {
    comparison = -1;
  }
  return comparison;
}

export default class BookApiInfo extends React.Component {
  constructor (props){
    super(props)
    this.state={
      query: '',
      items: [],
      booksSetA: [],
      booksSetB: []
    }
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=tech")
    .then(response => response.json())
    .then(json => {
      let {items} = json;
      this.setState({
        items : items,
      })
      var reg = /^[a-m]+$/i
      var reg2 = /^[n-z]+$/i
      items.forEach(function (arrayItem) {
        if ((arrayItem.volumeInfo.title[0]).match(reg)) {
          booksAthroughM.push(arrayItem)
        }
      })
      items.forEach(function (arrayItem) {
        if ((arrayItem.volumeInfo.title[0]).match(reg2)) {
          booksNthroughZ.push(arrayItem)
        }
      })
      this.setState({
        booksSetA: booksAthroughM.sort(compare),
        booksSetB: booksNthroughZ.sort(compare)
      })
      console.log(booksAthroughM)
      console.log(booksNthroughZ)
    })
  }




  render() {
    return (
      <div>
      <form>
      <FormGroup>
      <InputGroup>
      <FormControl type="text" placeholder="Search for a book" onChange={this.handleChange}
      onKeyPress={this.handleKeyPress}/>
      <InputGroup.Addon onClick={this.search}>
      <Glyphicon glyph="search"></Glyphicon>
      </InputGroup.Addon>
      </InputGroup>
      </FormGroup>
      </form>
      <BookItem items={this.state.items} booksSetA={this.state.booksSetA} booksSetB={this.state.booksSetB}  />
      </div>
    )
  }
}
