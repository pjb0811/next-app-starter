import axios from 'axios';
import Layout from '../components/hoc/Layout';

class SSRTest extends React.Component {
  static async getInitialProps({ req }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return {
      users: response.data
    };
  }

  render() {
    const { users } = this.props;

    const userList = users.map(user => <li key={user.id}>{user.username}</li>);

    return <ul>{userList}</ul>;
  }
}

export default Layout(SSRTest);
