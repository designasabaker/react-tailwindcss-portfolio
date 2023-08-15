import { db } from "../firebase";
import { query, orderBy, getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from 'react';


const fetchData = async () => {
    const visitsCollection = collection(db, "visits");
    const q = query(visitsCollection, orderBy("formattedTimestamp", "desc")); // Optional: order by timestamp in descending order
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => {
        const data = doc.data();
        const locationString = `${data.location.city}, ${data.location.region}, ${data.location.country}`;
        return {
            id: doc.id,
            ...data,
            locationString,
        }
    });
};

const fullCountryName = (countryCode) => {
    switch (countryCode.toUpperCase()) {
        case 'US':
            return 'United States';
        case 'GB':
            return 'United Kingdom';
        case 'KR':
            return 'South Korea';
        case 'TW':
            return 'Taiwan';
        case 'HK':
            return 'Hong Kong';
        case 'VN':
            return 'Vietnam';
        case 'CA':
            return 'Canada';
        case 'JP':
            return 'Japan';
        case 'SG':
            return 'Singapore';
        case 'CN':
            return 'China';
        default:
            return countryCode;
    }
}

const unLocalTimeString = (timeString) => {
    const [date, time] = timeString.split(', ');
    const [month, day, year] = date.split('/');
    // const [time12, ampm] = time.split(' ');
    // const [hour, minute, second] = time12.split(':');
    return new Date(year, month - 1, day);
}

console.log('unLocalTimeString',unLocalTimeString('8/1/2021, 12:00:00 AM'));
console.log('test 1', unLocalTimeString('8/4/2021, 12:00:00 AM') - unLocalTimeString('8/1/2021, 12:00:00 AM'));
console.log('test 2', unLocalTimeString('8/1/2021, 12:00:00 AM') - unLocalTimeString('8/4/2021, 12:00:00 AM'));

const Log = () => {
    const [visits, setVisits] = useState([]);
    const [visitsInitials, setVisitsInitials] = useState([]);
    const [locationStrings, setlocationStrings] = useState([]);
    const [locationsFilters, setlocationsFilters] = useState({});
    const [countries, setCountries] = useState([]);
    const [countriesFilters, setCountriesFilters] = useState({});
    const [condition, setCondition] = useState('');

    const handleRegionCheckChange = (event) => {
        setlocationsFilters(prev => ({
            ...prev,
            [event.target.name]: event.target.checked
        }));
    }

    const handleCountryCheckChange = (event) => {
        setCountriesFilters(prev => ({
            ...prev,
            [event.target.name]: event.target.checked
        }));
    }

    const setAllCountries = (bool) => {
        const newCountriesFilters = countries.reduce((acc, country) => {
            acc[country] = bool;
            return acc;
        }, {});

        setCountriesFilters(newCountriesFilters);
    }

    useEffect(() => {
        const fetchVisits = async () => {
            setCondition('fetching data')
            const fetchedVisits = await fetchData();
            console.log('fetchedVisits',fetchedVisits)
            const sortedVisits = fetchedVisits.sort((a, b) => unLocalTimeString(b.formattedTimestamp) - unLocalTimeString(a.formattedTimestamp));

            const uniqueLocations = [...new Set(fetchedVisits.map(visit => visit.locationString))];

            const locationsFiltersInitial = uniqueLocations.reduce((acc, location) => {
                acc[location] = true;
                return acc;
            }, {});

            const uniqueCountries = [...new Set(fetchedVisits.map(visit => visit.location.country))];
            const countriesFiltersInitial = uniqueCountries.reduce((acc, country) => {
                acc[country] = true;
                return acc;
            }, {});

            setVisits(sortedVisits);
            setVisitsInitials(sortedVisits);
            setlocationStrings(uniqueLocations);
            setlocationsFilters(locationsFiltersInitial);
            setCountries(uniqueCountries);
            setCountriesFilters(countriesFiltersInitial);
            setCondition('data set')
        };

        fetchVisits();
    }, []);


    useEffect(() => {
        const newVisits = visitsInitials
            .filter(visit => !!locationsFilters[visit.locationString])
            .filter(visit => !!countriesFilters[visit.location.country]);

        setVisits(newVisits);
    },[locationsFilters, countriesFilters])

    return (
        <div>
            <div className={'grid grid-cols-2 gap-3 px-6'}>
                <div className={'scrollable-container px-6'}>
                    {visits.map((visit,index) => (
                        <div key={visit.id} className={'text-white'}>
                            <span>{index}</span>
                            <div>
                                <span>Time: {visit.formattedTimestamp};</span>&nbsp;&nbsp;&nbsp;
                                <span>IP: {visit.ipAddress};</span>
                            </div>
                            <span>Location: {`${visit.location?.city}-${visit.location?.region}-${visit.location?.country}`};</span>
                        </div>
                    ))}
                </div>
                <div className={'scrollable-container'}>
                    <h1 className={'text-white'}>Log: {condition}</h1>
                    <h1 className={'text-white'}>Filter:</h1>
                    <div className={'text-white grid grid-cols-2'}>
                        <div>
                            <span>Region:</span>
                            {locationStrings.map(location => {
                                return (
                                    <div key={location}>
                                        <input type="checkbox" name={location} checked={!!locationsFilters[location]} onChange={handleRegionCheckChange}/>
                                        &nbsp;<label htmlFor={location}>{location}</label>
                                    </div>)})}
                        </div>
                        <div>
                            <span>Country:</span>
                            {countries.map(country => {
                                return (
                                    <div key={country} className={'flex flex-row'}>
                                        <input type="checkbox" name={country} checked={!!countriesFilters[country]} onChange={handleCountryCheckChange}/>
                                        &nbsp;<label htmlFor={country}>{fullCountryName(country)}</label>
                                    </div>)})
                            }
                            <div>
                                <button className={'btn'} onClick={()=>setAllCountries(true)}>Check all</button>
                                <button className={'btn'} onClick={()=>setAllCountries(false)}>Uncheck all</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Log;