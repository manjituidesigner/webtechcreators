fetch('http://webtechcreators.local/graphql', { 
  method: 'POST', 
  headers: { 'Content-Type': 'application/json' }, 
  body: JSON.stringify({ query: '{ page(id: "/site-settings/", idType: URI) { siteSettings { siteLogo { node { sourceUrl } } siteLogoMobile { node { sourceUrl } } favicon { node { sourceUrl } } siteTagline contactPhone contactEmail whatsappNumber address facebookUrl instagramUrl linkedinUrl youtubeUrl footerCopyright footerDescription googleMapsUrl defaultSeoTitle defaultSeoDescription } } }' }) 
}).then(r => r.json()).then(d => console.log(JSON.stringify(d, null, 2)))
