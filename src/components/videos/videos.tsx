import styles from './videos.module.scss'

interface VideoData {
  id: string
  title: string
  thumbnail: string
  videoUrl: string
}

const videosData: VideoData[] = [
  {
    id: '1',
    title: 'Video 1',
    thumbnail: 'https://picsum.photos/320/568?random=1',
    videoUrl: 'https://example.com/video1'
  },
  {
    id: '2',
    title: 'Video 2',
    thumbnail: 'https://picsum.photos/320/568?random=2',
    videoUrl: 'https://example.com/video2'
  },
  {
    id: '3',
    title: 'Video 3',
    thumbnail: 'https://picsum.photos/320/568?random=3',
    videoUrl: 'https://example.com/video3'
  },
  {
    id: '4',
    title: 'Video 4',
    thumbnail: 'https://picsum.photos/320/568?random=4',
    videoUrl: 'https://example.com/video4'
  }
]

const Videos = () => {
  return (
    <section className={styles.videos}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Videos en redes sociales</h2>
        </div>
        
        <div className={styles.videosList}>
          {videosData.map((video) => (
            <div key={video.id} className={styles.videoItem}>
              <div className={styles.videoContainer}>
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className={styles.thumbnail}
                />
                <button className={styles.playButton}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Videos
