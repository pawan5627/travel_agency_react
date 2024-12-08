import React, {useState} from "react";
import Slider from "../components/Layouts/Slider";
import '../components/Styles/style.css';
import '../components/Styles/style_destination.css';
import '../components/Styles/style_form.css';
import Filter from "../components/Functions/Filter";
import destinations from '../components/Functions/destinationData';
import DestinationsList from "../components/Functions/DestinationList";


function App () {
    const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  const handleFilter = (filteredData) => {
    setFilteredDestinations(filteredData);
  };
    return (
    <div>
      <Slider />
      <div className="app-container flex  p-4">
      {/* Sidebar for Filters */}
      <aside className="filter-sidebarw-full md:w-1/4 p-6 bg-gray-800 text-white rounded-lg shadow-lg sticky top-24">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <Filter destinations={destinations} onFilter={handleFilter} />
      </aside>

      {/* Main Content for Destination List */}
      <main className="destination-list w-3/4 p-4">
        <DestinationsList destinations={filteredDestinations} />
      </main>
    </div>
    </div>
  );
};

export default App;
