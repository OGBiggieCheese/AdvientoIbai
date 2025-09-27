import styles from './votar.module.scss'
import VotarItem from '../votarItem/votarItem'
import Podium from '../votarPodium/podium'
import { useState, useMemo } from 'react'
import chocolateImage from '../../assets/chocolate.webp'

const Votar = () => {
  const [votedItems, setVotedItems] = useState<Set<string>>(new Set())
  const [chocolateVotes, setChocolateVotes] = useState<Record<string, number>>({})

  const baseChocolates = [
    { id: '1', name: 'Chocolatina 1', image: 'https://picsum.photos/200/300?random=1', alt: 'Chocolatina 1' },
    { id: '2', name: 'Chocolatina 2', image: 'https://picsum.photos/200/300?random=2', alt: 'Chocolatina 2' },
    { id: '3', name: 'Chocolatina 3', image: 'https://picsum.photos/200/300?random=3', alt: 'Chocolatina 3' },
    { id: '4', name: 'Chocolatina 4', image: 'https://picsum.photos/200/300?random=4', alt: 'Chocolatina 4' },
    { id: '5', name: 'Chocolatina 5', image: 'https://picsum.photos/200/300?random=5', alt: 'Chocolatina 5' },
    { id: '6', name: 'Chocolatina 6', image: 'https://picsum.photos/200/300?random=6', alt: 'Chocolatina 6' },
    { id: '7', name: 'Chocolatina 7', image: 'https://picsum.photos/200/300?random=7', alt: 'Chocolatina 7' },
    { id: '8', name: 'Chocolatina 8', image: 'https://picsum.photos/200/300?random=8', alt: 'Chocolatina 8' },
    { id: '9', name: 'Chocolatina 9', image: 'https://picsum.photos/200/300?random=9', alt: 'Chocolatina 9' }
  ]

  const topChocolates = useMemo(() => {
    return baseChocolates
      .map(chocolate => ({
        ...chocolate,
        votes: chocolateVotes[chocolate.id] || 0
      }))
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 3)
      .filter(chocolate => chocolate.votes > 0)
  }, [chocolateVotes])

  const handleVote = (id: string) => {
    setVotedItems(prev => new Set([...prev, id]))
    setChocolateVotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }))
    console.log(`Voted for item: ${id}`)
  }

  return (
    <>
    <img src={chocolateImage} alt="Chocolate" className={styles.chocolateImage} />
    <section className={styles.votar}>
      <h2 className={styles.title}>Vota tu chocolatina favorita</h2>
      <h3 className={styles.subtitle}>Solo puedes votar una vez cada 24 hs</h3>

      <div className={styles.votarContainer}>
        <div className={styles.votarItemsContainer}>
          {baseChocolates.map((chocolate) => (
            <VotarItem
              key={chocolate.id}
              image={chocolate.image}
              alt={chocolate.alt}
              onVote={() => handleVote(chocolate.id)}
              isVoted={votedItems.has(chocolate.id)}
              voteCount={chocolateVotes[chocolate.id] || 0}
            />
          ))}
        </div>

        <div className={styles.votarTop}>
          <Podium topChocolates={topChocolates} />
        </div>
      </div>
    </section>
    </>
  )
}
  
  export default Votar