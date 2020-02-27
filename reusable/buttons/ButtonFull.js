const styles = {
  buttonFull: {
    border: "1px solid red",
    background: "red",
    fontSize: 16,
    padding: 10
  }
  buttonFullBlue:{
    border: '1px solid blue',
    background: 'blue',
    fontSize: 16,
    padding:10
  }
  buttonFullWhite:{
    border: '1px solid grey',
    background:'none',
    fontSize: 16,
    padding: 10
  }
};

export const ButtonFull = ({ title = "Danger" }) => {
  return <button style={styles.buttonFull}>{title}</button>;
};

export const ButtonFull = ({title = "Info"}) => {
  return <button style={styles.buttonFullBlue}>{title}</button>;
};

export const ButtonFull = ({title='Default'}) =>{
  return <button style={styles.buttonFullWhite}>{title}</button>;
};
