import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

async function generatePDF() {
  console.log('Starting PDF generation...');

  const resumeDir = path.join(process.cwd(), 'public', 'resume');
  if (!fs.existsSync(resumeDir)) {
    fs.mkdirSync(resumeDir, { recursive: true });
  }

  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 40, bottom: 40, left: 45, right: 45 }
  });

  const outputPath = path.join(resumeDir, 'Ahmad_Saad_Resume.pdf');
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Styling Constants
  const COLOR_PRIMARY = '#18181B'; // Zinc-900 / Deep Slate
  const COLOR_SECONDARY = '#52525B'; // Zinc-600 / Subdued Slate
  const COLOR_ACCENT = '#D49A2D'; // Gold Accent (consistent with luxury brand)
  const COLOR_LIGHT_BORDER = '#E4E4E7'; // Zinc-200
  
  // Custom Fonts (Using standard clean built-in Helvetica / Helvetica-Bold)
  const FONT_REGULAR = 'Helvetica';
  const FONT_BOLD = 'Helvetica-Bold';
  const FONT_ITALIC = 'Helvetica-Oblique';

  // --- HEADER SECTION ---
  // Left Column Header Details
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(26)
     .text('Ahmad Saad', 45, 40);

  doc.fillColor(COLOR_ACCENT)
     .font(FONT_BOLD)
     .fontSize(9.5)
     .text('DESIGNING EXPERIENCES. INSPIRING CONNECTIONS.', 45, 72, { characterSpacing: 1.2 });

  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8.5)
     .text('UX & Digital Product Designer • Creative Brand Identity Specialist', 45, 87);

  // Right Column Header Details (Contact Info)
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9)
     .text('New Delhi, India', 380, 44, { align: 'right', width: 187 });

  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text('ahmadsaad9129@gmail.com', 380, 58, { align: 'right', width: 187 })
     .text('linkedin.com/in/ahmadsaad9129', 380, 71, { align: 'right', width: 187 })
     .text('www.saadslab.online', 380, 84, { align: 'right', width: 187 });

  // Elegant Divider Lines below Header
  doc.strokeColor(COLOR_ACCENT)
     .lineWidth(1.5)
     .moveTo(45, 105)
     .lineTo(567, 105)
     .stroke();

  doc.strokeColor(COLOR_LIGHT_BORDER)
     .lineWidth(0.5)
     .moveTo(45, 109)
     .lineTo(567, 109)
     .stroke();

  // --- TWO-COLUMN BODY LAYOUT ---
  const leftColX = 45;
  const leftColWidth = 320;
  const rightColX = 385;
  const rightColWidth = 182;
  
  // Track vertical Y positioning dynamically
  let leftY = 125;
  let rightY = 125;

  // Draw elegant vertical separator line between columns
  doc.strokeColor(COLOR_LIGHT_BORDER)
     .lineWidth(0.5)
     .moveTo(375, 125)
     .lineTo(375, 730)
     .stroke();

  // ==================== LEFT COLUMN ====================
  
  // Section: Professional Experience
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(12)
     .text('PROFESSIONAL EXPERIENCE', leftColX, leftY, { characterSpacing: 0.8 });
  
  // Section underline
  leftY += 15;
  doc.strokeColor(COLOR_PRIMARY)
     .lineWidth(1)
     .moveTo(leftColX, leftY)
     .lineTo(leftColX + leftColWidth, leftY)
     .stroke();
  
  leftY += 12;

  // --- Job 1 (TAQNIK) ---
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9.5)
     .text('UX Designer | Client Experience Specialist', leftColX, leftY);
  
  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text('June 2026 – Present', leftColX + leftColWidth - 95, leftY, { width: 95, align: 'right' });

  leftY += 11;
  doc.fillColor(COLOR_ACCENT)
     .font(FONT_BOLD)
     .fontSize(7.5)
     .text('TAQNIK', leftColX, leftY);

  leftY += 10;
  const bulletsJob1 = [
    'Collaborating with clients to understand business goals, gather requirements, and deliver user-centered digital solutions.',
    'Driving stakeholder collaboration, UX strategy mapping, requirements gathering, and client discovery processes.'
  ];

  bulletsJob1.forEach(bullet => {
    doc.fillColor(COLOR_PRIMARY)
       .font(FONT_REGULAR)
       .fontSize(7.5);
    
    doc.rect(leftColX + 4, leftY + 2.5, 2, 2).fill();
    
    doc.text(bullet, leftColX + 11, leftY, {
      width: leftColWidth - 11,
      lineGap: 1
    });
    
    leftY += doc.heightOfString(bullet, { width: leftColWidth - 11, lineGap: 1 }) + 3;
  });

  leftY += 4;

  // --- Job 2 (Freelance) ---
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9.5)
     .text('Freelance Graphic & UX Designer', leftColX, leftY);
  
  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text('2023 – Present', leftColX + leftColWidth - 80, leftY, { width: 80, align: 'right' });

  leftY += 11;
  doc.fillColor(COLOR_ACCENT)
     .font(FONT_BOLD)
     .fontSize(7.5)
     .text('INDEPENDENT PRACTICE', leftColX, leftY);

  leftY += 10;
  const bulletsJob2 = [
    'Designing user-centered digital products, brand identity books, interfaces, and visual assets for local and international clients.',
    'Delivering responsive web layouts in Figma, following WCAG contrast ratios and robust modular layouts.',
    'Continuously researching emerging interactive systems, spatial AR filters, and advanced design tokens.'
  ];

  bulletsJob2.forEach(bullet => {
    doc.fillColor(COLOR_PRIMARY)
       .font(FONT_REGULAR)
       .fontSize(7.5);
    
    doc.rect(leftColX + 4, leftY + 2.5, 2, 2).fill();
    
    doc.text(bullet, leftColX + 11, leftY, {
      width: leftColWidth - 11,
      lineGap: 1
    });
    
    leftY += doc.heightOfString(bullet, { width: leftColWidth - 11, lineGap: 1 }) + 3;
  });

  leftY += 4;

  // --- Job 3 (CodeAlpha) ---
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9.5)
     .text('UI/UX Designer Intern', leftColX, leftY);
  
  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text('Dec 2025', leftColX + leftColWidth - 80, leftY, { width: 80, align: 'right' });

  leftY += 11;
  doc.fillColor(COLOR_ACCENT)
     .font(FONT_BOLD)
     .fontSize(7.5)
     .text('CODEALPHA', leftColX, leftY);

  leftY += 10;
  const bulletsJob3 = [
    'Collaborated on designing complex information boards, dashboard data layouts, and detailed user journey wireframes.',
    'Prototyped multi-screen workflows in Figma, increasing user task success through clean visual hierarchy.',
    'Conducted usability checks and integrated stakeholder feedback under quick iteration cycles.'
  ];

  bulletsJob3.forEach(bullet => {
    doc.fillColor(COLOR_PRIMARY)
       .font(FONT_REGULAR)
       .fontSize(7.5);
    
    doc.rect(leftColX + 4, leftY + 2.5, 2, 2).fill();
    
    doc.text(bullet, leftColX + 11, leftY, {
      width: leftColWidth - 11,
      lineGap: 1
    });
    
    leftY += doc.heightOfString(bullet, { width: leftColWidth - 11, lineGap: 1 }) + 3;
  });

  leftY += 4;

  // --- Job 4 (Aquargin) ---
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9.5)
     .text('UX Designer & Social Media Intern', leftColX, leftY);
  
  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text('Mar 2025 – Sept 2025', leftColX + leftColWidth - 100, leftY, { width: 100, align: 'right' });

  leftY += 11;
  doc.fillColor(COLOR_ACCENT)
     .font(FONT_BOLD)
     .fontSize(7.5)
     .text('AQUARGIN PVT. LTD.', leftColX, leftY);

  leftY += 10;
  const bulletsJob4 = [
    'Crafted clean mobile and desktop user interfaces, greatly improving digital brand equity and aesthetic alignment.',
    'Created high-sentiment corporate visual guidelines, unifying typography and spacing rules for public-facing assets.',
    'Integrated with front-end teams to support asset handoffs and verify faithful HTML/CSS translation of designs.'
  ];

  bulletsJob4.forEach(bullet => {
    doc.fillColor(COLOR_PRIMARY)
       .font(FONT_REGULAR)
       .fontSize(7.5);
    
    doc.rect(leftColX + 4, leftY + 2.5, 2, 2).fill();
    
    doc.text(bullet, leftColX + 11, leftY, {
      width: leftColWidth - 11,
      lineGap: 1
    });
    
    leftY += doc.heightOfString(bullet, { width: leftColWidth - 11, lineGap: 1 }) + 3;
  });

  leftY += 12;

  // Section: Notable Projects
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(12)
     .text('NOTABLE PROJECTS', leftColX, leftY, { characterSpacing: 0.8 });
  
  leftY += 15;
  doc.strokeColor(COLOR_PRIMARY)
     .lineWidth(1)
     .moveTo(leftColX, leftY)
     .lineTo(leftColX + leftColWidth, leftY)
     .stroke();
  
  leftY += 12;

  // Project 1
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9.5)
     .text('Food Waste Management System (UX Case Study)', leftColX, leftY);
  
  leftY += 12;
  const projDesc1 = 'Designed an interactive logistics platform connecting food donors with nonprofit organizations, streamlining excess pickup submissions from 9 steps down to a frictionless 3-step action.';
  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text(projDesc1, leftColX + 4, leftY, { width: leftColWidth - 4, lineGap: 1.5 });

  leftY += doc.heightOfString(projDesc1, { width: leftColWidth - 4, lineGap: 1.5 }) + 10;

  // Project 2
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9.5)
     .text('Interactive Snapchat Lenses (AR Experience)', leftColX, leftY);
  
  leftY += 12;
  const projDesc2 = 'Engineered custom augmented reality lenses inside Snapchat Lens Studio using coordinate mapping, shader textures, and lightweight scripting to produce highly engaging spatial games.';
  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text(projDesc2, leftColX + 4, leftY, { width: leftColWidth - 4, lineGap: 1.5 });

  // ==================== RIGHT COLUMN ====================
  
  // Section: Education
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(11)
     .text('EDUCATION', rightColX, rightY, { characterSpacing: 0.8 });
  
  rightY += 15;
  doc.strokeColor(COLOR_PRIMARY)
     .lineWidth(1)
     .moveTo(rightColX, rightY)
     .lineTo(rightColX + rightColWidth, rightY)
     .stroke();
  
  rightY += 12;

  // Edu 1
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9)
     .text('MBA in Business Analytics', rightColX, rightY);
  rightY += 11;
  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text('UPES University', rightColX, rightY);
  rightY += 10;
  doc.fillColor(COLOR_ACCENT)
     .font(FONT_BOLD)
     .fontSize(7.5)
     .text('2025 – PRESENT', rightColX, rightY);
  
  rightY += 16;

  // Edu 2
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9)
     .text("Master's Certification (UX/UI)", rightColX, rightY);
  rightY += 11;
  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text('Jamia Millia Islamia University', rightColX, rightY);
  rightY += 10;
  doc.fillColor(COLOR_ACCENT)
     .font(FONT_BOLD)
     .fontSize(7.5)
     .text('COMPLETED 2025', rightColX, rightY);

  rightY += 16;

  // Edu 3
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(9)
     .text('BCA (Computer Applications)', rightColX, rightY);
  rightY += 11;
  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_REGULAR)
     .fontSize(8)
     .text('Integral University', rightColX, rightY);
  rightY += 10;
  doc.fillColor(COLOR_ACCENT)
     .font(FONT_BOLD)
     .fontSize(7.5)
     .text('2022 – 2025', rightColX, rightY);

  rightY += 25;

  // Section: Design Toolkit
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(11)
     .text('DESIGN TOOLKIT', rightColX, rightY, { characterSpacing: 0.8 });
  
  rightY += 15;
  doc.strokeColor(COLOR_PRIMARY)
     .lineWidth(1)
     .moveTo(rightColX, rightY)
     .lineTo(rightColX + rightColWidth, rightY)
     .stroke();
  
  rightY += 12;

  const toolkit = [
    { title: 'DESIGN', desc: 'UI Design, UX Design, Wireframing, Prototyping, Design Systems' },
    { title: 'AI', desc: 'Prompt Engineering, AI Workflow Design, AI-Assisted Design, AI Research' },
    { title: 'BRANDING', desc: 'Brand Identity, Logo Design, Visual Branding' },
    { title: 'GROWTH', desc: 'Content Strategy, Lead Generation, Client Outreach, Digital Marketing' },
    { title: 'TOOLS', desc: 'Figma, Canva, ChatGPT, Claude, Lovable, Cursor, GitHub, Netlify' }
  ];

  toolkit.forEach(item => {
    doc.fillColor(COLOR_PRIMARY)
       .font(FONT_BOLD)
       .fontSize(7.5)
       .text(item.title, rightColX, rightY, { characterSpacing: 0.5 });
    
    rightY += 9;
    
    doc.fillColor(COLOR_SECONDARY)
       .font(FONT_REGULAR)
       .fontSize(8)
       .text(item.desc, rightColX, rightY, { width: rightColWidth, lineGap: 1.5 });
    
    rightY += doc.heightOfString(item.desc, { width: rightColWidth, lineGap: 1.5 }) + 6;
  });

  rightY += 10;

  // Section: Honors & Roles
  doc.fillColor(COLOR_PRIMARY)
     .font(FONT_BOLD)
     .fontSize(11)
     .text('HONORS & ROLES', rightColX, rightY, { characterSpacing: 0.8 });
  
  rightY += 15;
  doc.strokeColor(COLOR_PRIMARY)
     .lineWidth(1)
     .moveTo(rightColX, rightY)
     .lineTo(rightColX + rightColWidth, rightY)
     .stroke();
  
  rightY += 12;

  const honors = [
    { role: 'Visual Design Lead', detail: 'Smart India Hackathon • 2024' },
    { role: 'Guest Workshop Speaker', detail: 'Integral University • 2025' },
    { role: 'Stage Host & Organizer', detail: 'Integral University • 2022 – 2025' }
  ];

  honors.forEach(honor => {
    doc.fillColor(COLOR_PRIMARY)
       .font(FONT_BOLD)
       .fontSize(8.5)
       .text(honor.role, rightColX, rightY);
    
    rightY += 10;
    
    doc.fillColor(COLOR_SECONDARY)
       .font(FONT_REGULAR)
       .fontSize(7.5)
       .text(honor.detail, rightColX, rightY);
    
    rightY += 14;
  });

  // --- FOOTER VERIFICATION ---
  const footerY = 745;
  
  doc.strokeColor(COLOR_LIGHT_BORDER)
     .lineWidth(0.5)
     .moveTo(45, footerY - 10)
     .lineTo(567, footerY - 10)
     .stroke();

  doc.fillColor(COLOR_SECONDARY)
     .font(FONT_ITALIC)
     .fontSize(7.5)
     .text(
       'I hereby certify that all information presented above is absolute, true, and authentic to my professional journey.',
       45,
       footerY,
       { align: 'center', width: 522 }
     );

  doc.end();

  await new Promise((resolve, reject) => {
    stream.on('finish', () => {
      console.log('PDF successfully generated at public/resume/Ahmad_Saad_Resume.pdf!');
      resolve();
    });
    stream.on('error', (err) => {
      console.error('Error generating PDF:', err);
      reject(err);
    });
  });
}

generatePDF().catch(console.error);
