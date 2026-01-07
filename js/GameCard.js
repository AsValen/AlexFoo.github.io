export function GameCard(game) {
  return (
    <div class="game-card-container">
        <div class="game-image-container">
            <img src={game.image} alt={game.title} class="game-image" />
        </div>
        <div class="game-creationinfo-container">
              <div>
                  <i class="fa-solid fa-play"></i>
                  <p class="game-creation-people">{game.creation.people}</p>
              </div>
              <div>
                  <i class="fa-solid fa-play"></i>
                  <p class="game-creation-time">{game.creation.time}</p>
              </div>
              <div>
                  <i class="fa-solid fa-play"></i>
                  <p class="game-creation-engine">{game.creation.engine}</p>
              </div>
        </div>
        <div class="game-desc-container">
            <a href="#"><h3 class="game-title">{game.title}</h3></a>
            <p class="game-description">{game.description}</p>
        </div>
    </div>
  );
}