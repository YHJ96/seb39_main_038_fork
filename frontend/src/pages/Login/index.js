import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { atoms } from '../../store';
import LoginNav from './LoginNav';
import ProviderLogin from './ProviderLogin';
import ConsumerLogin from './ConsumerLogin';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const toRegister = !location.state;
  const [isChecked, setIsChecked] = useState(toRegister);
  const isLogin = useRecoilValue(atoms.isLogin);

  useEffect(() => {
    if (isLogin.state) {
      alert('접근할 수 없습니다.');
      navigate('/');
    }
  }, [isLogin.state, navigate]);

  return (
    <>
      <LoginNav isChecked={isChecked} setIsChecked={setIsChecked} />
      {isChecked ? <ConsumerLogin /> : <ProviderLogin />}
    </>
  );
}

export default Login;
