import styles from './votar.module.scss'
import VotarItem from '../votarItem/votarItem'
import Podium from '../votarPodium/podium'
import { useState, useMemo, useEffect } from 'react'
import chocolateImage from '../../assets/chocolate.webp'
import { getChocolates, updateChocolateVotes, createVote, type Chocolate } from '../../services/api'

const Votar = () => {
  const [votedItems, setVotedItems] = useState<Set<string>>(new Set())
  const [chocolates, setChocolates] = useState<Chocolate[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadChocolates = async () => {
      try {
        const data = await getChocolates()
        setChocolates(data)
        setLoading(false)
      } catch (error) {
        console.error('Error al cargar las chocolatinas:', error)
        setLoading(false)
      }
    }
    loadChocolates()
  }, [])

  const topChocolates = useMemo(() => {
    return chocolates
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 3)
      .filter(chocolate => chocolate.votes > 0)
  }, [chocolates])

  const handleVote = async (id: string) => {
    try {
      await createVote(id)
      
      const chocolate = chocolates.find(c => c.id === id)
      if (chocolate) {
        const newVotes = chocolate.votes + 1
        await updateChocolateVotes(id, newVotes)
        
        setChocolates(prev => 
          prev.map(c => c.id === id ? { ...c, votes: newVotes } : c)
        )
        setVotedItems(prev => new Set([...prev, id]))
      }
    } catch (error) {
      console.error('Error al votar:', error)
    }
  }

  return (
    <>
    <img src={chocolateImage} alt="Chocolate" className={styles.chocolateImage} />
    <section className={styles.votar}>
      <h2 className={styles.title}>¡Vota tu chocolatina favorita!</h2>
      <h3 className={styles.subtitle}>Solo puedes votar una vez cada 24 hs</h3>

      <div className={styles.votarContainer}>
        <div className={styles.votarItemsContainer}>
          {loading ? (
            <p>Cargando chocolatinas...</p>
          ) : (
            chocolates.map((chocolate) => (
              <VotarItem
                key={chocolate.id}
                image={chocolate.image}
                alt={chocolate.alt}
                onVote={() => handleVote(chocolate.id)}
                isVoted={votedItems.has(chocolate.id)}
                voteCount={chocolate.votes}
              />
            ))
          )}
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