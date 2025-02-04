import ButtonComponent from "../common/Button/ButtonComponent";

function Footer({ state, onClick }) {
  console.log(state.isVisible, "state");
  return (
    <footer className="text-white">
      <ButtonComponent isVisible={state.isVisible} handleClick={onClick} label={state.label} />
    </footer>
  );
}

export default Footer;
