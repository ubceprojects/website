import "../../pages/MeetTheTeam/style.css";

const ProfileCard = ({ name, role, desc, img }) => (
    <div className="card">
        <div className={"cardOverlaySquare"}></div>
        <div className={"profilePic"}>{img && <img src={img} alt={name} className={"profileImg"} />}</div>
        <div className={"profileName"}>{name}</div>
        <div className={"profileRole"}>{role}</div>
        <div className={"profileDescription"}>{desc}</div>
    </div>
);

export default ProfileCard;
