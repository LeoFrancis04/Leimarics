// frontend/app/portfolio/[slug]/page.tsx

export default async function ProjectPage({ 
    params 
  }: { 
    params: Promise<{ slug: string }> 
  }) {
    // Await the params
    const { slug } = await params
    
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Project: {slug.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </h1>
          
          <div className="bg-gradient-to-br from-coral-50 to-pink-50 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
            <p className="text-gray-600 mb-6">
              We're working on the detailed project page for this case study. 
              Check back soon to see the full story!
            </p>
            <a 
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral-500 text-white rounded-xl font-semibold hover:bg-coral-600 transition-colors"
            >
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    )
  }