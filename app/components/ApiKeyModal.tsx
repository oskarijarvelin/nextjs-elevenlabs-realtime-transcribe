import { Translations } from '../translations';

interface ApiKeyModalProps {
  t: Translations;
  tempApiKey: string;
  onTempApiKeyChange: (value: string) => void;
  onSave: () => void;
  onClose: () => void;
}

export default function ApiKeyModal({
  t,
  tempApiKey,
  onTempApiKeyChange,
  onSave,
  onClose,
}: ApiKeyModalProps) {
  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 3000,
        padding: "2rem",
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: "var(--background, #1a1a1a)",
          borderRadius: "16px",
          padding: "2rem",
          maxWidth: "500px",
          width: "100%",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ 
          margin: "0 0 1rem 0",
          color: "var(--foreground)",
          fontSize: "1.5rem"
        }}>
          🔑 {t.apiKeyModalTitle}
        </h2>
        <p style={{ 
          color: "rgba(128, 128, 128, 0.8)",
          fontSize: "0.9rem",
          marginBottom: "1rem"
        }}>
          {t.apiKeyModalDesc}
        </p>
        <p style={{ 
          marginBottom: "1.5rem"
        }}>
          <a 
            href="https://elevenlabs.io/app/settings/api-keys" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: "#2196F3",
              textDecoration: "none",
              fontSize: "0.9rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            🔗 {t.getApiKey}
          </a>
        </p>
        <input
          type="password"
          value={tempApiKey}
          onChange={(e) => onTempApiKeyChange(e.target.value)}
          placeholder="sk_..."
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "8px",
            color: "var(--foreground)",
            marginBottom: "1.5rem",
            fontFamily: "monospace",
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSave();
            if (e.key === 'Escape') onClose();
          }}
        />
        <div style={{ 
          display: "flex", 
          gap: "1rem",
          justifyContent: "flex-end"
        }}>
          <button
            onClick={onClose}
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "var(--foreground)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
            }}
          >
            {t.cancel}
          </button>
          <button
            onClick={onSave}
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            {t.save}
          </button>
        </div>
      </div>
    </div>
  );
}
