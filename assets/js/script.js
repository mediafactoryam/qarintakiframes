$(document).ready(function () {
  const ROOT_EL = $("#root");
  for (const { name, dateOfDeath, description, link, photo } of DATA) {
    $(`
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <h2>${name}</h2>
	    <div class="flipper">
		    <div class="front">
                <img src="${photo}" alt="${name}" />
            </div>
            <div class="back">
                <p>${description}</p>
                <a href="${link}" >Իմանալ Ավելին</a>
            </div>
        </div>
        <p>${dateOfDeath}</p>
    </div>
    `).appendTo(ROOT_EL)
  }
});
