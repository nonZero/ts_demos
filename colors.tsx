const COLORS = ["red", "green", "blue", "purple", "black"];

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

export default getRandomColor;
