import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputPath = path.join(rootDir, 'public', 'Mon_CV.pdf');
const imagePath = path.join(rootDir, 'src', 'assets', 'moi3.png');

const profile = {
  name: 'Aissatou Bobo',
  role: 'Développeuse Front-end',
  summary:
    "Je conçois et développe des interfaces web modernes, rapides et accessibles, avec un vrai souci du détail, de l'expérience utilisateur et de la cohérence visuelle.",
  location: 'Mamou, Guinée',
  phone: '+224 625 85 61 36',
  email: 'aissatoubobo094@gmail.com',
  github: 'github.com/AissatouboboDiallo',
  linkedin: 'linkedin.com',
  website: 'Portfolio React + Tailwind',
  skills: ['React', 'Tailwind CSS', 'Redux', 'JavaScript', 'HTML', 'CSS', 'Flutter', 'Python', 'Git & GitHub'],
  services: [
    'Développement Front-end',
    'Design UI / UX',
    'Performance & Accessibilité',
  ],
  projects: [
    {
      title: 'Femmes Vertes & Connect',
      description: "Site e-commerce de produits bio avec panier d'achat et paiement.",
      tech: 'React, Tailwind CSS, Redux',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord d\'analyse de données avec graphiques interactifs.',
      tech: 'React, Tailwind CSS, Redux',
    },
    {
      title: 'SaaS Landing Page',
      description: 'Landing page moderne pour une application SaaS.',
      tech: 'Flutter, Material 3, Firebase',
    },
  ],
};

const colors = {
  background: '#0F0F26',
  panel: '#09091E',
  panelSoft: '#121232',
  accent: '#8A2BE2',
  accentDeep: '#6E22B7',
  muted: '#9CA3AF',
  softText: '#CBD5E1',
  white: '#FFFFFF',
  line: '#FFFFFF1A',
  lineStrong: '#FFFFFF26',
};

function drawPill(doc, x, y, text, options = {}) {
  const paddingX = options.paddingX ?? 9;
  const paddingY = options.paddingY ?? 4;
  const fontSize = options.fontSize ?? 9;
  const fillColor = options.fillColor ?? colors.panelSoft;
  const textColor = options.textColor ?? colors.softText;

  doc.font('Helvetica-Bold').fontSize(fontSize);
  const width = doc.widthOfString(text) + paddingX * 2;
  const height = fontSize + paddingY * 2 + 2;

  doc.roundedRect(x, y, width, height, 8).fillAndStroke(fillColor, colors.lineStrong);
  doc.fillColor(textColor).text(text, x + paddingX, y + paddingY + 1, { lineBreak: false });
  return { width, height };
}

function sectionTitle(doc, x, y, title) {
  doc.fillColor(colors.white)
    .font('Helvetica-Bold')
    .fontSize(15)
    .text(title, x, y);
  doc
    .moveTo(x, y + 22)
    .lineTo(x + 54, y + 22)
    .lineWidth(2)
    .stroke(colors.accent);
}

function addBullet(doc, x, y, text, width) {
  doc.fillColor(colors.softText).font('Helvetica').fontSize(10).text(`• ${text}`, x, y, {
    width,
    lineGap: 2,
  });
}

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 36, right: 36 },
  bufferPages: true,
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Background
doc.rect(0, 0, doc.page.width, doc.page.height).fill(colors.background);
doc.save();
doc.roundedRect(28, 28, doc.page.width - 56, doc.page.height - 56, 28).fill(colors.panel);
doc.restore();

// Decorative blobs
doc.save();
doc.fillOpacity(0.18).fill(colors.accent).ellipse(500, 95, 95, 95).fill();
doc.fillOpacity(0.14).fill('#3B82F6').ellipse(540, 760, 80, 80).fill();
doc.restore();

// Header
doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(24).text(profile.name, 44, 44);
doc.fillColor(colors.accent).font('Helvetica-Bold').fontSize(12).text(profile.role, 44, 76);
doc.fillColor(colors.softText).font('Helvetica').fontSize(10).text(profile.summary, 44, 96, { width: 320, lineGap: 3 });

// Profile image card
const imageX = 390;
const imageY = 42;
doc.save();
doc.roundedRect(imageX, imageY, 160, 190, 24).fill('#0B0B20');
doc.roundedRect(imageX + 4, imageY + 4, 152, 182, 22).fill('#11112A');
if (fs.existsSync(imagePath)) {
  doc.image(imagePath, imageX + 10, imageY + 10, {
    fit: [140, 170],
    align: 'center',
    valign: 'center',
  });
}
doc.restore();

// Contact strip
const contactY = 220;
doc.roundedRect(44, contactY, 506, 52, 16).fill(colors.panelSoft).stroke(colors.lineStrong);
doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(9).text('CONTACT', 58, contactY + 10);
doc.fillColor(colors.softText).font('Helvetica').fontSize(9)
  .text(`${profile.email}  •  ${profile.phone}`, 58, contactY + 24);
doc.fillColor(colors.softText).font('Helvetica').fontSize(9)
  .text(`${profile.location}  •  ${profile.github}`, 310, contactY + 24);

// Left column card
const leftX = 44;
const leftW = 178;
const rightX = 240;
const rightW = 310;
let leftY = 290;
let rightY = 290;

doc.roundedRect(leftX, leftY, leftW, 356, 18).fill('#0C0C22').stroke(colors.lineStrong);
sectionTitle(doc, leftX + 16, leftY + 16, 'Compétences');

let skillY = leftY + 46;
profile.skills.forEach((skill, index) => {
  const col = index % 2;
  const row = Math.floor(index / 2);
  const pillX = leftX + 16 + col * 78;
  const pillY = skillY + row * 28;
  drawPill(doc, pillX, pillY, skill, { fillColor: colors.panelSoft, textColor: colors.white, fontSize: 8.5 });
});

const servicesY = leftY + 180;
sectionTitle(doc, leftX + 16, servicesY, 'Focus');
profile.services.forEach((service, index) => {
  addBullet(doc, leftX + 18, servicesY + 30 + index * 22, service, 140);
});

// Right column card 1
doc.roundedRect(rightX, rightY, rightW, 146, 18).fill('#0C0C22').stroke(colors.lineStrong);
sectionTitle(doc, rightX + 16, rightY + 16, 'Profil');
doc.fillColor(colors.softText).font('Helvetica').fontSize(10).text(
  "Passionnée par le développement web, je transforme des idées en expériences numériques élégantes, claires et performantes.",
  rightX + 16,
  rightY + 42,
  { width: rightW - 32, lineGap: 4 }
);
doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(10).text('Disponible pour :', rightX + 16, rightY + 96);
drawPill(doc, rightX + 106, rightY + 90, 'Freelance', { fillColor: colors.accent, textColor: colors.white, fontSize: 8.5 });
drawPill(doc, rightX + 176, rightY + 90, 'Stage', { fillColor: colors.panelSoft, textColor: colors.white, fontSize: 8.5 });
drawPill(doc, rightX + 232, rightY + 90, 'Collaboration', { fillColor: colors.panelSoft, textColor: colors.white, fontSize: 8.5 });

// Right column card 2
rightY += 162;
doc.roundedRect(rightX, rightY, rightW, 200, 18).fill('#0C0C22').stroke(colors.lineStrong);
sectionTitle(doc, rightX + 16, rightY + 16, 'Projets');

let projectY = rightY + 44;
profile.projects.forEach((project, index) => {
  const blockY = projectY + index * 50;
  doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(10.5).text(project.title, rightX + 16, blockY);
  doc.fillColor(colors.softText).font('Helvetica').fontSize(9.2).text(project.description, rightX + 16, blockY + 14, {
    width: rightW - 32,
    lineGap: 2,
  });
  doc.fillColor(colors.muted).font('Helvetica-Oblique').fontSize(8.5).text(project.tech, rightX + 16, blockY + 32);
});

// Footer summary
const footerY = 688;
doc.roundedRect(44, footerY, 506, 78, 18).fill('#11112A').stroke(colors.lineStrong);
doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(11).text('Liens', 58, footerY + 14);
doc.fillColor(colors.softText).font('Helvetica').fontSize(9)
  .text(`GitHub: ${profile.github}`, 58, footerY + 32)
  .text(`LinkedIn: ${profile.linkedin}`, 58, footerY + 48)
  .text(`Portfolio: ${profile.website}`, 290, footerY + 32);

// Accent line and page number
doc.moveTo(44, 780).lineTo(550, 780).lineWidth(1).stroke(colors.lineStrong);
doc.fillColor(colors.muted).font('Helvetica').fontSize(8).text('CV généré depuis le portfolio React', 44, 790);

doc.end();

await new Promise((resolve, reject) => {
  stream.on('finish', resolve);
  stream.on('error', reject);
});

console.log(`Generated ${outputPath}`);