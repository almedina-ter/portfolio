import { HashRouter, Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { CaseStudy } from './pages/CaseStudy'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

/**
 * Hash-based routing (e.g. /#/work/my-project) so that every page, including
 * refreshes and shared links, works on GitHub Pages without server configuration.
 */
export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
