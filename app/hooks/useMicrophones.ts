import { useState, useEffect } from 'react';

/**
 * Custom hook for enumerating and managing audio input devices
 * Requests microphone permission and lists available devices
 */
export function useMicrophones() {
  const [availableMicrophones, setAvailableMicrophones] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    const getMicrophones = async () => {
      try {
        // Check if getUserMedia is supported
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          console.warn('getUserMedia not supported on this browser');
          return;
        }

        // Request permission first
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Stop the stream immediately, we just needed permission
        stream.getTracks().forEach(track => track.stop());
        
        // Enumerate devices after permission is granted
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioInputs = devices.filter(device => device.kind === 'audioinput');
        console.log('Available microphones:', audioInputs);
        setAvailableMicrophones(audioInputs);
      } catch (error) {
        console.error('Error enumerating devices:', error);
        // Don't show error to user, just log it
        // This is not critical for the app to work
      }
    };

    getMicrophones();
  }, []);

  return availableMicrophones;
}
