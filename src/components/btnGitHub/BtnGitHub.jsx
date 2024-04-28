import gitHubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGitHub = ({link}) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={link}
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
