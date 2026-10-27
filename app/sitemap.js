export default function sitemap() {
  const baseUrl = 'https://navyuginfragen.com';
  const currentDate = new Date();

  const routes = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/products`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/services`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${baseUrl}/projects`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${baseUrl}/sustainability`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
