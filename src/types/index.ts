export interface Chocolate {
  id: string
  name: string
  image: string
  alt: string
  votes: number
}

export interface PodiumItem {
  id: string
  name: string
  image: string
  alt: string
  votes: number
}

export interface PodiumProps {
  topChocolates: PodiumItem[]
}

export interface VotarItemProps {
  image: string
  alt: string
  onVote: () => void
  isVoted?: boolean
  voteCount?: number
}
