// destinationsData.js
const destinations = [
    {
        name: 'Washington',
        country: 'USA',
        days: 6,
        startDate: '2024-11-01',
        endDate: '2024-11-06',
        cost: 500,
        image: './site images/new york.jpg',
        description: "Experience the charm of the city that never sleeps.",
        link: "Cities.html?destination=NewYork",
        itineraries: [
            { title: 'City Landmarks Tour', activities: ['Visit the Statue of Liberty', 'Explore Central Park', 'See Times Square'], activitiesDuration: ['Day 1', 'Day 2', 'Day 3'] },
            { title: 'Museum and Culture Tour', activities: ['Visit the Metropolitan Museum of Art', 'Explore the Museum of Modern Art', 'Check out the American Museum of Natural History'], activitiesDuration: ['Day 1', 'Day 2', 'Day 3'] }
        ]
    },
    {
        name: 'Maldives',
        country: 'Maldives',
        days: 6,
        startDate: '2024-11-15',
        endDate: '2024-11-21',
        cost: 450,
        image: './site images/maldives.jpg',
        description: "Escape to the pristine beaches and crystal-clear waters of the Maldives.",
        link: "Cities.html?destination=Maldives",
        itineraries: [
            { title: 'Beach and Resort Tour', activities: ['Relax on the sandy beaches', 'Snorkel in coral reefs', 'Stay at a luxury overwater villa'], activitiesDuration: ['Day 1', 'Day 2', 'Day 3'] },
            { title: 'Adventure and Exploration', activities: ['Scuba dive to explore marine life', 'Visit the local islands', 'Enjoy a dolphin-watching tour'], activitiesDuration: ['Day 1', 'Day 2', 'Day 3'] }
        ]
    },
    {
        name: 'Norway',
        country: 'Norway',
        days: 6,
        startDate: '2024-11-20',
        endDate: '2024-11-26',
        cost: 800,
        image: './site images/norway.jpg',
        description: "Discover the breathtaking natural beauty of Norway with stunning fjords and mountains.",
        link: "Cities.html?destination=Norway",
        itineraries: [
            { title: 'Fjord and Nature Tour', activities: ['Visit the Geirangerfjord', 'Explore the Sognefjord', 'Hike Preikestolen'], activitiesDuration: ['Day 1', 'Day 2', 'Day 3'] },
            { title: 'Cultural and Historical Tour', activities: ['Explore the Viking Ship Museum', 'Visit the Nidaros Cathedral', 'Tour the streets of Bergen'], activitiesDuration: ['Day 1', 'Day 2', 'Day 3'] }
        ]
    }
    
];

export default destinations;
