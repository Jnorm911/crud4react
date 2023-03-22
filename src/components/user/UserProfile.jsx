import { useRecoilValue } from 'recoil';
import { userState } from '../../state/user';

const UserProfile = () => {
  const user = useRecoilValue(userState);
  const { email, role } = user.userData;

  return (
    <div className="centered">
      <div>
        <h1>My Profile</h1>
        <br />
        <p>Welcome, {email}!</p>
        <p>Your role is: {role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
