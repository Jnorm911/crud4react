import { useRecoilValue } from 'recoil';
import { userState } from '../state/user';
import Unauthorized from '../components/pages/Unauthorized';
import { Navigate } from 'react-router-dom';

const withAdminRole = (Component) => {
  const WithAdminRole = (props) => {
    const user = useRecoilValue(userState);

    if (!user.isLoggedIn) {
      return <Navigate to="/login" />;
    }

    if (user.userData.role !== 'Admin') {
      return <Unauthorized />;
    }

    return <Component {...props} />;
  };

  return WithAdminRole;
};

export default withAdminRole;