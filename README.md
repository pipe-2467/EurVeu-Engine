# 🎬 Custom Generative Video Engine

ระบบสร้างวิดีโออนิเมชันอัตโนมัติระดับ **Pixel** และ **Audio Frequency** $100\%$ โดยไม่ใช้ไฟล์มีเดียสำเร็จรูป (`.png`, `.jpg`, `.mp3`) และ **ไม่ใช้ AI/Library สำเร็จรูปของคนอื่น**

---

## 📌 จุดเด่นของโปรเจกต์ (Features)
- **Zero External Assets:** ไม่ใช้รูปภาพหรือไฟล์เสียงสำเร็จรูป ระบบสังเคราะห์พิกเซลสดลง Canvas และยิงความถี่ $Hz$ ผ่าน Web Audio API
- **Web Scraping & Analysis:** ใช้ Python สแครปข้อมูลตัวอย่างจากอินเทอร์เน็ต แล้วสกัดออกมาเป็นค่าคณิตศาสตร์ Matrix (`data_rules.json`)
- **Procedural Frame Rendering:** คำนวณเฟรมภาพ $30\text{ FPS}$ แบบ Frame-by-Frame (ฉากเมืองชุลมุน และผักกาดปราบสงคราม)
- **Real-Time DSP Audio Synthesizer:** สังเคราะห์เสียงความถี่ Waveform (`sine`, `sawtooth`) ตามลำดับเวลาเฟรม

---

## 📂 โครงสร้างโฟลเดอร์ (Directory Structure)

```text
my-generative-video-engine/
├── .github/
│   └── workflows/
│       └── render_test.yml   # ระบบ CI/CD ทดสอบการประมวลผล
├── backend/
│   ├── scraper.py            # ดึงข้อมูลภาพ/เสียงดิบจากเว็บ
│   ├── analyzer.py           # สกัด Matrix RGB และค่าความถี่ Hz
│   └── data_rules.json       # ไฟล์เก็บค่าพารามิเตอร์คณิตศาสตร์
├── frontend/
│   ├── index.html            # หน้า UI แสดงผลวิดีโอ (สัดส่วน 9:16)
│   ├── pixel_engine.js       # อัลกอริทึมวาด Pixel สด
│   ├── audio_engine.js       # อัลกอริทึมยิงคลื่นความถี่ Hz สด
│   └── main.js               # ตัวคุม Video Frame Loop
├── README.md                 # คู่มือโปรเจกต์
└── requirements.txt          # รายการ Library ฝั่ง Python
