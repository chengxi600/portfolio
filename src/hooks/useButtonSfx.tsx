import useSound from "use-sound";

import hoverSfx from "../assets/samples/menu/button-hover.wav";
import buttonClickSfx from "../assets/samples/menu/button-click.wav";
import buttonSelectSfx from "../assets/samples/menu/button-select.wav";

function useButtonSfx() {
  const [playHover] = useSound(hoverSfx);
  const [playLogoClick] = useSound(buttonSelectSfx);
  const [playLogoEnter] = useSound(buttonClickSfx);

  const [playButtonClick] = useSound(buttonClickSfx, { volume: 0.5, playbackRate: 3 });
  const [playButtonEnter] = useSound(buttonSelectSfx, { volume: 0.5, playbackRate: 3 });

  return {
    playHover: () => playHover(),
    playLogoClick: () => playLogoClick(),
    playLogoEnter: () => playLogoEnter(),
    playButtonClick: () => playButtonClick(),
    playButtonEnter: () => playButtonEnter(),
  };
}

export default useButtonSfx;