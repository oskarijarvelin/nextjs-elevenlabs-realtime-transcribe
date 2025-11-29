# Next.js ElevenLabs Realtime Transcribe

A production-ready, fully accessible real-time speech-to-text transcription application built with Next.js 15 and ElevenLabs Scribe v2 API.

## ✨ Features

### Core Functionality
- 🎙️ **Real-time transcription** - Instant speech-to-text with ElevenLabs Scribe v2 Realtime API
- 📝 **Live feedback** - See partial transcripts as you speak, confirmed transcripts when finalized
- 🎤 **Advanced audio controls** - Echo cancellation, noise suppression, microphone device selection
- � **Multiple export formats** - Download transcripts as CSV or PDF with timestamps

### User Experience
- 🌐 **Bilingual interface** - Full English and Finnish localization
- �📱 **Mobile responsive** - Optimized UI for all screen sizes with icon-only mode
- 🎨 **Modern design** - Clean interface with pulsing red recording indicator
- ⌨️ **Keyboard shortcuts** - Full keyboard navigation support
- � **Toast notifications** - Real-time feedback for errors and important events

### Technical Excellence
- ♿ **WCAG accessibility** - ARIA labels, semantic HTML5, screen reader support
- 🔑 **Flexible API configuration** - Server-side or custom API key support
- 💾 **Persistent settings** - All preferences saved in browser localStorage
- 🎯 **Zero emoji dependencies** - CSS-based icons for universal device compatibility
- 🚀 **Optimized performance** - Efficient state management with custom React hooks

## 🏗️ Project Structure

The application follows a modular architecture with clear separation of concerns:

```
app/
├── components/              # React UI Components
│   ├── Header.tsx          # Fixed header with recording/stop buttons
│   ├── Footer.tsx          # Fixed footer with attribution
│   ├── Notification.tsx    # Toast notification system with aria-live
│   ├── StatusIndicator.tsx # Pulsing recording status indicator
│   ├── TranscriptDisplay.tsx # Partial + confirmed transcript display
│   ├── SettingsPanel.tsx   # Complete settings UI with accessibility
│   └── ApiKeyModal.tsx     # Modal dialog for API key input
│
├── hooks/                   # Custom React Hooks
│   ├── useSettings.ts      # Settings state + localStorage persistence
│   └── useMicrophones.ts   # Audio device enumeration with cleanup
│
├── utils/                   # Utility Functions
│   └── exportUtils.ts      # CSV (UTF-8 BOM) and PDF export logic
│
├── translations.ts          # Centralized i18n strings (EN/FI)
├── page.tsx                # Main app component (~300 lines)
├── layout.tsx              # Root layout with metadata
└── api/
    └── token/
        └── route.ts        # Server-side ElevenLabs token generation
```

### Architecture Highlights

- **Component-based**: 7 isolated, reusable components
- **Custom hooks**: Clean state management with useSettings and useMicrophones
- **Type-safe**: Full TypeScript with strict mode
- **Accessibility-first**: ARIA attributes, semantic HTML, keyboard support
- **CSS-in-JS**: Scoped styles with styled-jsx
- **No external UI libraries**: Lightweight, custom components only

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm**, npm, or yarn package manager
- **ElevenLabs API key** ([Get one here](https://elevenlabs.io))

### Installation

1. **Clone the repository**

```sh
git clone https://github.com/oskarijarvelin/nextjs-elevenlabs-realtime-transcribe.git
cd nextjs-elevenlabs-realtime-transcribe
```

2. **Install dependencies**

```sh
pnpm install
# or
npm install
# or
yarn install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```sh
ELEVENLABS_API_KEY=your_api_key_here
```

4. **Start the development server**

```sh
pnpm dev
# or
npm run dev
# or
yarn dev
```

5. **Open the application**

Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Mobile Usage

### HTTPS Requirement

**Important:** Microphone access on mobile devices requires HTTPS due to browser security policies.

### Deployment Options

#### 1. Production Deployment (Recommended)

Deploy to any platform with automatic HTTPS:

- **Vercel** (Recommended for Next.js)
  ```sh
  pnpm install -g vercel
  vercel
  ```
- **Netlify**
  ```sh
  pnpm install -g netlify-cli
  netlify deploy
  ```
- **Other platforms**: Railway, Render, Fly.io, etc.

#### 2. Local HTTPS for Development

**Option A: Next.js Experimental HTTPS**
```sh
pnpm dev --experimental-https
# Access via https://localhost:3000
```

**Option B: Using mkcert (Recommended)**
```sh
# Install mkcert
# Windows: choco install mkcert
# macOS: brew install mkcert
# Linux: apt install mkcert

# Generate local certificates
mkcert -install
mkcert localhost

# Use with Next.js custom server or configure in next.config.js
```

**Option C: ngrok Tunnel**
```sh
# Install ngrok from https://ngrok.com
ngrok http 3000
# Use the https:// URL provided
```

### Browser Compatibility

| Browser | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Chrome | ✅ | ✅ | Full support |
| Edge | ✅ | ✅ | Full support |
| Safari | ✅ | ✅ | iOS 14.5+ required |
| Firefox | ✅ | ✅ | Full support |
| Opera | ✅ | ✅ | Full support |
| Samsung Internet | - | ✅ | Android only |

**Note:** Requires MediaDevices API and WebRTC support (available in all modern browsers)

## ⚙️ Configuration

### API Key Options

The application supports two API key configurations:

#### 1. Server-Side API Key (Recommended for Production)

Set your API key in `.env.local`:
```sh
ELEVENLABS_API_KEY=your_api_key_here
```

**Benefits:**
- ✅ Key hidden from client-side code
- ✅ More secure for production
- ✅ No user setup required

#### 2. Client-Side API Key (User-Provided)

Users can provide their own API key through the UI:

1. Click settings button (⚙️) in the header
2. Scroll to "API Key" section
3. Enter your ElevenLabs API key
4. Click "Save API Key"

**Benefits:**
- ✅ Each user uses their own quota
- ✅ Stored securely in browser localStorage
- ✅ Never sent to your server

### Audio Settings

All settings are configurable in-app and persist in localStorage:

- **Language**: English or Finnish UI
- **Echo Cancellation**: Reduces echo from speakers
- **Noise Suppression**: Filters background noise
- **Microphone Selection**: Choose from available audio input devices

## 🎨 UI Components

### Recording Button

- **Inactive state**: Transparent with red border, red dot icon (12px)
- **Active state**: Red pulsing background, white square icon (12px)
- **Mobile**: Icon-only display (16px) below 640px width
- **Animation**: Smooth pulse effect when recording

### Settings Panel

- **Collapsible**: Slides down from header on mobile
- **Accessible**: Full ARIA support with roles and labels
- **Export options**: PDF (print dialog) and CSV (UTF-8 with BOM)

### Transcript Display

- **Partial transcripts**: Orange background, updates in real-time
- **Confirmed transcripts**: Blue background, permanent with timestamps
- **Auto-scroll**: Keeps latest content visible
- **Semantic HTML**: Proper ul/li structure with time elements

## 🛠️ Development Guide

### Code Organization

The codebase follows these principles:

- **Single Responsibility**: Each component has one clear purpose
- **Type Safety**: TypeScript with strict mode enabled
- **Accessibility**: ARIA attributes and semantic HTML throughout
- **Performance**: Efficient re-renders with proper React hooks
- **Maintainability**: Clear comments and consistent naming

### Key Files to Know

- **`app/page.tsx`**: Main orchestration, WebRTC connection, recording logic
- **`app/translations.ts`**: Add new languages here
- **`app/components/SettingsPanel.tsx`**: Modify settings UI
- **`app/hooks/useSettings.ts`**: Add new persistent settings
- **`app/utils/exportUtils.ts`**: Modify export formats

### Adding a New Language

1. Edit `app/translations.ts`:
```typescript
export type Language = 'en' | 'fi' | 'es'; // Add 'es'

export const translations: Record<Language, Translations> = {
  en: { /* ... */ },
  fi: { /* ... */ },
  es: { // Add Spanish
    title: 'Transcripción en Tiempo Real',
    // ... all other keys
  }
};
```

2. Update language selector in `SettingsPanel.tsx`

### Customizing Styles

All styles are in `app/page.tsx` using styled-jsx:

- **Colors**: Search for color values to theme the app
- **Animations**: Modify `@keyframes pulse`, `dotPulse`, `slideDown`
- **Breakpoints**: Media queries at 640px (phone) and 480px (small phone)
- **Spacing**: Consistent padding/margin units

### Testing Locally

```sh
# Run development server
npm run dev
# or with pnpm
pnpm dev

# Build for production
npm run build

# Start production server
npm run start

# Type checking
npx tsc --noEmit
```

## 🚀 Production Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Add `ELEVENLABS_API_KEY` to environment variables
4. Deploy

**Or use CLI:**
```sh
pnpm install -g vercel
vercel --prod
```

### Netlify

1. Build the project:
```sh
pnpm build
```

2. Deploy:
```sh
pnpm install -g netlify-cli
netlify deploy --prod --dir=.next
```

3. Set environment variable `ELEVENLABS_API_KEY` in Netlify dashboard

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm && pnpm build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```sh
docker build -t nextjs-transcribe .
docker run -p 3000:3000 -e ELEVENLABS_API_KEY=your_key nextjs-transcribe
```

## 🔒 Security Considerations

- **API Key Protection**: Use server-side API key in production
- **HTTPS Only**: Required for microphone access
- **localStorage**: Client-side keys stored in browser only (not sent to server)
- **CORS**: API routes are same-origin, no cross-origin issues
- **No sensitive data logging**: Transcripts never sent to your server

## ♿ Accessibility Features

This application is built with accessibility as a priority:

- **ARIA Labels**: All interactive elements properly labeled
- **Semantic HTML**: header, main, footer, section, article elements
- **Keyboard Navigation**: Full support for tab, enter, escape keys
- **Screen Reader Support**: aria-live regions for dynamic content
- **Focus Management**: Visible focus indicators with `:focus-visible`
- **Color Contrast**: WCAG AA compliant color combinations
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Alternative Text**: Descriptive text for all icons (CSS-based, not emoji)

## 📚 Documentation & Resources

### ElevenLabs API
- [Scribe API Documentation](https://elevenlabs.io/docs/api-reference/scribe)
- [React SDK Reference](https://github.com/elevenlabs/elevenlabs-js/tree/main/packages/react)
- [API Key Management](https://elevenlabs.io/app/settings/api-keys)

### Next.js
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [TypeScript Guide](https://nextjs.org/docs/basic-features/typescript)

### Web APIs
- [MediaDevices API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices)
- [getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## 🤝 Contributing

Contributions are welcome! Areas for improvement:

- [ ] Additional language support
- [ ] More export formats (DOCX, TXT, JSON)
- [ ] Dark/light theme toggle
- [ ] Speaker diarization (when API supports it)
- [ ] Keyboard shortcuts reference panel
- [ ] Transcript editing before export
- [ ] Audio playback sync with transcript

## � Troubleshooting

### Build Errors

**Problem**: `ERESOLVE could not resolve` errors during `npm install`

**Solution**: The project uses Next.js 15 with React 19 stable. If you encounter dependency conflicts:

```sh
# Remove old dependencies
rm -rf node_modules package-lock.json
# or on Windows:
# rmdir /s /q node_modules
# del package-lock.json

# Clean install
npm install
```

### Microphone Access Issues

**Problem**: Microphone doesn't work on mobile

**Solution**: Ensure you're using HTTPS. See the [Mobile Usage](#-mobile-usage) section for setup instructions.

**Problem**: "Permission denied" error

**Solution**: 
1. Check browser permissions for microphone access
2. On mobile, ensure HTTPS is enabled
3. Try a different browser

### API Connection Issues

**Problem**: "Invalid API key" error

**Solution**:
1. Verify your API key at [ElevenLabs Dashboard](https://elevenlabs.io/app/settings/api-keys)
2. Check `.env.local` has correct key format
3. Restart the dev server after changing environment variables

**Problem**: "QUOTA_EXCEEDED" error

**Solution**: Your ElevenLabs API quota is exceeded. Check your usage at the dashboard or use a different API key.

## �📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org) - React framework
- [ElevenLabs](https://elevenlabs.io) - Speech AI platform
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Vercel](https://vercel.com) - Hosting platform

---

**Need help?** Open an issue on GitHub or check the [ElevenLabs documentation](https://elevenlabs.io/docs).
