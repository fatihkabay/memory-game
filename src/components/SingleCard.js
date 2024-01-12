import "./SingleCard.css"

export default function SingleCard({ card }) {
  return (
    <div className="card">
              <div>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="/assets/cover.png" alt="card back" />
              </div>
            </div>
  )
}
