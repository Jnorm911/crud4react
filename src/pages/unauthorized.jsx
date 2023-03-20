import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div>
      <h1>401 Unauthorized</h1>
      <p>You are not authorized to access this page.</p>
      <p>
        Please
        {' '}
        <Link to="/users/login">log in</Link>
        {' '}
        with an authorized account to continue.
      </p>
    </div>
  );
}

export default Unauthorized;
