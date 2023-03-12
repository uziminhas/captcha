export default function randomBlurb() {
  const lines = [
    "Here are your captions!",
    "Captions, fresh out of the oven!",
    "Get your captions!",
    "Your captions are brewed to perfection!",
    "Your captions have dropped!",
    "Enjoy your captions!",
    "Boom, your captions just landed!",
    "Captions are up and running, let's do this!",
    "We just dropped your captions, get ready to slay!",
  ];

  return lines[Math.floor(Math.random() * lines.length)];
}
