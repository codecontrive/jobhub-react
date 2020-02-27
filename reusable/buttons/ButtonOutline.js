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

export const ButtonOutline = ({ title = "Danger" }) => {
  return <button style={styles.buttonOutline}>{title}</button>;
};

export const ButtonOutline = ({title = "Info"}) => {
  return <button style={styles.buttonOutlineBlue}>{title}</button>;
}

export const ButtonOutline=({title='Default'}) => {
  return <button style={styles.buttonOutlineWhite}>{title}</button>;
}
