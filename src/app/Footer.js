import React from 'react'
import {Grid, Col} from 'react-bootstrap'
const Footer = () => {
  return (
    <div>
    <footer className="page-footer">
    <h4 className="text-center">ASSEMBLE BOOKS</h4>
    <Grid>
    <Col xs={12} sm={4} className="text-center">
    <ul className="list-unstyled">
    <li><a href="https://weassemble.com/" target="_blank" rel="noopener noreferrer">LINK</a></li>
    <li><a href="https://weassemble.com/" target="_blank" rel="noopener noreferrer">LINK</a></li>
    <li><a href="https://weassemble.com/" target="_blank" rel="noopener noreferrer">LINK</a></li>
    </ul>
    </Col>
    <Col xs={12} sm={4} className="text-center">
    <ul className="list-unstyled">
    <li><a href="https://weassemble.com/" target="_blank" rel="noopener noreferrer">LINK</a></li>
    <li><a href="https://weassemble.com/" target="_blank" rel="noopener noreferrer">LINK</a></li>
    <li><a href="https://weassemble.com/" target="_blank" rel="noopener noreferrer">LINK</a></li>
    </ul>
    </Col>
    <Col xs={12} sm={4} className="text-center">
    <ul className="list-unstyled">
    <li><a href="https://weassemble.com/" target="_blank" rel="noopener noreferrer">LINK</a></li>
    <li><a href="https://weassemble.com/" target="_blank" rel="noopener noreferrer">LINK</a></li>
    <li><a href="https://weassemble.com/" target="_blank" rel="noopener noreferrer">LINK</a></li>
    </ul>
    </Col>
    </Grid>
    <div class="footer-copyright text-center py-3">© 2019 Copyright: Assemble Books
    </div>
    </footer>
    </div>
  )
}
export default Footer
