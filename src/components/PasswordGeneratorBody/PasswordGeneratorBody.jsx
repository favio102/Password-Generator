import s from "./style.module.css";

export function PasswordGeneratorBody() {
  return (
    <form>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          Size
          <select name="values" defaultValue={15}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className={s.grid_item}>
          UpperCase
          <input type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Numbers
          <input type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Specials
          <input type="checkbox" defaultChecked />
        </div>
      </div>
        <div className={s.btn_container}>
          <button type="submit" className={s.btn_generate}>
            GENERATE
          </button>
        </div>
    </form>
  );
}
