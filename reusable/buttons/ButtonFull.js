const styles = {
  buttonFull: {
    border: "1px solid red",
    background: "red",
    fontSize: 16,
    padding: 10
  }
};

export const ButtonFull = ({ title = "Button" }) => {
  return <button style={styles.ButtonFull}>{title}</button>;
};
