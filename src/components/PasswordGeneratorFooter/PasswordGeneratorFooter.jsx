import s from "./style.module.css";
import copyPaste from "../../assets/copy-paste.svg";

export function PasswordGeneratorFooter(props) {
  return (
    <div className={s.root}>
      <div>{props.password}</div>
      <img className={s.icon} src={copyPaste} alt="copy and paste" />
    </div>
  );
}
