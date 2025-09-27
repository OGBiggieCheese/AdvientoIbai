import styles from './votarItem.module.scss'
import type { VotarItemProps } from '../../types'

const VotarItem = ({ image, alt, onVote, voteCount = 0 }: VotarItemProps) => {
  return (
    <div className={styles.votarItem}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={alt} 
          className={styles.image}
        />
      </div>
      
      <button 
        className={styles.voteButton}
        onClick={onVote}
      >
        <div className={styles.voteCount}>
          {voteCount}
        </div>
        <span className={styles.voteUp}> ▲ </span>
      </button>
    </div>
  )
}

export default VotarItem