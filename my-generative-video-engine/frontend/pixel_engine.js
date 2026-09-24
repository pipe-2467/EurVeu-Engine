class PixelEngine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    renderFrame(frame, totalFrames) {
        const imgData = this.ctx.createImageData(this.width, this.height);
        const data = imgData.data;
        const t = frame / 30; // Time in seconds

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const idx = (y * this.width + x) * 4;
                let r = 10, g = 10, b = 20; // Background Sky

                // 1. Procedural Buildings (ตึกเมืองชุลมุน)
                if (y > 300) {
                    r = 25; g = 25; b = 35;
                    if ((x % 30 < 24) && (y % 40 < 30)) {
                        if (Math.sin(x * y + t * 10) > 0.6) {
                            r = 255; g = 200; b = 50; // หน้าต่างตึกเปิดไฟ
                        }
                    }
                }

                // 2. Procedural Cabbage (ผักกาดปราบสงคราม โผล่ช่วงเฟรมที่ 90+)
                if (frame > 90) {
                    const cx = 180;
                    const cy = 280;
                    const dx = x - cx;
                    const dy = y - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const wave = Math.sin(Math.atan2(dy, dx) * 8) * 6;

                    if (dist < 50 + wave) {
                        r = 30;
                        g = 160 + Math.floor(Math.sin(dist * 0.3 - t * 5) * 80);
                        b = 50;
                    }
                }

                data[idx] = r;
                data[idx + 1] = g;
                data[idx + 2] = b;
                data[idx + 3] = 255;
            }
        }
        this.ctx.putImageData(imgData, 0, 0);
    }
}
