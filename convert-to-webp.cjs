const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const inputDir = './public/images';      // Asl rasmlar joylashgan papka
const outputDir = './public/images-webp'; // WebP rasmlar uchun papka

// Yangi katalog yaratish
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Katalogni o‘qib bo‘lmadi:', err);
        return;
    }

    files.forEach((file) => {
        const inputFile = path.join(inputDir, file);
        const outputFile = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

        sharp(inputFile)
            .webp({ quality: 80 }) // Sifatni 80% ga sozlash
            .toFile(outputFile)
            .then(() => {
                console.log(`Konvertatsiya qilindi: ${file} → ${outputFile}`);
            })
            .catch((err) => {
                console.error(`Xato: ${file} konvertatsiya bo‘lmadi`, err);
            });
    });
});
