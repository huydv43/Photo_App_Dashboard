import React, { useState } from 'react';
import './Login.scss';
import Images from '../../constants/Images';
import { Container, Form, Button, Col, Row, Image } from 'react-bootstrap';

import PropTypes from 'prop-types';
import Auth from '../../apis/Auth';
import { useHistory } from 'react-router';

Login.propTypes = {
    handleSetAuth: PropTypes.func,
};
Login.defaultPropTypes = {
    handleSetAuth: null
}

function Login(props) {
    const {handleSetAuth} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            const requestAuth = await Auth.login({email, password});
            if (requestAuth.status === 200 && requestAuth.data.success == true) {
                localStorage.setItem('token', requestAuth.data.token);
                setTimeout(() => {
                    history.push('/');
                }, 1000)
            } 
        } catch (error) {
            throw (error)
        }
    }
 
    return (
        <div className="authentication">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xl={3} lg={4} md={8} sm={12}>
                        
                        <Form className="custom-form" onSubmit={submitLogin}>
                            <div className="header">
                                <Image className="custom-form__img" src={Images.LOGO_LOGIN} />
                                <h3 className="header__title">Admin Dashboard</h3>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button className="btn__submit" variant="primary" type="submit">
                                SIGN IN
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;