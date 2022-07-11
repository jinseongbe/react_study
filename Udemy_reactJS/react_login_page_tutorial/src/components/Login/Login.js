import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6};
  } 
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6};
  }
  return { value: '', isValid: false};
} 

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: undefined });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: undefined });

  // destructuring을 통해 useEffect가 너무 많이 바뀌는 것을 방지하는 구문, 아래는 destructuring을 통해 유효값이 변경될때만 useEffect가 실행하도록 만듬
  // 핵심은 destructuring이 아니라 전체 개체대신 특정 속성을 종속성으로 전달한다는 것이다!
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('checking form validity!')
      setFormIsValid(
        emailIsValid && passwordIsValid
      );  
    }, 500);

    return () => { // useEffect에서 반환되는 첫번째 반환 함수는 맨 처음에는 실행되지 않지만, 그 다음 컴포넌트들이 바뀔때 마다 제일 먼저 실행됨 -> 그 다음에 useEffect 안의 명령들이 실행됨
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const authCtx = useContext(AuthContext);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          emailState={emailState}
          emailChangeHandler={emailChangeHandler}
          validateEmailHandler={validateEmailHandler}  
        />
        <Input 
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          emailState={passwordState}
          emailChangeHandler={passwordChangeHandler}
          validateEmailHandler={validateEmailHandler}  
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
