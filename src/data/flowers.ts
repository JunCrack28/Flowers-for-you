export interface FlowerData {
  id: number
  x: number
  y: number
  scale: number
  rotation: number
  delay: number
  petalCount: number
  color: string
  windOffset: number
}

export const FLOWER_POSITIONS: FlowerData[] = [
  // Centro principal
  { id: 1, x: 50, y: 55, scale: 1.2, rotation: 0, delay: 0, petalCount: 8, color: '#FCD34D', windOffset: 0 },
  { id: 2, x: 35, y: 50, scale: 1, rotation: -15, delay: 200, petalCount: 6, color: '#F59E0B', windOffset: 1 },
  { id: 3, x: 65, y: 50, scale: 1, rotation: 15, delay: 400, petalCount: 7, color: '#FCD34D', windOffset: 2 },
  
  // Segunda fila
  { id: 4, x: 42, y: 38, scale: 0.85, rotation: -25, delay: 600, petalCount: 6, color: '#FDE68A', windOffset: 0.5 },
  { id: 5, x: 58, y: 38, scale: 0.85, rotation: 25, delay: 800, petalCount: 6, color: '#F59E0B', windOffset: 1.5 },
  { id: 6, x: 50, y: 32, scale: 0.75, rotation: 0, delay: 1000, petalCount: 5, color: '#FCD34D', windOffset: 1 },
  
  // Laterales
  { id: 7, x: 25, y: 60, scale: 0.9, rotation: -30, delay: 1200, petalCount: 6, color: '#FDE68A', windOffset: 2 },
  { id: 8, x: 75, y: 60, scale: 0.9, rotation: 30, delay: 1400, petalCount: 6, color: '#F59E0B', windOffset: 0 },
  { id: 9, x: 30, y: 45, scale: 0.7, rotation: -40, delay: 1600, petalCount: 5, color: '#FCD34D', windOffset: 1 },
  { id: 10, x: 70, y: 45, scale: 0.7, rotation: 40, delay: 1800, petalCount: 5, color: '#FDE68A', windOffset: 2 },
  
  // Detalles superiores
  { id: 11, x: 45, y: 25, scale: 0.6, rotation: -10, delay: 2000, petalCount: 5, color: '#FCD34D', windOffset: 0.5 },
  { id: 12, x: 55, y: 25, scale: 0.6, rotation: 10, delay: 2200, petalCount: 5, color: '#F59E0A', windOffset: 1.5 },
]

// Flores adicionales que aparecen gradualmente
export const EXTRA_FLOWERS: FlowerData[] = [
  // Primeras flores extra - aparecen a los 3 segundos
  { id: 13, x: 20, y: 70, scale: 0.65, rotation: -50, delay: 3000, petalCount: 5, color: '#FDE68A', windOffset: 1.5 },
  { id: 14, x: 80, y: 70, scale: 0.65, rotation: 50, delay: 3200, petalCount: 5, color: '#FCD34D', windOffset: 2 },
  { id: 15, x: 15, y: 50, scale: 0.55, rotation: -60, delay: 3400, petalCount: 5, color: '#F59E0B', windOffset: 0.5 },
  { id: 16, x: 85, y: 50, scale: 0.55, rotation: 60, delay: 3600, petalCount: 5, color: '#FDE68A', windOffset: 1 },
  
  // Más flores - aparecen a los 5 segundos
  { id: 17, x: 38, y: 18, scale: 0.5, rotation: -20, delay: 5000, petalCount: 4, color: '#FCD34D', windOffset: 2 },
  { id: 18, x: 62, y: 18, scale: 0.5, rotation: 20, delay: 5200, petalCount: 4, color: '#F59E0B', windOffset: 0 },
  { id: 19, x: 22, y: 35, scale: 0.55, rotation: -45, delay: 5400, petalCount: 5, color: '#FDE68A', windOffset: 1.5 },
  { id: 20, x: 78, y: 35, scale: 0.55, rotation: 45, delay: 5600, petalCount: 5, color: '#FCD34D', windOffset: 2.5 },
  
  // Últimas flores - aparecen a los 7 segundos
  { id: 21, x: 10, y: 65, scale: 0.45, rotation: -70, delay: 7000, petalCount: 4, color: '#F59E0B', windOffset: 1 },
  { id: 22, x: 90, y: 65, scale: 0.45, rotation: 70, delay: 7200, petalCount: 4, color: '#FDE68A', windOffset: 0.5 },
  { id: 23, x: 50, y: 12, scale: 0.4, rotation: 0, delay: 7400, petalCount: 4, color: '#FCD34D', windOffset: 1.5 },
  { id: 24, x: 28, y: 22, scale: 0.45, rotation: -30, delay: 7600, petalCount: 4, color: '#F59E0B', windOffset: 2 },
  { id: 25, x: 72, y: 22, scale: 0.45, rotation: 30, delay: 7800, petalCount: 4, color: '#FDE68A', windOffset: 1 },
]

export const LEAF_POSITIONS = [
  { x: 38, y: 68, rotation: -60, scale: 0.8, delay: 800 },
  { x: 62, y: 68, rotation: 60, scale: 0.8, delay: 1000 },
  { x: 32, y: 58, rotation: -70, scale: 0.6, delay: 1400 },
  { x: 68, y: 58, rotation: 70, scale: 0.6, delay: 1600 },
  { x: 42, y: 72, rotation: -50, scale: 0.7, delay: 1200 },
  { x: 58, y: 72, rotation: 50, scale: 0.7, delay: 1400 },
]