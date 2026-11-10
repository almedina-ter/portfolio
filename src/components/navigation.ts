export const navItems = [
  { to: '/', label: 'Work', matches: (path: string) => path === '/' || path.startsWith('/work') },
  { to: '/contact', label: 'Contact', matches: (path: string) => path.startsWith('/contact') },
]
