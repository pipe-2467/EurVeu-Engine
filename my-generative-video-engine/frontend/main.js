const canvas = document.getElementById('viewport');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');

const pixelEngine = new PixelEngine(ctx, 360, 640);
const audioEngine = new AudioEngine();

const FPS = 30;
const TOTAL_FRAMES = FPS * 8; // วิดีโอยาว 8 วินาที
let currentFrame = 0;
let isPlaying = false;

startBtn.addEventListener('click', async () => {
    if (isPlaying) return;
    await audioEngine.init();
    isPlaying = true;
    currentFrame = 0;
    
    function loop() {
        if (currentFrame < TOTAL_FRAMES) {
            pixelEngine.renderFrame(currentFrame, TOTAL_FRAMES);
            audioEngine.playFrequencyForFrame(currentFrame);
            currentFrame++;
            setTimeout(loop, 1000 / FPS);
        } else {
            isPlaying = false;
        }
    }
    
    loop();
});
