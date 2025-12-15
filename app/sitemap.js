export default function sitemap() {
  const baseUrl = 'https://insuretechskills.com';
  
  // Define all your routes
  const routes = [
    '',
    '/courses',
    '/about',
    '/blog',
    '/contact',
    '/enroll',
    '/courses/aws-devops',
    '/courses/data-science',
    '/courses/cybersecurity',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/courses' ? 0.9 : 0.8,
  }));
}

