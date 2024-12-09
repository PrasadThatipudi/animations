function scrollText(screen) {
  let frames = "";

  for (let index = 0; index < screen.length; index++) {
    frames += screen.join("");
    const char = screen.shift();
    screen.push(char);
  }

  return frames;
}

function displayAnimFormat(width, height, frames) {
  console.log(width, height);
  console.log(frames);
}

function main() {
  const text = "Hello";
  const width = 20;
  const screen = (text.padStart(width)).split("");

  const frames = scrollText(screen, text);
  displayAnimFormat(width, 1, frames);
}

main();
