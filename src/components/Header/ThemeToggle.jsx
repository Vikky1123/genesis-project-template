
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({
  switchBtnBgColor = "rgb(0, 208, 148)",
  switchBtnImgSrc = "wp-content/themes/bitrader/assets/img/icons/moon.svg"
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="lightdark-switch">
      <span 
        className="switch-btn dark-btn" 
        id="btnSwitch" 
        style={{ backgroundColor: switchBtnBgColor }}
        onClick={toggleTheme}
      >
        <img 
          src={switchBtnImgSrc} 
          alt="light-dark-switchbtn" 
          className="swtich-icon" 
        />
      </span>
    </div>
  );
};

export default ThemeToggle;
