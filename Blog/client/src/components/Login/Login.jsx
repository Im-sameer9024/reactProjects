
import assets from '../../assets/images/assets';
import { Form, Button, Card, Row } from 'react-bootstrap'
import './Login.scss'
import { useState } from 'react';

export default function Login() {

  const [login, setLogin] = useState(false)

  const [formData, setFormData] = useState({ name: "", username:"",password:"" })


  const handleChange = (e) => {
    const{name,value} = e.target;
    setFormData({...formData, [name]:value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="container-fluid">
      <div className="row mx-auto">
        <div className="col-4 mx-auto">
          <Card style={{ width: 'full', fontFamily: "Small-Heading" }}>
            <Card.Img variant="top" className=' px-4' src={assets.logo} />
            <Card.Body className=' '>
              <Form className='mb-3' onSubmit={handleSubmit}>
                <Row className={`mb-3 ${login ? " opacity-100 d-block " : " opacity-0 d-none "}`}>
                  <Form.Group >
                    <Form.Control type="text" placeholder="Enter Name" className='no-border ' name='name' value={formData.name} onChange={handleChange} />
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Enter Username" className='no-border  ' name='username' value={formData.username} onChange={handleChange} />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group>
                    <Form.Control type="password" placeholder="Enter Password" className='no-border  ' name='password' value={formData.password} onChange={handleChange} />
                  </Form.Group>
                </Row>
                <Row className='mx-4'>
                  <Button type='submit' className=' fw-bold btn btn-warning '>{login ? "SignUp" : "LogIn"}</Button>
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
