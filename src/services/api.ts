const API_BASE_URL = '/api';

export interface Chocolate {
  id: string;
  name: string;
  image: string;
  alt: string;
  votes: number;
}

export interface Vote {
  id: string;
  chocolateId: string;
  timestamp: string;
}

export const getChocolates = async (): Promise<Chocolate[]> => {
  const response = await fetch(`${API_BASE_URL}/chocolates`);
  if (!response.ok) {
    throw new Error('Error al obtener las chocolatinas');
  }
  return response.json();
};

export const updateChocolateVotes = async (id: string, votes: number): Promise<Chocolate> => {
  const response = await fetch(`${API_BASE_URL}/chocolates/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ votes }),
  });
  
  if (!response.ok) {
    throw new Error('Error al actualizar los votos');
  }
  return response.json();
};

export const createVote = async (chocolateId: string): Promise<Vote> => {
  const response = await fetch(`${API_BASE_URL}/votes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chocolateId,
      timestamp: new Date().toISOString(),
    }),
  });
  
  if (!response.ok) {
    throw new Error('Error al crear el voto');
  }
  return response.json();
};

export const getVotes = async (): Promise<Vote[]> => {
  const response = await fetch(`${API_BASE_URL}/votes`);
  if (!response.ok) {
    throw new Error('Error al obtener los votos');
  }
  return response.json();
};
