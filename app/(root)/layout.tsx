import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

  const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    
    <div className="min-h-screen bg-black-100"> {/* Added background & min-height */}
      <Navbar />
      <main > 
        {children}
      </main>
      <Footer />
    </div>
    
  )
} 

export default layout 
