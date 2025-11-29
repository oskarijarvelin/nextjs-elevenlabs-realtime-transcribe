import { Translations, Language } from '../translations';

interface SettingsPanelProps {
  t: Translations;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  echoCancellation: boolean;
  onToggleEchoCancellation: () => void;
  noiseSuppression: boolean;
  onToggleNoiseSuppression: () => void;
  selectedMicrophoneId: string;
  availableMicrophones: MediaDeviceInfo[];
  onMicrophoneChange: (deviceId: string) => void;
  apiKey: string;
  onShowApiKeyModal: () => void;
  onClearApiKey: () => void;
  transcriptsCount: number;
  onExportPDF: () => void;
  onExportCSV: () => void;
}

/**
 * Settings panel component with audio, API, and export options
 * Includes language selection, microphone settings, and export tools
 */
export default function SettingsPanel({
  t,
  language,
  onLanguageChange,
  echoCancellation,
  onToggleEchoCancellation,
  noiseSuppression,
  onToggleNoiseSuppression,
  selectedMicrophoneId,
  availableMicrophones,
  onMicrophoneChange,
  apiKey,
  onShowApiKeyModal,
  onClearApiKey,
  transcriptsCount,
  onExportPDF,
  onExportCSV,
}: SettingsPanelProps) {
  return (
    <section 
      aria-label="Application settings"
      style={{
        backgroundColor: "rgba(128, 128, 128, 0.1)",
        border: "1px solid rgba(128, 128, 128, 0.3)",
        borderRadius: "12px",
        padding: "1.5rem",
        marginBottom: "2rem",
      }}
    >
      <h2 style={{ 
        margin: "0 0 1rem 0", 
        fontSize: "1.2rem",
        color: "var(--foreground)" 
      }}>
        ⚙️ {t.settings}
      </h2>
      <div style={{ marginBottom: "1rem" }}>
        
        {/* General Settings */}
        <div style={{
          marginBottom: "1rem",
          padding: "1rem",
          backgroundColor: "rgba(156, 39, 176, 0.1)",
          borderRadius: "8px",
          border: "1px solid rgba(156, 39, 176, 0.3)"
        }}>
          <strong style={{ color: "var(--foreground)", display: "block", marginBottom: "1rem" }}>
            🌐 {t.generalSettings}
          </strong>
          
          {/* Language Selector */}
          <div style={{
            padding: "0.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "6px"
          }}>
            <div style={{ 
              color: "var(--foreground)", 
              fontWeight: "500",
              marginBottom: "0.5rem"
            }}>
              {t.language}
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => onLanguageChange('en')}
                style={{
                  flex: 1,
                  padding: "0.5rem",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  backgroundColor: language === 'en' ? "#9C27B0" : "rgba(255, 255, 255, 0.1)",
                  color: language === 'en' ? "white" : "var(--foreground)",
                  border: language === 'en' ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "6px",
                  fontWeight: language === 'en' ? "600" : "400",
                  transition: "all 0.3s ease",
                }}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => onLanguageChange('fi')}
                style={{
                  flex: 1,
                  padding: "0.5rem",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  backgroundColor: language === 'fi' ? "#9C27B0" : "rgba(255, 255, 255, 0.1)",
                  color: language === 'fi' ? "white" : "var(--foreground)",
                  border: language === 'fi' ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "6px",
                  fontWeight: language === 'fi' ? "600" : "400",
                  transition: "all 0.3s ease",
                }}
              >
                🇫🇮 Suomi
              </button>
            </div>
          </div>
        </div>
        
        {/* Audio Settings */}
        <div style={{
          marginBottom: "1rem",
          padding: "1rem",
          backgroundColor: "rgba(255, 152, 0, 0.1)",
          borderRadius: "8px",
          border: "1px solid rgba(255, 152, 0, 0.3)"
        }}>
          <strong style={{ color: "var(--foreground)", display: "block", marginBottom: "1rem" }}>
            🎤 {t.microphoneSettings}
          </strong>
          
          {/* Echo Cancellation Toggle */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.75rem",
            padding: "0.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "6px"
          }}>
            <div>
              <div style={{ color: "var(--foreground)", fontWeight: "500" }}>
                {t.echoCancellation}
              </div>
              <div style={{ fontSize: "0.75rem", color: "rgba(128, 128, 128, 0.7)" }}>
                {t.echoCancellationDesc}
              </div>
            </div>
            <button
              onClick={onToggleEchoCancellation}
              role="switch"
              aria-checked={echoCancellation}
              aria-label={t.echoCancellation}
              style={{
                width: "50px",
                height: "28px",
                borderRadius: "14px",
                border: "none",
                cursor: "pointer",
                backgroundColor: echoCancellation ? "#4CAF50" : "rgba(128, 128, 128, 0.3)",
                position: "relative",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "white",
                position: "absolute",
                top: "3px",
                left: echoCancellation ? "25px" : "3px",
                transition: "all 0.3s ease",
              }} />
            </button>
          </div>

          {/* Noise Suppression Toggle */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.75rem",
            padding: "0.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "6px"
          }}>
            <div>
              <div style={{ color: "var(--foreground)", fontWeight: "500" }}>
                {t.noiseSuppression}
              </div>
              <div style={{ fontSize: "0.75rem", color: "rgba(128, 128, 128, 0.7)" }}>
                {t.noiseSuppressionDesc}
              </div>
            </div>
            <button
              onClick={onToggleNoiseSuppression}
              role="switch"
              aria-checked={noiseSuppression}
              aria-label={t.noiseSuppression}
              style={{
                width: "50px",
                height: "28px",
                borderRadius: "14px",
                border: "none",
                cursor: "pointer",
                backgroundColor: noiseSuppression ? "#4CAF50" : "rgba(128, 128, 128, 0.3)",
                position: "relative",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "white",
                position: "absolute",
                top: "3px",
                left: noiseSuppression ? "25px" : "3px",
                transition: "all 0.3s ease",
              }} />
            </button>
          </div>

          {/* Microphone Selector */}
          {availableMicrophones.length > 0 && (
            <div style={{
              padding: "0.5rem",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderRadius: "6px"
            }}>
              <label 
                htmlFor="microphone-select"
                style={{ 
                  color: "var(--foreground)", 
                  fontWeight: "500",
                  marginBottom: "0.5rem",
                  display: "block"
                }}
              >
                {t.microphone}
              </label>
              <select
                id="microphone-select"
                value={selectedMicrophoneId}
                onChange={(e) => onMicrophoneChange(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  fontSize: "0.9rem",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "6px",
                  color: "var(--foreground)",
                  cursor: "pointer",
                }}
              >
                <option value="" style={{ backgroundColor: "#1a1a1a", color: "var(--foreground)" }}>
                  {t.defaultMicrophone}
                </option>
                {availableMicrophones.map(mic => (
                  <option 
                    key={mic.deviceId} 
                    value={mic.deviceId}
                    style={{ backgroundColor: "#1a1a1a", color: "var(--foreground)" }}
                  >
                    {mic.label || `Mikrofoni ${mic.deviceId.substring(0, 8)}`}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        
        {/* API Key Settings */}
        <div style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "rgba(33, 150, 243, 0.1)",
          borderRadius: "8px",
          border: "1px solid rgba(33, 150, 243, 0.3)"
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginBottom: "0.5rem"
          }}>
            <strong style={{ color: "var(--foreground)" }}>🔑 {t.apiKey}</strong>
            {apiKey && (
              <span style={{ 
                fontSize: "0.75rem", 
                color: "#4CAF50",
                fontWeight: "600" 
              }}>
                ✓ {t.apiKeySaved}
              </span>
            )}
          </div>
          <p style={{ 
            fontSize: "0.85rem", 
            color: "rgba(128, 128, 128, 0.7)",
            margin: "0 0 1rem 0" 
          }}>
            {apiKey 
              ? `${t.apiKeyInUse}: ${apiKey.substring(0, 8)}...${apiKey.substring(apiKey.length - 4)}`
              : t.apiKeyDefault
            }
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={onShowApiKeyModal}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
                cursor: "pointer",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "6px",
              }}
            >
              {apiKey ? t.edit : t.setApiKey}
            </button>
            {apiKey && (
              <button
                onClick={onClearApiKey}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  backgroundColor: "rgba(244, 67, 54, 0.2)",
                  color: "#f44336",
                  border: "1px solid #f44336",
                  borderRadius: "6px",
                }}
              >
                {t.remove}
              </button>
            )}
          </div>
        </div>
        
        {/* Export Settings */}
        <div style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "rgba(76, 175, 80, 0.1)",
          borderRadius: "8px",
          border: "1px solid rgba(76, 175, 80, 0.3)"
        }}>
          <strong style={{ color: "var(--foreground)", display: "block", marginBottom: "0.5rem" }}>
            📥 {t.exportSettings}
          </strong>
          <p style={{ 
            fontSize: "0.85rem", 
            color: "rgba(128, 128, 128, 0.7)",
            margin: "0 0 1rem 0" 
          }}>
            {transcriptsCount} {transcriptsCount === 1 ? 'transcript' : 'transcripts'}
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button
              onClick={onExportPDF}
              disabled={transcriptsCount === 0}
              style={{
                flex: 1,
                minWidth: "150px",
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
                cursor: transcriptsCount === 0 ? "not-allowed" : "pointer",
                backgroundColor: transcriptsCount === 0 ? "rgba(128, 128, 128, 0.2)" : "#4CAF50",
                color: transcriptsCount === 0 ? "rgba(128, 128, 128, 0.5)" : "white",
                border: "none",
                borderRadius: "6px",
                fontWeight: "500",
                opacity: transcriptsCount === 0 ? 0.5 : 1,
              }}
            >
              📄 {t.exportPDF}
            </button>
            <button
              onClick={onExportCSV}
              disabled={transcriptsCount === 0}
              style={{
                flex: 1,
                minWidth: "150px",
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
                cursor: transcriptsCount === 0 ? "not-allowed" : "pointer",
                backgroundColor: transcriptsCount === 0 ? "rgba(128, 128, 128, 0.2)" : "#4CAF50",
                color: transcriptsCount === 0 ? "rgba(128, 128, 128, 0.5)" : "white",
                border: "none",
                borderRadius: "6px",
                fontWeight: "500",
                opacity: transcriptsCount === 0 ? 0.5 : 1,
              }}
            >
              📊 {t.exportCSV}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
