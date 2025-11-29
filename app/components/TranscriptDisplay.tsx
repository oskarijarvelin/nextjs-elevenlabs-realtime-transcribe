import { Translations } from '../translations';

interface Transcript {
  id: string;
  text: string;
  timestamp: string;
}

interface TranscriptDisplayProps {
  t: Translations;
  transcripts: Transcript[];
  partialTranscript?: string;
}

/**
 * Displays real-time partial transcripts and confirmed transcripts
 * Partial transcripts shown in orange (temporary)
 * Confirmed transcripts shown in blue (permanent)
 */
export default function TranscriptDisplay({ t, transcripts, partialTranscript }: TranscriptDisplayProps) {
  return (
    <>
      {/* Partial (Real-time) Transcript */}
      {partialTranscript && (
        <section 
          aria-label="Real-time transcript"
          style={{ 
            padding: "1.5rem", 
            backgroundColor: "rgba(255, 152, 0, 0.15)", 
            borderRadius: "12px",
            marginBottom: "2rem",
            border: "2px solid #ff9800",
            minHeight: "80px",
          }}
        >
          <div style={{ 
            fontSize: "0.9rem", 
            fontWeight: "600",
            color: "#ff9800",
            marginBottom: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}>
            ⚡ {t.realtime}
          </div>
          <p style={{ 
            margin: 0, 
            fontStyle: "italic", 
            color: "var(--foreground)",
            fontSize: "1.3rem",
            lineHeight: "1.6",
          }}>
            {partialTranscript}
          </p>
        </section>
      )}

      {/* Confirmed Transcripts */}
      <section 
        aria-label="Confirmed transcripts"
        style={{ 
          padding: "1.5rem", 
          backgroundColor: "rgba(128, 128, 128, 0.05)", 
          borderRadius: "12px",
          minHeight: "300px",
          border: "1px solid rgba(128, 128, 128, 0.2)"
        }}
      >
        <h2 style={{ 
          fontSize: "0.9rem", 
          fontWeight: "600",
          color: "var(--foreground)",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          opacity: 0.7
        }}>
          📝 {t.confirmedTranscripts}
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {transcripts.length === 0 ? (
            <div style={{ 
              textAlign: "center", 
              padding: "3rem 1rem",
              color: "rgba(128, 128, 128, 0.5)" 
            }}>
              <p style={{ fontSize: "3rem", margin: "0 0 1rem 0" }} aria-hidden="true">🎤</p>
              <p style={{ fontSize: "1.1rem", margin: 0, fontStyle: "italic" }}>
                {t.startRecordingPrompt}
              </p>
            </div>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {transcripts.map((transcript) => (
                <li 
                  key={transcript.id} 
                  style={{ 
                    padding: "1.25rem",
                    backgroundColor: "rgba(33, 150, 243, 0.08)",
                    borderRadius: "10px",
                    borderLeft: "4px solid #2196F3",
                    color: "var(--foreground)",
                    transition: "all 0.3s ease",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    marginBottom: "0.5rem"
                  }}>
                    <time 
                      dateTime={transcript.timestamp}
                      style={{
                        fontSize: "0.85rem",
                        color: "#2196F3",
                        fontWeight: "600",
                        opacity: 0.8
                      }}
                    >
                      🕒 {transcript.timestamp}
                    </time>
                  </div>
                  <div style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.7",
                  }}>
                    {transcript.text}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
