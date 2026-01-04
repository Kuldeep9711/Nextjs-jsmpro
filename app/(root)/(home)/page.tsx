

 import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import Filters from '@/components/ui/Filters'
import { getResources } from '@/sanity/action'


const page = async () => {
  const resources = await getResources({
       query: '',
       category: '',
       page: 1,
  })

  
  return (
   <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
    <section className='nav-padding w-full'>
      <div className="flex-center relative min-h-68.5 w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
        <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
          JavaScript Mastery Resources</h1>
      </div>
      <SearchForm/>
    </section>
    
   < Filters/>

   <section className="flex-center mt-6 w-full flex-col sm:mt-20">
      <h2 className='text-2xl font-semibold mb-6'>Header</h2>
       
      
      <div className=" mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
         {resources && resources.length > 0 ? (
            resources.map((resource: any) => (
             <ResourceCard 
               key={resource._id}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              downloadNumber={resource.views}
              downloadlink={resource.downloadlink}
              /> 
            ))
          ): (
            <p className="body-regular text-white-400">
             No resources found
            </p>
          )} 

      </div>


   </section> 
  </main> 
  )
}

export default page  

//