gsap.registerPlugin(Flip);
let memories = gsap.utils.toArray(".a");
let gimg = memories[0];

memories.forEach((memory) => {
  memory.addEventListener('click', (e) => changeGrid(memory))
})

function changeGrid(memory) {
  if (memory === gimg) return;

  let state = Flip.getState(memories)

  gimg.dataset.grid = memory.dataset.grid;
  memory.dataset.grid = 'img-1';
  gimg = memory;

  Flip.from(state, {
    absolute: true,
    ease: 'Power1.inOut'
  })
}