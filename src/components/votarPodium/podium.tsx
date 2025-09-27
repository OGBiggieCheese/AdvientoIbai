import styles from './podium.module.scss'
import type { PodiumProps } from '../../types'

const Podium = ({ topChocolates }: PodiumProps) => {
  if (topChocolates.length === 0) {
    return (
      <div className={styles.podiumContainer}>
        <p className={styles.noVotes}>¡Vota para ver el podio!</p>
      </div>
    )
  }

  return (
    <div className={styles.podiumContainer}>
      
      <div className={styles.podium}>
        {topChocolates[1] && (
          <div className={`${styles.podiumPosition} ${styles.secondPlace}`}>
            <div className={styles.chocolateInfo}>
              <img 
                src={topChocolates[1].image} 
                alt={topChocolates[1].alt}
                className={styles.chocolateImage}
              />
            </div>
            <div className={styles.podiumSquares}>
              <div className={`${styles.square} ${styles.firstSquare}`}>
                <div className={styles.voteInfo}>
                  <div className={styles.medalEmoji}>🥈</div>
                  <div className={styles.voteContent}>
                    <div className={styles.voteCount}>{topChocolates[1].votes}</div>
                    <div className={styles.voteLabel}>Votos totales</div>
                  </div>
                </div>
              </div>
              <div className={styles.square}></div>
            </div>
          </div>
        )}

        {topChocolates[0] && (
          <div className={`${styles.podiumPosition} ${styles.firstPlace}`}>
            <div className={styles.chocolateInfo}>
              <img 
                src={topChocolates[0].image} 
                alt={topChocolates[0].alt}
                className={styles.chocolateImage}
              />
            </div>
            <div className={styles.podiumSquares}>
              <div className={`${styles.square} ${styles.firstSquare}`}>
                <div className={styles.voteInfo}>
                  <div className={styles.medalEmoji}>🥇</div>
                  <div className={styles.voteContent}>
                    <div className={styles.voteCount}>{topChocolates[0].votes}</div>
                    <div className={styles.voteLabel}>Votos totales</div>
                  </div>
                </div>
              </div>
              <div className={styles.square}></div>
              <div className={styles.square}></div>
            </div>
          </div>
        )}

        {topChocolates[2] && (
          <div className={`${styles.podiumPosition} ${styles.thirdPlace}`}>
            <div className={styles.chocolateInfo}>
              <img 
                src={topChocolates[2].image} 
                alt={topChocolates[2].alt}
                className={styles.chocolateImage}
              />
            </div>
            <div className={styles.podiumSquares}>
              <div className={`${styles.square} ${styles.firstSquare}`}>
                <div className={styles.voteInfo}>
                  <div className={styles.medalEmoji}>🥉</div>
                  <div className={styles.voteContent}>
                    <div className={styles.voteCount}>{topChocolates[2].votes}</div>
                    <div className={styles.voteLabel}>Votos totales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Podium
