import React from 'react';
import styles from './faq.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Hasta qué día puedo participar en el sorteo?",
    answer: "¡El sorteo ya ha finalizado! Cerró el 8 de diciembre de 2024 a las 23:59:59h."
  },
  {
    question: "Me han regalado el calendario de adviento y no tengo el ticket de compra. ¿Qué puedo hacer?",
    answer: "Si no dispones del ticket de compra, podrás utilizar un extracto bancario donde se verifique la compra y la fecha en Carrefour. Además, es fundamental conservar físicamente el calendario y la casilla del día 1, que contiene el código alfanumérico necesario para el registro y un código QR. Esto será válido para participar en el sorteo. En cualquier caso, sólo se te hará esta comprobación en caso de resultar ganador del sorteo, no para registrarte."
  },
  {
    question: "¿Cómo participo en el sorteo y dónde encuentro el código que necesito para el registro?",
    answer: "Dentro de la casilla del día 1 de diciembre (búscala en tu calendario), encontrarás un código alfanumérico que necesitas para registrarte."
  },
  {
    question: "El código que introduzco no es válido. ¿Qué debo hacer?",
    answer: "Asegúrate de introducir correctamente todos los caracteres del código alfanumérico, y como consulta habitual, es importante que los ceros llevan un punto en medio y las \"O\"s no. Si te sigue ocurriendo algún error, envíanos por favor la foto del código de la casilla 1, y pantallazo del error que aparece. Todo esto, al email hola@bigibai.com."
  },
  {
    question: "Si he pagado en efectivo... ¿Cómo puedo participar en el sorteo?",
    answer: "De momento, puedes registrarte sin problema utilizando el código alfanumérico que encontrarás dentro de la casilla del día 1 de tu calendario. Es importante conservar esta casilla físicamente, ya que contiene también un código QR. En caso de resultar ganador, podríamos solicitar alguna comprobación adicional, pero si eres el comprador, no habrá inconveniente."
  },
  {
    question: "¿Cómo sé si he ganado algún premio del sorteo?",
    answer: "Cada día se publicará el Nombre del ganador. Podrás verlo entrando en la casilla correspondiente al día que toca. Los ganadores se anunciarán a las 19:00 h (hora peninsular española)."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>Preguntas Frecuentes</h2>
        <div className={styles.faqGrid}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.questionContainer}>
                <div className={styles.questionIcon}>
                  <span className={styles.questionMark}>?</span>
                </div>
                <h3 className={styles.question}>{item.question}</h3>
              </div>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
