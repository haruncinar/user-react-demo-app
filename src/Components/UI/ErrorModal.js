import Button from "../Button/Button";
import classes from "./ErrorModal.module.css";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div>
      <Card className={classes.modal}>
        <div className={classes.backdrop} onClick={props.onConfirm}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
