import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Layout = ({ children }) => (
  <main className="min-h-screen">
    <Navbar />
    <section className="px-20">
      {children}
      <Footer />
    </section>
  </main>
);

export default Layout;
