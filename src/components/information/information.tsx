import styles from './information.module.scss'
import logoBigibai from '../../assets/logo-bigibai.webp'
import Bigibai from '../../assets/ibai-illustration.webp'

const Information = () => {
  return (
    <section className={styles.information}>
      <img 
        src={logoBigibai} 
        alt="Logo Bigibai" 
        className={styles.logo}
      />
      
      <div className={styles.contentContainer}>
        <div className={styles.leftColumn}>
          <img src={Bigibai} alt="Ilustración Ibai" className={styles.bigIbai} />
        </div>
        
        <div className={styles.textContainer}>
            <div className={styles.mainLabel}>
                <h2 className={styles.mainText}>
                    ¡Nuevos detalles de la proxima edicion <span style={{ color: 'var(--color-yellow)' }}>BigIbai</span> proximamente!
                </h2>
            </div>
          <div className={styles.labelContainer}>
            <div className={styles.newLabel}>
              <span className={styles.smallLabel}>Nuevo</span>
            </div>
            <p className={styles.voteText}>¡Vota tu chocolatina favorita!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information