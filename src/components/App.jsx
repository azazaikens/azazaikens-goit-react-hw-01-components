import Profile from "./Profile/Profile";
import user from './Profile/user.json'
import Statistics from './Statistics/Statistics'
import data from './Statistics/data.json'
import FriendList from './FriendList/FriendList'
import friends from './FriendList/friends.json'
import Transation from './TransactionHistory/TransactionHistory'
import transations from './TransactionHistory/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transation transation={transations} />
    </div>
  );
};
