import { Component } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const user = { id: 1, name: 'John Doe', role: 'admin' };
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    const navigate = useNavigate();

    if (user && user.role === 'admin') {
      return <WrappedComponent {...this.props} />;
    }
    navigate('/unauthorized'); // Redirect the user to a different page
    return null;
  }
};

// Here you can make an API call to get the current user and their role
// Once you have the user, you can set the state with the user object
// For example, you can use the same API that you used to authenticate the user
// and get the user object with their role
// In this example, I'm just hardcoding the user object for simplicity
