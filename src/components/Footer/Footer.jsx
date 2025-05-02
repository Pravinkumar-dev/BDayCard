import ButtonComponent from "../Common/Button/ButtonComponent";

function Footer({ state, onClick }) {
  return (
    <footer className="text-white pb-24">
      <ButtonComponent
        isVisible={state.isVisible}
        handleClick={onClick}
        label={state.label}
      />
    </footer>
  );
}

export default Footer;
