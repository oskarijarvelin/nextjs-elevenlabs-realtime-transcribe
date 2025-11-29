import { Translations } from '../translations';

interface FooterProps {
  t: Translations;
}

/**
 * Fixed footer with credits and copyright
 */
export default function Footer({ t }: FooterProps) {
  return (
    <footer 
      role="contentinfo"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "60px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
        zIndex: 1000,
      }}
    >
      <p style={{ 
        margin: 0, 
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "0.9rem",
        textAlign: "center",
      }}>
        {t.poweredBy} • © {new Date().getFullYear()} Oskari Järvelin
      </p>
    </footer>
  );
}
