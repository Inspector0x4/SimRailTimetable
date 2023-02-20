import React from "react";
import styles from "./DiscordLogo.module.css";

const DiscordLogo = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const rotationClass = isHovering ? styles.rotate : "";

  return (
    <a href="https://discord.gg/simrail" target='_blank' rel="noreferrer" >
    <img
      src="/discord-logo.svg"
      alt="Discord Logo"
      className={`${styles.logo} ${rotationClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
    </a>
  );
};

export default DiscordLogo;
