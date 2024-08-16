import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import React from 'react'

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.dribbble.com/users/221753/screenshots/1214929/dribbl_counter.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            AutoCounter
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
