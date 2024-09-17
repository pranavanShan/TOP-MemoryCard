import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryGame } from './memoryGame'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoryGame></MemoryGame>
  </StrictMode>,
)
