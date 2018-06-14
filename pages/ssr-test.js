import axios from 'axios';
import mainTemplate from '../components/templates/Main';

class SSRTest extends React.Component {
  static async getInitialProps(context) {
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

export default mainTemplate(SSRTest);
