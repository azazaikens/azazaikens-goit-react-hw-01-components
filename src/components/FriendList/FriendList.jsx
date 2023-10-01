import style from './FriendList.module.css';

const FriendsListItem = ({ isOnline = false, avatar, name }) => {
  return (
      <li className={style.item}>
      <span
        className={`${style.status}  ${isOnline ? style.on : style.off}`}
      ></span>
          <img className={style.avatar} src={avatar} alt={name} width="48" />
          <p className={style.name}>{name}</p>
    </li>
  );
};

const FriendsList = ({ friends }) => {
  return (
      <ul className={style.friendList}>
          {
              friends.map(el => {
                  return (
                      <FriendsListItem key={el.id} isOnline={el.isOnline} avatar={el.avatar} name={el.name} />
                  )
              })
          }
    </ul>
  );
};

export default FriendsList;
