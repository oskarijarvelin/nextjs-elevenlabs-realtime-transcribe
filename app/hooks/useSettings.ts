import { useState, useEffect } from 'react';
import { Language } from '../translations';

/**
 * Custom hook for managing persistent application settings
 * Uses localStorage for persistence across sessions
 */
export function useSettings() {
  const [language, setLanguage] = useState<Language>('en');
  const [apiKey, setApiKey] = useState("");
  const [echoCancellation, setEchoCancellation] = useState(true);
  const [noiseSuppression, setNoiseSuppression] = useState(true);
  const [selectedMicrophoneId, setSelectedMicrophoneId] = useState<string>("");

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'fi') {
      setLanguage(savedLanguage);
    }

    const savedKey = localStorage.getItem('elevenlabs_api_key');
    if (savedKey) {
      setApiKey(savedKey);
    }
    
    const savedEchoCancellation = localStorage.getItem('echo_cancellation');
    if (savedEchoCancellation !== null) {
      setEchoCancellation(savedEchoCancellation === 'true');
    }
    
    const savedNoiseSuppression = localStorage.getItem('noise_suppression');
    if (savedNoiseSuppression !== null) {
      setNoiseSuppression(savedNoiseSuppression === 'true');
    }

    const savedMicrophoneId = localStorage.getItem('selected_microphone_id');
    if (savedMicrophoneId) {
      setSelectedMicrophoneId(savedMicrophoneId);
    }
  }, []);

  // Update language and persist
  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Update API key and persist
  const updateApiKey = (key: string) => {
    setApiKey(key);
    if (key) {
      localStorage.setItem('elevenlabs_api_key', key);
    } else {
      localStorage.removeItem('elevenlabs_api_key');
    }
  };

  // Update echo cancellation and persist
  const updateEchoCancellation = (value: boolean) => {
    setEchoCancellation(value);
    localStorage.setItem('echo_cancellation', String(value));
  };

  // Update noise suppression and persist
  const updateNoiseSuppression = (value: boolean) => {
    setNoiseSuppression(value);
    localStorage.setItem('noise_suppression', String(value));
  };

  // Update microphone and persist
  const updateMicrophone = (deviceId: string) => {
    setSelectedMicrophoneId(deviceId);
    localStorage.setItem('selected_microphone_id', deviceId);
  };

  return {
    language,
    apiKey,
    echoCancellation,
    noiseSuppression,
    selectedMicrophoneId,
    updateLanguage,
    updateApiKey,
    updateEchoCancellation,
    updateNoiseSuppression,
    updateMicrophone,
  };
}
