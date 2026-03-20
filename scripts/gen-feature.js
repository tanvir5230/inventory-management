import fs from 'node:fs';
import path from 'node:path';

const featureName = process.argv[2];

if (!featureName) {
  console.error('❌ Please provide a feature name: node scripts/gen-feature.js <name>');
  process.exit(1);
}

const featurePath = path.join(process.cwd(), 'src', 'features', featureName);

const dirs = ['services', 'stores', 'components', 'hooks', 'types', 'utils'];

const createStructure = () => {
  try {
    // 1. Create main feature folder
    if (fs.existsSync(featurePath)) {
      console.warn(`⚠️ Feature "${featureName}" already exists.`);
      return;
    }

    fs.mkdirSync(featurePath, { recursive: true });

    // 2. Create subdirectories
    dirs.forEach((dir) => {
      fs.mkdirSync(path.join(featurePath, dir));
    });

    // 3. Create public API (index.ts)
    const indexContent = `// Public API for the ${featureName} feature\n// Export components, hooks, and types here\n\nexport {};\n`;
    fs.writeFileSync(path.join(featurePath, 'index.ts'), indexContent);

    // 4. Create a README for documentation
    const readmeContent = `# ${featureName.toUpperCase()} Feature\n\n## Overview\nDescribe the purpose of this feature here.\n`;
    fs.writeFileSync(path.join(featurePath, 'README.md'), readmeContent);

    console.log(`✅ Feature "${featureName}" created successfully at ${featurePath}`);
  } catch (error) {
    console.error('❌ Error creating feature structure:', error);
  }
};

createStructure();
