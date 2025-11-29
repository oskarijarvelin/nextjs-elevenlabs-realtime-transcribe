import { Translations } from '../translations';

interface HeaderProps {
  t: Translations;
  isConnected: boolean;
  onToggle: () => void;
  onSettingsClick: () => void;
}

/**
 * Fixed header component with recording toggle and settings button
 * Responsive design hides title text on mobile devices
 */
export default function Header({ t, isConnected, onToggle, onSettingsClick }: HeaderProps) {
  return (
    <header 
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        backgroundColor: "rgba(40, 40, 40, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        zIndex: 1000,
      }}
    >
      <h1 className="header-title" style={{ 
        fontSize: "1.5rem", 
        fontWeight: "600",
        color: "var(--foreground)",
        margin: 0,
      }}>
        🎙️ <span className="title-text">{t.title}</span>
      </h1>
      
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        {/* Recording Toggle Button */}
        <button 
          onClick={onToggle}
          className="start-stop-btn"
          aria-label={isConnected ? t.stop : t.start}
          aria-pressed={isConnected}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            backgroundColor: isConnected ? "#f44336" : "transparent",
            color: isConnected ? "white" : "var(--foreground)",
            border: isConnected ? "none" : "2px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            animation: isConnected ? "pulse 2s infinite" : "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            height: "45px",
          }}
        >
          <span className="btn-text" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {isConnected ? (
              <>
                <span 
                  className="stop-square"
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "2px",
                    backgroundColor: "white",
                    display: "inline-block",
                  }}
                />
                {t.stop}
              </>
            ) : (
              <>
                <span 
                  className="rec-dot"
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#f44336",
                    display: "inline-block",
                  }}
                />
                {t.start}
              </>
            )}
          </span>
          <span className="btn-icon" style={{ display: "none", alignItems: "center", justifyContent: "center" }}>
            {isConnected ? (
              <span 
                className="stop-square"
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "2px",
                  backgroundColor: "white",
                  display: "inline-block",
                }}
              />
            ) : (
              <span 
                className="rec-dot"
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "#f44336",
                  display: "inline-block",
                }}
              />
            )}
          </span>
        </button>
        
        {/* Settings Button */}
        <button 
          onClick={onSettingsClick}
          aria-label={t.settings}
          aria-expanded={false}
          style={{
            padding: "0.75rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            backgroundColor: "rgba(40, 40, 40, 0.95)",
            color: "var(--foreground)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            width: "45px",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          title={t.settings}
        >
          ⚙️
        </button>
      </div>
    </header>
  );
}
