import { useRecoilValue } from 'recoil';
import { userState } from '../../../state/user';

const LoginSuccess = () => {
  const user = useRecoilValue(userState);
  const { email, role } = user.userData;

  return (
    <div className="centered">
      <div>
        <h1>Login Successful!</h1>
        <p>Welcome, {email}!</p>
        <p>Your role is: {role}</p>
      </div>
    </div>
  );
};

export default LoginSuccess;
