import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App() {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>

            <section>
                {fact && <p>{fact}</p>}
                <img src={imageUrl} alt={`Image extracted using... ${fact}`} />
            </section>
        </main>
    )
}
