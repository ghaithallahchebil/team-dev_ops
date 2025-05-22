import { useState } from 'react';
import Header from './components/Header';
import StartExploringForm from './components/StartExploringForm';
import AnalysisHistory from './components/AnalysisHistory';
import { AnalysisItemData } from './components/AnalysisItem';
import { AspectRatio } from "./components/ui/aspect-ratio";

function App() {
  const [analyses, setAnalyses] = useState<AnalysisItemData[]>([
    {
      id: '1',
      query: 'Show fast-growing trends in CV for 3D registration',
      timestamp: 'about 2 hours ago',
      type: 'Research',
      trends: [
        {
          id: 'trend-1',
          title: 'Neural Radiance Fields (NeRF)',
          description: 'NeRF is emerging as a dominant approach for 3D scene representation and novel view synthesis.',
          articleCount: 12,
          relevance: 92
        },
        {
          id: 'trend-2',
          title: 'Diffusion Models for 3D Generation',
          description: 'Diffusion models are being adapted for 3D content generation and registration tasks.',
          articleCount: 8,
          relevance: 85
        }
      ]
    }
  ]);

  const handleAnalyze = (query: string) => {
    // In a real app, this would make an API call to get the analysis
    // For now, we'll just add a mock analysis to the list
    const newAnalysis: AnalysisItemData = {
      id: Date.now().toString(),
      query,
      timestamp: 'just now',
      type: Math.random() > 0.5 ? 'Research' : 'Community',
      trends: [
        {
          id: `trend-${Date.now()}-1`,
          title: 'Mock Trend 1',
          description: 'This is a mock trend result for demonstration purposes.',
          articleCount: Math.floor(Math.random() * 15) + 5,
          relevance: Math.floor(Math.random() * 30) + 70
        },
        {
          id: `trend-${Date.now()}-2`,
          title: 'Mock Trend 2',
          description: 'Another mock trend to show how multiple results would appear.',
          articleCount: Math.floor(Math.random() * 10) + 3,
          relevance: Math.floor(Math.random() * 40) + 50
        }
      ]
    };

    setAnalyses([newAnalysis, ...analyses]);
  };

  const handleRefreshAnalysis = (id: string) => {
    // In a real app, this would refresh the specific analysis
    console.log('Refreshing analysis:', id);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background image with AspectRatio */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="w-full h-full overflow-hidden">
          <AspectRatio ratio={16 / 9} className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Background"
              className="w-full h-full object-cover brightness-110 blur-lg"
              style={{ transform: 'scale(1.1)' }} // Ensures blur doesn't show edges
            />
          </AspectRatio>
        </div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto py-8 px-4 max-w-4xl">
          <div className="space-y-8">
            <StartExploringForm onAnalyze={handleAnalyze} />
            <AnalysisHistory 
              items={analyses}
              onRefreshAnalysis={handleRefreshAnalysis}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App; 