plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `I-C-WIENER-405-XXX-XXX-XXX`, 
        tables: [
          {
            baseId: `YOUR_AIRTABLE_BASE_ID`,
            tableName: `Memes`,
            mapping: { Attachments: `fileNode` },
           },
        ]
      }
    }
  ];