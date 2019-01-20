import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
class BookItem extends React.Component {
  render() {
    return (
      <div>
      <h2>Books</h2>
      <h4>Titles A-M</h4>
      <Grid>
      <Row className="show-grid">
      {
        this.props.booksSetA.map((item , i) => {
          let {title, imageLinks , infoLink, authors} = item.volumeInfo
          return (
            <Col xs={6} sm={4} className="no-gutters">
            <a href ={infoLink}
            target = "_blank"
            rel="noopener noreferrer"
            key={i} className = "book">
            <img
            src ={imageLinks !== undefined? imageLinks.thumbnail : ''}
            alt = {title}
            className = "bookImage"
            />
            <h5>{title }</h5>
            <p class="author">Author: <span class="authorText">{authors}</span> </p>
            </a>
            </Col>

          );
        })
      }
      </Row>
      </Grid>
      <br/>
      <hr/>
      <br/>
      <h4>Titles N-Z</h4>
      <Grid>
      <Row className="show-grid">

      {
        this.props.booksSetB.map((item , i) => {
          let {title, imageLinks , infoLink, authors} = item.volumeInfo
          return (
            <Col xs={6} sm={4} className="no-gutters">
            <a href ={infoLink}
            target = "_blank"
            rel="noopener noreferrer"
            key={i} className = "book">
            <img
            src ={imageLinks !== undefined? imageLinks.thumbnail : ''}
            alt = {title}
            className = "bookImage"
            />
            <h5>{title }</h5>
            <p class="author">Author: <span class="authorText">{authors}</span> </p>
            </a>
            </Col>

          );
        })
      }
      </Row>
      </Grid>
      </div>
    )
  }
}
export default BookItem
