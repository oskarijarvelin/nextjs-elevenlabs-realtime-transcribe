import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Try to get custom API key from header first
  const customApiKey = request.headers.get('X-Custom-API-Key');
  const apiKey = customApiKey || process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "ELEVENLABS_API_KEY not configured", code: "NO_API_KEY" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      "https://api.elevenlabs.io/v1/single-use-token/realtime_scribe",
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("ElevenLabs API error:", response.status, errorData);
      
      // Check for credit/quota issues
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Invalid API key", code: "INVALID_API_KEY" },
          { status: 401 }
        );
      }
      
      if (response.status === 402 || response.status === 429) {
        return NextResponse.json(
          { 
            error: "Krediitit tai käyttörajat loppuneet. Tarkista ElevenLabs-tilisi.", 
            code: "QUOTA_EXCEEDED" 
          },
          { status: response.status }
        );
      }
      
      throw new Error(`ElevenLabs API error: ${response.status} ${errorData}`);
    }

    const data = await response.json();
    return NextResponse.json({ token: data.token });
  } catch (error) {
    console.error("Error fetching token:", error);
    return NextResponse.json(
      { error: "Failed to fetch token" },
      { status: 500 }
    );
  }
}
