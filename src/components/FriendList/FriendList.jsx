import FriendListItem from "../FriendListItem/FriendListItem"
import css from "../FriendList/FriendList.module.css"
export default function FriendList ({friends}){
return(
    <ul className={css.list}>
        {friends.map((friend) => (
            <li key ={friend.id} className={css.friendsCard}>
		<FriendListItem friends={friend} />
	</li>
        ))}
	
</ul>
)
}
