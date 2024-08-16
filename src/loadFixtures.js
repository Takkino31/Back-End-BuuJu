const Fixtures = require('node-mongodb-fixtures');
const path = require('path');

// Définir le chemin des fixtures
const fixtures = new Fixtures({
  dir: path.resolve(__dirname, 'fixtures'),
  mute: false, // Désactive les messages de log, active pour plus de détails
});

// Connecter à MongoDB et charger les fixtures
fixtures
  .connect('mongodb://localhost:27017/buuju-man')
  .then(() => fixtures.load()) // Charger les fichiers dans le dossier `fixtures`
  .catch(err => console.error(err))
  .finally(() => fixtures.disconnect());



