import useSound from "use-sound";

import hoverSfx from "../assets/samples/menu/button-hover.wav";
import buttonClickSfx from "../assets/samples/menu/button-click.wav";
import buttonEnterSfx from "../assets/samples/menu/button-enter.wav";
import logoClickSfx from "../assets/samples/menu/logo-click.wav";
import logoEnterSfx from "../assets/samples/menu/logo-enter.wav";

function useButtonSfx() {
  const [playHover] = useSound(hoverSfx);
  const [playLogoClick] = useSound(logoClickSfx);
  const [playLogoEnter] = useSound(logoEnterSfx);

  const [playButtonClick] = useSound(buttonClickSfx, { volume: 0.5 });
  const [playButtonEnter] = useSound(buttonEnterSfx, { volume: 0.5 });

  return {
    playHover: () => playHover(),
    playLogoClick: () => playLogoClick(),
    playLogoEnter: () => playLogoEnter(),
    playButtonClick: () => playButtonClick(),
    playButtonEnter: () => playButtonEnter(),
  };
}

export default useButtonSfx;