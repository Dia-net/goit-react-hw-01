import css from "../Profile/Profile.module.css"
export default function Profile({ 
name,
tag,
location,
image,
stats: { followers, views, likes }
}) {
return (
<div className={css.container}>
<div  className={css.userInfo}>
<img className={css.avatar}
src={image}
alt="Avatar"
/>
<p className={css.nameUser}>{name}</p>
<p className={css.userTag}>@{tag}</p>
<p className={css.userLocation}>{location}</p>
</div>

<ul className={css.userStats}>
<li className={css.statsInfo}>
<span>Followers:</span>
<span className={css.statsNumber}>{followers}</span>
</li>
<li className={css.statsInfo}>
<span>Views:</span>
<span className={css.statsNumber}>{views}</span>
</li>
<li className={css.statsInfo}>
<span>Likes:</span>
<span className={css.statsNumber}>{likes}</span>
</li>
</ul>
</div>
)
  }
  