$(document).ready(function () {
  const ROOT_EL = $("#root");
  for (const { name, dateOfDeath, description, link, photo } of DATA) {
    $(`
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	    <div class="flipper">
		    <div class="front">
          <img src="${photo}" alt="${name}" />
          <div>
            <h2>${name}</h2>
            <p>${dateOfDeath}</p>
          </div>
        </div>
        <div class="back">
          <p>${description}</p>
          <a href="${link}" >Իմանալ Ավելին</a>
        </div>
      </div>
    </div>
    `).appendTo(ROOT_EL)
  }
});
