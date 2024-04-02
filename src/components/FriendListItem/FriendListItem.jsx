import css from "../FriendListItem/FriendListItem.module.css"
import clsx from 'clsx';
export default function FriendListItem({ friends: { avatar, name, isOnline, id } } ) {
    
    const statusFriends= clsx(css.text, isOnline ? css.isOnline : css.isOffline);
    return (
        <div>
        <img src={avatar} alt="Avatar" width="48" className={css.friendAvatar}/>
        <p className={css.friendName}>{name}</p>
        <p className={statusFriends}>{isOnline ? "Online" : "Offline"}</p>
      </div>
      
    )
}
