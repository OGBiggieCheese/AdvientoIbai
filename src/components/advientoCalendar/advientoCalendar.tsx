import styles from './advientoCalendar.module.scss'
import type { AdvientoDay } from '../../types'

interface AdvientoCalendarProps {
  days: AdvientoDay[]
}

const AdvientoCalendar = ({ days }: AdvientoCalendarProps) => {
  const getSizeClass = (day: number) => {
    const sizeMap: { [key: number]: string } = {
      1: 'square', 2: 'rectangle', 3: 'square', 4: 'rectangleVertical', 5: 'square', 6: 'square', 7: 'rectangle',
      8: 'square', 9: 'square', 10: 'rectangleVertical', 11: 'square', 12: 'rectangle', 13: 'square', 14: 'square', 15: 'rectangleVertical',
      16: 'square', 17: 'square', 18: 'rectangle', 19: 'square', 20: 'rectangle', 21: 'rectangle', 22: 'square', 23: 'square', 24: 'rectangle'
    }
    return sizeMap[day] || 'square'
  }

  return (
    <section className={styles.advientoCalendar}>      
      <div className={styles.calendarGrid}>
        <div className={`${styles.day} ${styles.titleContainer}`}>
          <h2 className={styles.title}>Calendario de Adviento</h2>
        </div>
        
        {days.map((day) => {
          const sizeClass = getSizeClass(day.day)
          return (
            <div 
              key={day.day} 
              className={`${styles.day} ${styles[sizeClass]} ${day.isOpen ? styles.open : styles.closed}`}
            >
              <div className={styles.dayNumber}>{day.day}</div>
              {day.isOpen && (
                <>
                  <img 
                    src={`https://picsum.photos/240/150?random=${day.day}`}
                    alt={day.alt}
                    className={styles.backgroundImage}
                  />
                  <img 
                    src={`https://picsum.photos/240/150?random=${day.day}`}
                    alt={day.alt}
                    className={styles.backgroundImageBlur}
                  />
                </>
              )}
              <div className={styles.dayContent}>
                {day.isOpen ? (
                  <div className={styles.prizeInfo}>
                    <h4 className={styles.prizeName}>{day.prize}</h4>
                  </div>
                ) : day.day === 24 ? (
                  <div className={styles.specialContent}>
                    <p className={styles.specialText}>Premio a descubrir</p>
                  </div>
                ) : (
                  <div className={styles.lockedContent}>
                    <div className={styles.lockIcon}>🔒</div>
                    <p className={styles.lockedText}>Día {day.day}</p>
                  </div>
                )}
              </div>
              {day.isOpen && (
                <div className={styles.hoverWinner}>
                  <p className={styles.winnerText}>Ganador: {day.winner}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AdvientoCalendar