const styles = {
  buttonOutline: {
    border: "1px solid red",
    background: "none",
    fontSize: 16,
    padding: 10
  }
  buttonOutlineBlue:{
    border: '1px solid blue',
    background: 'none',
    fontSize: 16,
    padding: 10
  }
  buttonOutlineWhite:{
    border:'1px solid grey',
    background: 'none',
    fontSize: 16,
    padding: 10
  }
};

export const ButtonOutline = ({ title = "Button" }) => {
  return <button style={styles.buttonOutline}>{title}</button>;
};
