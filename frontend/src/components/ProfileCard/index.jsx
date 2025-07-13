import styles from '../../pages/MeetTheTeam/MeetTheTeam.module.css';

const ProfileCard = ({ name, role, desc, img }) => (
  <div className={styles.card}>
    <div className={styles.cardOverlaySquare}></div>
    <div className={styles.profilePic}>
      {img && <img src={img} alt={name} className={styles.profileImg} />}
    </div>
    <div className={styles.profileName}>{name}</div>
    <div className={styles.profileRole}>{role}</div>
    <div className={styles.profileDescription}>{desc}</div>
  </div>
);

export default ProfileCard; 