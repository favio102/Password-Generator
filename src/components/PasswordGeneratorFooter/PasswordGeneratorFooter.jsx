import s from "./style.module.css";
import copyPaste from "../../assets/copy-paste.svg";

export function PasswordGeneratorFooter(props) {
  function saveInClipboard() {
    navigator.clipboard.writeText(props.password);
  }

  return (
    <div className={s.root} onClick={saveInClipboard}>
      <div>{props.password}</div>
      <img className={s.icon} src={copyPaste} alt="copy and paste" />
    </div>
  );
}
