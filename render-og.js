import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function run() {
  try {
    const svgPath = path.join(process.cwd(), 'public', 'og-image.svg');
    const pngPath = path.join(process.cwd(), 'public', 'og-image.png');
    
    console.log('Reading SVG content...');
    let svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // Resolve relative path to local avatar for the compilation process
    const localAvatarPath = path.join(process.cwd(), 'public', 'avatar.jpg');
    svgContent = svgContent.replace(
      'href="https://www.saadslab.online/avatar.jpg"',
      `href="${localAvatarPath}"`
    );
    
    console.log('Converting SVG to high-quality 1200x630 PNG...');
    await sharp(Buffer.from(svgContent))
      .png({ quality: 100 })
      .resize(1200, 630)
      .toFile(pngPath);
      
    console.log('PNG generated successfully at:', pngPath);
  } catch (error) {
    console.error('Failed to render OG PNG:', error);
    process.exit(1);
  }
}

run();
