import React from 'react';

function Footer() {
  return (
    <div>
      <footer
        style={{
          backgroundColor: '#007bff',
          borderRadius: '0.5rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          margin: '1rem',
          color: '#1f2937',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '0.75rem',
            }}
          >
            © 2023{' '}
            <a
              href="https://flowbite.com/"
              style={{ textDecoration: 'underline', color: '#3b82f6' }}
            >
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#6b7280',
              listStyle: 'none',
              padding: '0',
              margin: '0',
            }}
          >
            <li style={{ margin: '0 1.5rem 0 0' }}>
              <a href="#" style={{ textDecoration: 'underline' }}>
                About
              </a>
            </li>
            <li style={{ margin: '0 1.5rem 0 0' }}>
              <a href="#" style={{ textDecoration: 'underline' }}>
                Privacy Policy
              </a>
            </li>
            <li style={{ margin: '0 1.5rem 0 0' }}>
              <a href="#" style={{ textDecoration: 'underline' }}>
                Licensing
              </a>
            </li>
            <li style={{ margin: '0' }}>
              <a href="#" style={{ textDecoration: 'underline' }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
