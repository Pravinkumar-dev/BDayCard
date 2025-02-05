import ButtonComponent from "../common/Button/ButtonComponent";

function Footer({ state, onClick }) {
  return (
    <footer className="text-white">
      <ButtonComponent isVisible={state.isVisible} handleClick={onClick} label={state.label} />
    </footer>
  );
}

export default Footer;
