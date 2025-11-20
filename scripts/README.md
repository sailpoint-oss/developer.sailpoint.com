# Discourse AI Persona File Uploader

This script uploads markdown documentation files to Discourse AI personas (RAG/knowledge base).

## Prerequisites

- Node.js installed
- `.env` file configured with required credentials

## Setup

1. Create a `.env` file in the `scripts` directory with:

```env
DISCOURSE_API_KEY=your_api_key_here
DISCOURSE_URL=https://developer.sailpoint.com/discuss
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Configure Personas

Edit `app.ts` to specify which personas to update and which documentation paths to upload:

```typescript
const personas = [
    {
        id: 4,  // AI Persona ID from Discourse
        paths: [
            {path: '../docs/api/v2025', recursive: true}
        ]
    }
]
```

### Run the Script

```bash
npm run start
```

The script will:
1. Process API specification files (formats them for AI consumption)
2. Find all `.md` files in the configured paths
3. Upload each file to Discourse
4. Associate the uploaded files with the specified AI persona

