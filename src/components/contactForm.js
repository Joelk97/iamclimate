import styles from "../app/page.module.css";
import stylesContact from "../app/contact.module.css";

const ContactForm = (props) => {
  return (
    <div className={styles.containerRiservala}>
      <h1 className={styles.titleSection}>{props.title}</h1>
      <div className={stylesContact.contactModuleContainer}>
        <div className={`${stylesContact.name} ${stylesContact.inputs}`}>
          <label for="name">Nome</label>
          <input type="text" name="name"></input>
        </div>
        <div className={`${stylesContact.email} ${stylesContact.inputs}`}>
          <label for="email">Email</label>
          <input type="text" name="email"></input>
        </div>
        <div className={`${stylesContact.message} ${stylesContact.inputs}`}>
          <label for="message">Messaggio</label>
          <input type="text" name="message"></input>
        </div>
        <button className={`${styles.buttonMore} ${stylesContact.button}`}>
          Invia
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
