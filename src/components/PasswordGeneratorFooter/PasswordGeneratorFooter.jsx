import s from "./style.module.css";
import copyPaste from "../../assets/copy-paste.svg"

export function PasswordGeneratorFooter() {
  return (
    <div className={s.root}>
      <div>super password</div>
      <img className={s.icon} src={copyPaste} alt="copy and paste" />
    </div>
  );
}
