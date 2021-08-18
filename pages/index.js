import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import Header from './../components/Header';

export default function Home({ exploreData, liveAnywhereData }) {
  
  return (
    <div className="">
      <Head>
        <title>AirBNB Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              exploreData?.map(({ img, location, distance }) => (
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              ))
            }
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {
              liveAnywhereData?.map(({ img, title }) => (
                <MediumCard
                  key={img}
                  img={img}
                  title={title}
                />
              ))
            }
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Gratest Outdoors"
          description="Wishlists created by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then((response) => response.json())
    .catch(error => console.error(error));
  
  const liveAnywhereData = await fetch('https://links.papareact.com/zp1')
    .then((response) => response.json())
    .catch(error => console.error(error));
  
  return {
    props: {
      exploreData,
      liveAnywhereData
    }
  }
}