// destinationsData.js
const destinations = [
    {
        name: 'Lahore',
        country: 'Pakistan',
        days: 6,
        startDate: '2024-11-01',
        endDate: '2024-11-06',
        cost: 500,
        image: './lahore.jpg',
        description: "Explore the rich history and vibrant culture of Lahore...",
        link: "Cities.html?destination=Lahore",
        itineraries: [
            { title: 'Historical Tour', activities: ['Visit the Badshahi Mosque', 'Explore the Lahore Fort', 'Visit the Wazir Khan Mosque'],  activitiesDuration: ['Day 1', 'Day 2', 'Day 3' ] },
            { title: 'Food Tour', activities: ['Taste traditional Pakistani cuisine at Anarkali Bazaar', 'Visit the famous Food Street', 'Try delicious sweets at Halwa Puri shops'],  activitiesDuration: ['Day 1', 'Day 2', 'Day 3' ] }
        ]
    },
    {
        name: 'Islamabad',
        country: 'Pakistan',
        days: 6,
        startDate: '2024-11-15',
        endDate: '2024-11-21',
        cost: 450,
        image: './Islamabad.jpg',
        description: "Experience the modern charm of Islamabad...",
        link: "Cities.html?destination=Islamabad",
        itineraries: [
            { title: 'City Tour', activities: ['Visit Faisal Mosque', 'Explore the Daman-e-Koh', 'Shop at the Centaurus Mall'] , activitiesDuration: ['Day 1', 'Day 2', 'Day 3' ]},
            { title: 'Nature Retreat', activities: ['Hike in the Margalla Hills', 'Visit the Pir Sohawa Cable Car', 'Enjoy a picnic at Lake View Park'], activitiesDuration: ['Day 1', 'Day 2', 'Day 3' ] }
        ]
    },
    {
        name: 'Gilgit',
        country: 'Pakistan',
        days: 6,
        startDate: '2024-11-20',
        endDate: '2024-11-26',
        cost: 800,
        image: './Gilgit.jpg',
        description: "Embark on an adventure in the breathtaking landscapes of Gilgit-Baltistan...",
        link: "Cities.html?destination=Gilgit",    
        itineraries: [
            { title: 'Hunza Valley Tour', activities: ['Visit Altit Fort', 'Hike to Attabad Lake', 'Explore the Hunza Valley'],  activitiesDuration: ['Day 1', 'Day 2', 'Day 3' ] },
            { title: 'Skardu Valley Tour', activities: ['Visit the Shangrila Resort', 'Trek to Deosai National Park', 'Explore the Satpara Lake'],  activitiesDuration: ['Day 1', 'Day 2', 'Day 3' ] }
        ]
    }
];

export default destinations;
