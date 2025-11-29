interface NotificationProps {
  message: string;
  type: 'error' | 'success' | 'info';
  onClose: () => void;
}

/**
 * Toast-style notification component
 * Auto-dismissible with close button
 * Color-coded by notification type
 */
export default function Notification({ message, type, onClose }: NotificationProps) {
  const getIcon = () => {
    switch (type) {
      case 'error': return '❌';
      case 'success': return '✅';
      default: return 'ℹ️';
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'error': return "rgba(244, 67, 54, 0.95)";
      case 'success': return "rgba(76, 175, 80, 0.95)";
      default: return "rgba(33, 150, 243, 0.95)";
    }
  };

  return (
    <div 
      role="alert"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      style={{
        position: "fixed",
        top: "90px",
        right: "1rem",
        left: "1rem",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "1rem 1.5rem",
        backgroundColor: getBackgroundColor(),
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        animation: "slideDown 0.3s ease",
        backdropFilter: "blur(10px)",
      }}
    >
      <span style={{ fontSize: "1.5rem" }} aria-hidden="true">
        {getIcon()}
      </span>
      <span style={{ flex: 1, fontSize: "1rem", fontWeight: "500" }}>
        {message}
      </span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "1.2rem",
          cursor: "pointer",
          padding: "0.25rem",
          opacity: 0.8,
        }}
      >
        ✕
      </button>
    </div>
  );
}
