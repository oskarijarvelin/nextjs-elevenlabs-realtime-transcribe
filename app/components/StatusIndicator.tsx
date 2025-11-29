import { Translations } from '../translations';

interface StatusIndicatorProps {
  t: Translations;
}

/**
 * Visual indicator that recording is active
 * Shows pulsing animation for better visibility
 */
export default function StatusIndicator({ t }: StatusIndicatorProps) {
  return (
    <div 
      role="status"
      aria-live="polite"
      style={{ 
        padding: "1.5rem", 
        backgroundColor: "rgba(76, 175, 80, 0.15)", 
        borderRadius: "12px",
        marginBottom: "2rem",
        border: "2px solid #4CAF50",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div 
        aria-hidden="true"
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: "#4CAF50",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
        }}
      />
      <strong style={{ color: "#4CAF50", fontSize: "1.1rem" }}>
        {t.recording}
      </strong>
    </div>
  );
}
