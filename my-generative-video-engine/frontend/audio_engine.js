class AudioEngine {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }

    async init() {
        if (this.ctx.state === 'suspended') {
            await this.ctx.resume();
        }
    }

    playFrequencyForFrame(frame) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const time = frame / 30;

        let freq = 150 + Math.sin(time * 5) * 50; // เสียงชุลมุนตั้งต้น

        if (frame > 90) {
            freq = 523.25 + Math.sin(time * 15) * 200; // ความถี่ผักกาดตบปราบสงคราม (C5 Scale)
        }

        osc.type = frame > 90 ? 'sine' : 'sawtooth';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.033);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.033);
    }
}
