import useSound from "use-sound";

import hoverSfx from "../assets/samples/menu/button-hover.wav";
import buttonClickSfx from "../assets/samples/menu/button-click.wav";
import buttonEnterSfx from "../assets/samples/menu/button-enter.wav";
import logoClickSfx from "../assets/samples/menu/logo-click.wav";
import logoEnterSfx from "../assets/samples/menu/logo-enter.wav";
import projectHoverSfx from "../assets/samples/projects/default-hover.wav";
import projectSelectSfx from "../assets/samples/projects/project-select.wav";

function useButtonSfx() {
  const [playHover] = useSound(hoverSfx);
  const [playLogoClick] = useSound(logoClickSfx);
  const [playLogoEnter] = useSound(logoEnterSfx);

  const [playButtonClick] = useSound(buttonClickSfx, { volume: 0.5 });
  const [playButtonEnter] = useSound(buttonEnterSfx, { volume: 0.5 });

  const [playProjectHover] = useSound(projectHoverSfx);
  const [playProjectSelect] = useSound(projectSelectSfx);
  return {
    playHover: () => playHover(),
    playLogoClick: () => playLogoClick(),
    playLogoEnter: () => playLogoEnter(),
    playButtonClick: () => playButtonClick(),
    playButtonEnter: () => playButtonEnter(),
    playProjectHover: () => playProjectHover(),
    playProjectSelect: () => playProjectSelect(),
  };
}

export default useButtonSfx;