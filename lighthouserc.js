module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        startServerCommand: 'npm run start',
        url: ['http://localhost:3000']
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 0.5}],
          'categories:best-practices': ['warn', {minScore: 0.5}],
          'categories:seo': ['warn', {minScore: 0.5}],
          'categories:pwa': ['warn', {minScore: 0.5}],
          'categories:accessibility': ['error', {minScore: 0.5}]
        }
      },
      upload: {
        /* Add configuration here */
        target: 'temporary-public-storage',
      },
    },
  };
