import "./style.css";
import { useState } from "react";

type toggleProps = {
  toggled: boolean;
  onClickCallback: any;
};

function Toggle({ toggled, onClickCallback }: toggleProps) {
  const [isToggled, setToggle] = useState(toggled);

  const callback = () => {
    setToggle(!isToggled);
    onClickCallback(!isToggled);
  };

  return (
    <label className="toggle-wrapper">
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span />
    </label>
  );
}

export default Toggle;
