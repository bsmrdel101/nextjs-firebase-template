import { updateUsername, getUsers } from 'src/controllers/usersController';
import Layout from 'src/components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <p>Hello World!</p>
    </Layout>
  );
}
