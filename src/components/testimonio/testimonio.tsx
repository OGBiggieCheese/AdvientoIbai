import styles from './testimonio.module.scss'

interface TestimonioProps {
  texto: string
  ganador: string
  casilla: number
}

const Testimonio = ({ texto, ganador, casilla }: TestimonioProps) => {
  return (
    <div className={styles.testimonio}>
      <div className={styles.content}>
        <p className={styles.texto}>"{texto}"</p>
        <div className={styles.info}>
          <span className={styles.ganador}>{ganador}</span>
          <span className={styles.casilla}>
            {casilla > 0 ? `Ganador de la casilla ${casilla}` : 'Comprador del calendario'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Testimonio

