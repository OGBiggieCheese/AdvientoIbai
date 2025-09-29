import styles from './testimonios.module.scss'
import Testimonio from '../testimonio/testimonio'
import chocolateImage from '../../assets/chocolate.webp'

interface TestimonioData {
  id: string
  texto: string
  ganador: string
  casilla: number
}

const testimoniosData: TestimonioData[] = [
  {
    id: '1',
    texto: 'Me llamo Ismael y soy uno de los compradores del calendario de adviento que han lanzado este año. Quiero felicitarles por la iniciativa, ya que me parece una idea muy original y emocionante.',
    ganador: 'Ismael Pardo',
    casilla: 0
  },
  {
    id: '2',
    texto: 'Estoy muy emocionado y ansioso por tener la Steam Deck y poder jugar en ella.',
    ganador: 'Mikel Alonso',
    casilla: 2
  },
  {
    id: '3',
    texto: 'Muchas gracias, me hace mucha ilusión haber ganado el premio, sigo a Ibai desde hace unos cuantos años y me emociona mucho haber ganado el premio.',
    ganador: 'Arnau Mas',
    casilla: 1
  },
  {
    id: '4',
    texto: 'Enhorabuena por el proyecto, me parece increíble. Al menos, mi hija y yo, os agradecemos que sea tan chulo y la calidad sea tan buena.',
    ganador: 'Anass El Bouainbi',
    casilla: 0
  },
  {
    id: '5',
    texto: 'Lo primero, daros las gracias y la enhorabuena por el gran trabajo que hacéis.',
    ganador: 'Davinia M',
    casilla: 22
  },
  {
    id: '6',
    texto: 'Ojala ojala ojala la magia de la Navidad me llegue. Aixx, como me gustaría que me tocara algo para el calendario... :P Gracias a toda la gente que está detrás de todo esto! Buenas fiestas y feliz año nuevo',
    ganador: 'Ferran Garcia',
    casilla: 0
  }
]

const Testimonios = () => {
  return (
    <>
    <img src={chocolateImage} alt="Chocolate" className={styles.chocolateImage} />
    <section id="testimonios" className={styles.testimonios}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Testimonios</h2>
        </div>
        
        <div className={styles.testimoniosList}>
          {testimoniosData.map((testimonio) => (
            <Testimonio
              key={testimonio.id}
              texto={testimonio.texto}
              ganador={testimonio.ganador}
              casilla={testimonio.casilla}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonios

