
import assets from '../../assets/images/assets';
import { Form, Button, Card, Row } from 'react-bootstrap'
import './Login.scss'
import { useState } from 'react';

export default function Login() {

  const [login, setLogin] = useState(false)


  return (
    <div className="container-fluid">
      <div className="row mx-auto">
        <div className="col-4 mx-auto">
          <Card style={{ width: 'full', fontFamily: "Small-Heading" }}>
            <Card.Img variant="top" className=' px-4' src={assets.logo} />
            <Card.Body className=' '>
              <Form className='mb-3'>
                <Row className={`mb-3 ${login ? "d-block opacity-100 " : " d-none opacity-0 "}`}>
                  <Form.Group >
                    <Form.Control type="text" placeholder="Enter Name" className='no-border ' />
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group className=''>
                    <Form.Control type="text" placeholder="Enter Username" className='no-border  ' />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className=''>
                    <Form.Control type="text" placeholder="Enter Password" className='no-border  ' />
                  </Form.Group>
                </Row>
                <Row className='mx-4'>
                  <Button className=' fw-bold btn btn-warning '>{login ? "SignUp" : "LogIn"}</Button>
                </Row>
              </Form>
              <Row>
                <p className=' text-center'>OR</p>
              </Row>
              <Row className='mx-4'>
                <button onClick={() => setLogin(!login)} type='button' className=' btn btn-outline-info '>{login ? "Already have an Account" : "Create Account"}</button>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
