const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Sample image data for different sections
const imageData = [
  // Hero background
  {
    filename: 'hero-bg.jpg',
    description: 'Luxury homes in West Summerlin, Las Vegas',
    dimensions: '1920x1080'
  },
  
  // Property images
  {
    filename: 'property-1.jpg',
    description: 'Luxury Mediterranean Villa',
    dimensions: '800x600'
  },
  {
    filename: 'property-2.jpg',
    description: 'Modern Contemporary Home',
    dimensions: '800x600'
  },
  {
    filename: 'property-3.jpg',
    description: 'Elegant Spanish Revival',
    dimensions: '800x600'
  },
  
  // Testimonial images
  {
    filename: 'testimonial-1.jpg',
    description: 'Sarah Johnson - Home Buyer',
    dimensions: '200x200'
  },
  {
    filename: 'testimonial-2.jpg',
    description: 'Michael Chen - Home Seller',
    dimensions: '200x200'
  },
  {
    filename: 'testimonial-3.jpg',
    description: 'Jennifer Rodriguez - Investor',
    dimensions: '200x200'
  },
  {
    filename: 'testimonial-4.jpg',
    description: 'David Thompson - First-time Buyer',
    dimensions: '200x200'
  }
];

// Generate README with image information
const readmeContent = `# Sample Images

This directory contains sample images for the West Summerlin Homes website.

## Image List

${imageData.map(img => `- **${img.filename}** - ${img.description} (${img.dimensions})`).join('\n')}

## Usage

These images are referenced in the following components:
- \`hero-bg.jpg\` - HeroSection background
- \`property-*.jpg\` - FeaturedProperties component
- \`testimonial-*.jpg\` - Testimonials component

## Note

These are placeholder images. In production, replace them with actual high-quality real estate photos.
`;

fs.writeFileSync(path.join(imagesDir, 'README.md'), readmeContent);

console.log('Sample image structure created successfully!');
console.log('Generated README with image information.');
console.log('\nNext steps:');
console.log('1. Add actual real estate photos to replace these placeholders');
console.log('2. Optimize images for web (compress, resize as needed)');
console.log('3. Update image paths in components if needed');
