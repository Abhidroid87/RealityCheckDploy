# RealityCheck AI 2.0 - Ollama-Powered Intelligence Platform

Advanced AI-powered intelligence platform with **Ollama-only integration**, real-time web scraping, enhanced discovery features, visual analytics, and comprehensive media verification capabilities.

## 🚀 Quick Deployment to Vercel

### Prerequisites
1. **Supabase Account**: Create a project at [supabase.com](https://supabase.com)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

### Step 1: Set up Supabase
1. Create a new Supabase project
2. Go to Settings → API
3. Copy your Project URL and anon/public key
4. Go to SQL Editor and run the migration from `supabase/migrations/20250626175139_snowy_block.sql`

### Step 2: Deploy to Vercel

#### Option A: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/realitycheck-ai)

#### Option B: Manual Deploy
1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import your forked repository
4. Add environment variables in Vercel dashboard:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
5. Deploy!

### Step 3: Configure Environment Variables

**Required Variables:**
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**Optional API Keys (for enhanced features):**
```env
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_NEWSAPI_KEY=your_newsapi_key
VITE_BING_IMAGE_API_KEY=your_bing_image_search_api_key
```

### Troubleshooting Deployment Issues

#### Blank Screen on Vercel
1. **Check Environment Variables**: Ensure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set correctly
2. **Check Build Logs**: Look for errors in the Vercel build logs
3. **Check Browser Console**: Open developer tools and check for JavaScript errors
4. **Verify Supabase**: Test your Supabase connection in the local environment first

#### Common Issues
- **Environment Variables**: Must start with `VITE_` to be accessible in the browser
- **Supabase URL**: Must be the full URL including `https://`
- **Build Errors**: Check that all dependencies are properly installed
- **CORS Issues**: Supabase should handle CORS automatically

#### Debug Steps
1. Check Vercel function logs
2. Verify environment variables are set in Vercel dashboard
3. Test the build locally with `npm run build && npm run preview`
4. Check that the Supabase migration was run successfully

## 🛠 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for database)
- Ollama installed locally (optional, for AI features)

### Setup
```bash
# Clone the repository
git clone https://github.com/your-username/realitycheck-ai
cd realitycheck-ai

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your Supabase credentials
# VITE_SUPABASE_URL=https://your-project-id.supabase.co
# VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Start development server
npm run dev
```

### Ollama Setup (Optional)
```bash
# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Start Ollama
ollama serve

# Install models
ollama pull llama2
ollama pull codellama
ollama pull mistral
```

## 🌟 Features

### 🤖 **Ollama-Only AI Integration**
- **Local AI Processing**: Complete privacy with local Ollama models
- **Auto-Detection**: Automatically discovers installed Ollama models
- **Model Switching**: Dynamic model selection during conversations
- **No API Keys Required**: Zero external dependencies for AI functionality

### 🌐 **Real-time Web Scraping**
- **SearXNG Integration**: Free, open-source metasearch engine
- **Image Scraping**: Automatic extraction from og:image, Twitter cards
- **Multiple Instance Rotation**: Automatic failover across public instances
- **Live Trending Analysis**: Real-time topic detection and scoring

### 🧭 **Enhanced Discover**
- **Smart Summaries**: AI-powered article analysis with RAG pipeline
- **Horizontal Scrolling**: Category-based article browsing
- **Clickable Intelligence**: In-app article summaries
- **Timeline Generation**: Event chronology with AI analysis

### 📈 **Advanced Trending Intelligence**
- **Live Topic Clusters**: Real-time trending topic analysis with images
- **Growth Tracking**: Trend momentum and velocity metrics
- **Visual Analytics**: Interactive charts, heatmaps, and knowledge graphs
- **Category Filtering**: Technology, health, politics, climate, business

### 🧠 **Dynamic AI Chat**
- **Local Model Selection**: Choose from installed Ollama models
- **Real-time Switching**: Change models mid-conversation
- **Voice Integration**: Speech-to-text and text-to-speech
- **Session Management**: Persistent chat history

### 📊 **Visual Data Analytics**
- **Timeline Charts**: Interactive event progression visualization
- **Knowledge Graphs**: Entity relationship mapping with clickable nodes
- **Trending Heatmaps**: 24-hour topic intensity visualization
- **Metrics Dashboard**: Real-time platform statistics

## 🔧 Technology Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **AI**: Ollama (local), OpenAI, Claude, Mistral (optional)
- **Database**: Supabase (PostgreSQL)
- **Visualization**: Recharts, Chart.js, React Force Graph
- **Animation**: Framer Motion
- **Deployment**: Vercel, Netlify

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- Create an issue for bugs or feature requests
- Check the documentation for setup help
- Join our community for real-time support

---

**RealityCheck AI 2.0** - The first truly local intelligence platform powered by Ollama.