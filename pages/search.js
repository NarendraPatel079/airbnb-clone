import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
    const router = useRouter();
    // console.log(router.query);

    // ES6 Destructuring
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className="">
            {/* Header */}
            <Header
                siteTitle={"Search Result"}
                placeholder={`${location} | ${dateRange} | ${noOfGuests} guests`}
            />
            
            {/* Content */}
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        <span>300+ Stays - </span>
                        <span className="text-white py-1 px-2 rounded-full" style={{ backgroundColor: "#E76C71" }}>{formattedStartDate}</span>
                        <span className="px-1">to</span>
                        <span className="text-white py-1 px-2 rounded-full" style={{ backgroundColor: "#E76C71" }}>{formattedEndDate}</span>
                        <span className="pl-1">for {noOfGuests} guests</span>
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="search-filter--button">Cancellation Flexibility</p>
                        <p className="search-filter--button">Type of Place</p>
                        <p className="search-filter--button">Price</p>
                        <p className="search-filter--button">Rooms and Beds</p>
                        <p className="search-filter--button">More Filters</p>
                    </div>

                    <div className="flex flex-col">
                        {
                            searchResults?.map(({ img, location, title, description, star, price, total }) => (
                                <InfoCard
                                    key={img}
                                    img={img}
                                    location={location}
                                    title={title}
                                    description={description}
                                    star={star}
                                    price={price}
                                    total={total}
                                />
                            )) 
                        }
                    </div>
                </section>

                <section className="hidden sm:inline-flex xl:min-w-[500px]">
                    <Map searchResults={searchResults} />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz')
        .then((response) => response.json())
        .catch(error => console.error(error));

    return {
        props: {
            searchResults,
        }
    }
};