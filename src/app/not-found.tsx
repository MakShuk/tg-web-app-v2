'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center'
    }}>
      <h2>404</h2>
      <p>This page could not be found.</p>
      <Link href="/">
        <button style={{ 
          padding: '8px 16px',
          marginTop: '16px',
          cursor: 'pointer',
          backgroundColor: '#007AFF',
          color: 'white',
          border: 'none',
          borderRadius: '8px'
        }}>
          Вернуться на главную
        </button>
      </Link>
    </div>
  );
}