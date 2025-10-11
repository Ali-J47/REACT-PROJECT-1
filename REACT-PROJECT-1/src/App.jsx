
const Header = () => (
  <header style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#222',
    zIndex: 1000,
    padding: '16px 0 0 0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#fff', margin: 0 }}>REACT-PROJECT-1</h1>
      <nav style={{ marginTop: '12px' }}>
        <a href="https://github.com/Ali-J47/REACT-PROJECT-1" style={{ margin: '0 12px', color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
        <a href="https://github.com/Ali-J47/REACT-PROJECT-1/commit/82362bea60d102f65cfdd9d7469d889e090a1701" style={{ margin: '0 12px', color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>About</a>
        <a href="" style={{ margin: '0 12px', color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer
    style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '16px 0',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <p style={{ margin: 0 }}>&copy; 2025 Get the BEST from the BEST</p>
    </footer>
  );

const Hello = () => {
  return (
    <div>
      <p>
      </p>
    </div>
  );
};

const App = () => {
  return (
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <Header />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0 }}>Greetings</h2>
        </div>
      <Hello />
      <Footer />
    </div>
  );
};

export default App
