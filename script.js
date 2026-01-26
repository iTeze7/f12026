/* =====================================================
   F1 2026 Landing Page - JavaScript
   ===================================================== */

const races2026 = [
    { id: 1, name: "Grande Prêmio da Austrália", country: "Austrália", city: "Melbourne", circuit: "Albert Park Circuit", date: "06-08 Mar 2026", time: "06:00", flag: "au", countryCode: "au", circuitPath: "M50,30 L80,25 L95,40 L90,65 L70,80 L40,75 L25,55 L30,35 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png" },
    { id: 2, name: "Grande Prêmio da China", country: "China", city: "Xangai", circuit: "Shanghai International Circuit", date: "13-15 Mar 2026", time: "08:00", flag: "🇨🇳", countryCode: "cn", circuitPath: "M30,20 L70,20 L85,35 L85,50 L70,60 L50,55 L50,75 L30,80 L20,60 L20,40 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png" },
    { id: 3, name: "Grande Prêmio do Japão", country: "Japão", city: "Suzuka", circuit: "Suzuka International Racing Course", date: "27-29 Mar 2026", time: "07:00", flag: "🇯🇵", countryCode: "jp", circuitPath: "M25,50 C35,20 65,20 75,50 C85,80 65,90 50,85 C35,80 15,80 25,50", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png" },
    { id: 4, name: "Grande Prêmio do Bahrein", country: "Bahrein", city: "Sakhir", circuit: "Bahrain International Circuit", date: "10-12 Abr 2026", time: "18:00", flag: "🇧🇭", countryCode: "bh", circuitPath: "M40,20 L70,20 L80,35 L75,55 L85,70 L70,85 L40,85 L25,70 L30,50 L25,35 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png" },
    { id: 5, name: "Grande Prêmio da Arábia Saudita", country: "Arábia Saudita", city: "Jeddah", circuit: "Jeddah Corniche Circuit", date: "17-19 Abr 2026", time: "20:00", flag: "🇸🇦", countryCode: "sa", circuitPath: "M20,40 L30,25 L50,20 L70,25 L85,40 L80,60 L70,75 L50,80 L30,75 L20,60 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png" },
    { id: 6, name: "Grande Prêmio de Miami", country: "Estados Unidos", city: "Miami", circuit: "Miami International Autodrome", date: "01-03 Mai 2026", time: "16:00", flag: "🇺🇸", countryCode: "us", circuitPath: "M25,30 L75,30 L85,45 L85,65 L70,80 L30,80 L15,65 L15,45 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png" },
    { id: 7, name: "Grande Prêmio do Canadá", country: "Canadá", city: "Montreal", circuit: "Circuit Gilles Villeneuve", date: "22-24 Mai 2026", time: "14:00", flag: "🇨🇦", countryCode: "ca", circuitPath: "M20,50 L40,20 L60,20 L80,50 L60,80 L40,80 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png" },
    { id: 8, name: "Grande Prêmio de Mônaco", country: "Mônaco", city: "Monte Carlo", circuit: "Circuit de Monaco", date: "05-07 Jun 2026", time: "15:00", flag: "🇲🇨", countryCode: "mc", circuitPath: "M20,40 L40,20 L70,25 L85,45 L75,70 L50,85 L25,75 L15,55 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png" },
    { id: 9, name: "Grande Prêmio da Espanha", country: "Espanha", city: "Barcelona", circuit: "Circuito da Catalunha", date: "12-14 Jun 2026", time: "15:00", flag: "🇪🇸", countryCode: "es", circuitPath: "M30,25 L70,25 L85,40 L80,60 L85,80 L50,85 L15,80 L20,60 L15,40 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png" },
    { id: 10, name: "Grande Prêmio da Áustria", country: "Áustria", city: "Spielberg", circuit: "Red Bull Ring", date: "26-28 Jun 2026", time: "15:00", flag: "🇦🇹", countryCode: "at", circuitPath: "M30,30 L70,25 L85,50 L70,75 L30,80 L15,50 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png" },
    { id: 11, name: "Grande Prêmio da Grã-Bretanha", country: "Reino Unido", city: "Silverstone", circuit: "Silverstone Circuit", date: "03-05 Jul 2026", time: "15:00", flag: "🇬🇧", countryCode: "gb", circuitPath: "M25,35 L50,20 L75,35 L85,55 L70,75 L40,80 L20,65 L15,45 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png" },
    { id: 12, name: "Grande Prêmio da Bélgica", country: "Bélgica", city: "Spa", circuit: "Circuit de Spa-Francorchamps", date: "17-19 Jul 2026", time: "15:00", flag: "🇧🇪", countryCode: "be", circuitPath: "M15,40 L35,20 L65,25 L85,45 L80,70 L55,85 L25,75 L15,55 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png" },
    { id: 13, name: "Grande Prêmio da Hungria", country: "Hungria", city: "Budapeste", circuit: "Hungaroring", date: "24-26 Jul 2026", time: "15:00", flag: "🇭🇺", countryCode: "hu", circuitPath: "M25,30 L75,30 L80,50 L75,70 L50,85 L25,70 L20,50 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png" },
    { id: 14, name: "Grande Prêmio da Holanda", country: "Holanda", city: "Zandvoort", circuit: "Circuit Zandvoort", date: "21-23 Ago 2026", time: "15:00", flag: "🇳🇱", countryCode: "nl", circuitPath: "M30,25 L70,25 L85,45 L80,65 L60,80 L35,80 L15,60 L20,40 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png" },
    { id: 15, name: "Grande Prêmio da Itália", country: "Itália", city: "Monza", circuit: "Autodromo Nazionale Monza", date: "04-06 Set 2026", time: "15:00", flag: "🇮🇹", countryCode: "it", circuitPath: "M30,20 L70,20 L85,40 L80,60 L70,80 L30,80 L20,60 L15,40 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png" },
    { id: 16, name: "Grande Prêmio da Espanha", country: "Espanha", city: "Madrid", circuit: "Circuito de Madrid", date: "11-13 Set 2026", time: "15:00", flag: "🇪🇸", countryCode: "es", circuitPath: "M30,25 L70,25 L85,40 L80,60 L85,80 L50,85 L15,80 L20,60 L15,40 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png" },
    { id: 17, name: "Grande Prêmio do Azerbaijão", country: "Azerbaijão", city: "Baku", circuit: "Baku City Circuit", date: "24-26 Set 2026", time: "13:00", flag: "🇦🇿", countryCode: "az", circuitPath: "M20,30 L50,20 L80,30 L85,55 L70,80 L40,85 L15,70 L15,45 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Azerbaijan_Circuit.png" },
    { id: 18, name: "Grande Prêmio de Singapura", country: "Singapura", city: "Singapura", circuit: "Marina Bay Street Circuit", date: "09-11 Out 2026", time: "14:00", flag: "🇸🇬", countryCode: "sg", circuitPath: "M25,25 L75,25 L85,50 L75,75 L50,85 L25,75 L15,50 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png" },
    { id: 19, name: "Grande Prêmio dos Estados Unidos", country: "Estados Unidos", city: "Austin", circuit: "Circuit of the Americas", date: "23-25 Out 2026", time: "15:00", flag: "🇺🇸", countryCode: "us", circuitPath: "M20,35 L45,20 L75,30 L85,50 L75,70 L45,80 L20,65 L15,50 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/United_States_Circuit.png" },
    { id: 20, name: "Grande Prêmio do México", country: "México", city: "Cidade do México", circuit: "Autódromo Hermanos Rodríguez", date: "30-01 Nov 2026", time: "14:00", flag: "🇲🇽", countryCode: "mx", circuitPath: "M25,30 L70,25 L85,45 L80,65 L60,80 L30,80 L15,60 L20,40 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png" },
    { id: 21, name: "Grande Prêmio do Brasil", country: "Brasil", city: "São Paulo", circuit: "Autódromo José Carlos Pace", date: "06-08 Nov 2026", time: "14:00", flag: "🇧🇷", countryCode: "br", circuitPath: "M30,20 L75,25 L85,50 L70,80 L35,85 L15,60 L20,35 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png" },
    { id: 22, name: "Grande Prêmio de Las Vegas", country: "Estados Unidos", city: "Las Vegas", circuit: "Las Vegas Strip Circuit", date: "19-21 Nov 2026", time: "06:00", flag: "🇺🇸", countryCode: "us", circuitPath: "M20,30 L80,30 L85,50 L80,70 L50,85 L20,70 L15,50 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png" },
    { id: 23, name: "Grande Prêmio do Catar", country: "Catar", city: "Lusail", circuit: "Lusail International Circuit", date: "27-29 Nov 2026", time: "18:00", flag: "🇶🇦", countryCode: "qa", circuitPath: "M25,25 L75,25 L85,45 L75,70 L50,85 L25,70 L15,45 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png" },
    { id: 24, name: "Grande Prêmio de Abu Dhabi", country: "Emirados Árabes", city: "Abu Dhabi", circuit: "Yas Marina Circuit", date: "04-06 Dez 2026", time: "17:00", flag: "🇦🇪", countryCode: "ae", circuitPath: "M25,30 L50,20 L75,30 L85,50 L75,70 L50,80 L25,70 L15,50 Z", circuitImage: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png" }
];

const drivers2026 = [
    { id: 1, firstName: "Lando", lastName: "Norris", number: 1, team: "McLaren", country: "Reino Unido", flag: "🇬🇧", countryCode: "gb", worldTitles: 1, isCurrentChampion: true, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/norris", teamColor: "#FF8000" },
    { id: 2, firstName: "Oscar", lastName: "Piastri", number: 81, team: "McLaren", country: "Austrália", flag: "🇦🇺", countryCode: "au", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/piastri", teamColor: "#FF8000" },
    { id: 3, firstName: "Charles", lastName: "Leclerc", number: 16, team: "Ferrari", country: "Mônaco", flag: "🇲🇨", countryCode: "mc", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/leclerc", teamColor: "#E80020" },
    { id: 4, firstName: "Lewis", lastName: "Hamilton", number: 44, team: "Ferrari", country: "Reino Unido", flag: "🇬🇧", countryCode: "gb", worldTitles: 7, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hamilton", teamColor: "#E80020" },
    { id: 5, firstName: "Max", lastName: "Verstappen", number: 3, team: "Red Bull Racing", country: "Holanda", flag: "🇳🇱", countryCode: "nl", worldTitles: 4, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/verstappen", teamColor: "#3671C6" },
    { id: 6, firstName: "Isack", lastName: "Hadjar", number: 6, team: "Red Bull Racing", country: "França", flag: "🇫🇷", countryCode: "fr", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hadjar", teamColor: "#3671C6" },
    { id: 7, firstName: "George", lastName: "Russell", number: 63, team: "Mercedes", country: "Reino Unido", flag: "🇬🇧", countryCode: "gb", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/russell", teamColor: "#27F4D2" },
    { id: 8, firstName: "Andrea Kimi", lastName: "Antonelli", number: 12, team: "Mercedes", country: "Itália", flag: "🇮🇹", countryCode: "it", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/antonelli", teamColor: "#27F4D2" },
    { id: 9, firstName: "Fernando", lastName: "Alonso", number: 14, team: "Aston Martin", country: "Espanha", flag: "🇪🇸", countryCode: "es", worldTitles: 2, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/alonso", teamColor: "#229971" },
    { id: 10, firstName: "Lance", lastName: "Stroll", number: 18, team: "Aston Martin", country: "Canadá", flag: "🇨🇦", countryCode: "ca", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/stroll", teamColor: "#229971" },
    { id: 11, firstName: "Pierre", lastName: "Gasly", number: 10, team: "Alpine", country: "França", flag: "🇫🇷", countryCode: "fr", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/gasly", teamColor: "#FF87BC" },
    { id: 12, firstName: "Franco", lastName: "Colapinto", number: 43, team: "Alpine", country: "Argentina", flag: "🇦🇷", countryCode: "ar", worldTitles: 0, isCurrentChampion: false, image: "pilotos/colapinto.png", teamColor: "#FF87BC" },
    { id: 13, firstName: "Nico", lastName: "Hülkenberg", number: 27, team: "Audi", country: "Alemanha", flag: "🇩🇪", countryCode: "de", worldTitles: 0, isCurrentChampion: false, image: "pilotos/hulk.png", teamColor: "#6b0e0e" },
    { id: 14, firstName: "Gabriel", lastName: "Bortoleto", number: 5, team: "Audi", country: "Brasil", flag: "🇧🇷", countryCode: "br", worldTitles: 0, isCurrentChampion: false, image: "pilotos/bortoleto.png", teamColor: "#6b0e0e" },
    { id: 15, firstName: "Liam", lastName: "Lawson", number: 30, team: "Racing Bulls", country: "Nova Zelândia", flag: "🇳🇿", countryCode: "nz", worldTitles: 0, isCurrentChampion: false, image: "pilotos/liam.png", teamColor: "#6692FF" },
    { id: 16, firstName: "Arvid", lastName: "Lindblad", number: 41, team: "Racing Bulls", country: "Reino Unido", flag: "🇬🇧", countryCode: "gb", worldTitles: 0, isCurrentChampion: false, image: "pilotos/arvid.png", teamColor: "#6692FF" },
    { id: 17, firstName: "Alexander", lastName: "Albon", number: 23, team: "Williams", country: "Tailândia", flag: "🇹🇭", countryCode: "th", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/albon", teamColor: "#1868DB" },
    { id: 18, firstName: "Carlos", lastName: "Sainz", number: 55, team: "Williams", country: "Espanha", flag: "🇪🇸", countryCode: "es", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/sainz", teamColor: "#1868DB" },
    { id: 19, firstName: "Esteban", lastName: "Ocon", number: 31, team: "Haas", country: "França", flag: "🇫🇷", countryCode: "fr", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/ocon", teamColor: "#B6BABD" },
    { id: 20, firstName: "Oliver", lastName: "Bearman", number: 87, team: "Haas", country: "Reino Unido", flag: "🇬🇧", countryCode: "gb", worldTitles: 0, isCurrentChampion: false, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/bearman", teamColor: "#B6BABD" },
    { id: 21, firstName: "Valtteri", lastName: "Bottas", number: 77, team: "Cadillac", country: "Finland", flag: "🇫🇮", countryCode: "fi", worldTitles: 0, isCurrentChampion: false, image: "pilotos/bottas.png", teamColor: "#ffffff" },
    { id: 22, firstName: "Sergio", lastName: "Perez", number: 11, team: "Cadillac", country: "Mexico", flag: "🇲🇽", countryCode: "mx", worldTitles: 0, isCurrentChampion: false, image: "pilotos/perez.png", teamColor: "#fcfbfb" }
];

const teams2026 = [
    { id: 1, name: "McLaren", fullName: "McLaren F1 Team", color: "#FF8000", logo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_195/content/dam/fom-website/2018-redesign-assets/team%20logos/mclaren", drivers: ["Lando Norris", "Oscar Piastri"], championships: 9 },
    { id: 2, name: "Ferrari", fullName: "Scuderia Ferrari", color: "#E80020", logo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_195/content/dam/fom-website/2018-redesign-assets/team%20logos/ferrari", drivers: ["Charles Leclerc", "Lewis Hamilton"], championships: 16 },
    { id: 3, name: "Red Bull Racing", fullName: "Oracle Red Bull Racing", color: "#3671C6", logo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_195/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull", drivers: ["Max Verstappen", "Isack Hadjar"], championships: 6 },
    { id: 4, name: "Mercedes", fullName: "Mercedes-AMG PETRONAS F1 Team", color: "#27F4D2", logo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_195/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes", drivers: ["George Russell", "Andrea Kimi Antonelli"], championships: 8 },
    { id: 5, name: "Aston Martin", fullName: "Aston Martin Aramco F1 Team", color: "#229971", logo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_195/content/dam/fom-website/2018-redesign-assets/team%20logos/aston%20martin", drivers: ["Fernando Alonso", "Lance Stroll"], championships: 0 },
    { id: 6, name: "Alpine", fullName: "BWT Alpine F1 Team", color: "#FF87BC", logo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_195/content/dam/fom-website/2018-redesign-assets/team%20logos/alpine", drivers: ["Pierre Gasly", "Fraco Colapinto"], championships: 2 },
    { id: 7, name: "Audi", fullName: "Audi F1 Team", color: "#6b0e0e", logo:"equipe/audi.png" , drivers:["Nico Hülkenberg","Gabriel Bortoleto"], championships : 0 },
    { id: 8, name: "Racing Bulls", fullName: "Visa Cash App RB F1 Team", color: "#6692FF", logo: "equipe/rb.png", drivers: ["Liam Lawson", "Arvind Lindblad"], championships: 0 },
    { id: 9, name: "Williams", fullName: "Williams Racing", color: "#1868DB", logo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_195/content/dam/fom-website/2018-redesign-assets/team%20logos/williams", drivers: ["Alexander Albon", "Carlos Sainz"], championships: 9 },
    { id: 10, name: "Haas", fullName: "MoneyGram Haas F1 Team", color: "#B6BABD", logo: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_195/content/dam/fom-website/2018-redesign-assets/team%20logos/haas", drivers: ["Esteban Ocon", "Oliver Bearman"], championships: 0 },
    { id: 11, name: "Cadillac", fullName: "Cadillac F1 Team", color: "#ffffff", logo: "equipe/cadillac.png", drivers: ["Sergio Perez", "Valterri Bottas"], championships: 0 }
];

const cars2026 = [
    { id: 1, team: "McLaren", model: "MCL40", color: "#FF8000", images: ["carro/M.png"] },
    { id: 2, team: "Ferrari", model: "SF-26", color: "#E80020", images: ["carro/ferrari.png", "carro/ferrari1.png", "carro/ferrari2.png", "carro/ferrari3.png"] },
    { id: 3, team: "Red Bull Racing", model: "RB22", color: "#3671C6", images: ["carro/redbull5.png", "carro/redbull2.png", "carro/redbull3.png", "carro/redbull.png"] },
    { id: 4, team: "Mercedes", model: "W17", color: "#27F4D2", images: ["carro/mercedes3.png", "carro/mercedes.png", "carro/mercedes4.png"] },
    { id: 5, team: "Aston Martin", model: "AMR26", color: "#229971", images: ["carro/A.png"] },
    { id: 6, team: "Alpine", model: "A526", color: "#FF87BC", images: ["carro/alpine.png", "carro/alpine2.png", "carro/alpine3.png"] },
    { id: 7, team: "Audi", model: "R26", color: "#6b0e0e", images: ["carro/audi.png", "carro/audi2.png", "carro/audi4.png"] },
    { id: 8, team: "Racing Bulls", model: "VCARB 03", color: "#6692FF", images: ["carro/rb5.png", "carro/rb2.png", "carro/rb3.png", "carro/rb4.png",] },
    { id: 9, team: "Williams", model: "FW47", color: "#1868DB", images: ["carro/W.png"] },
    { id: 10, team: "Haas", model: "VF-26", color: "#B6BABD", images: ["carro/haas3.png"] },
    { id: 11, team: "Cadillac", model: "CAD-01", color: "#ffffff", images: ["carro/C.png"] }
];

// =====================================================
// DOM Elements
// =====================================================

const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const racesGrid = document.getElementById('racesGrid');
const driversGrid = document.getElementById('driversGrid');
const teamsGrid = document.getElementById('teamsGrid');
const carsGrid = document.getElementById('carsGrid');
const calendarTimeline = document.getElementById('calendarTimeline');

// =====================================================
// Navbar Scroll Effect
// =====================================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =====================================================
// Mobile Menu Toggle
// =====================================================

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('mobile-open');
    });
});

// =====================================================
// Render Races
// =====================================================

function renderRaces() {
    const upcomingRaces = races2026.slice(0, 8);
    
    racesGrid.innerHTML = upcomingRaces.map((race, index) => `
        <div class="card race-card animate-fade-up stagger-${index + 1}">
            <div class="race-card-default">
                <span class="race-flag"><img src="https://flagcdn.com/w20/${race.countryCode}.png" alt="${race.country}" style="width: 20px; height: 15px;"></span>
                <div class="race-info">
                    <span class="race-round">Round ${race.id}</span>
                    <h3 class="race-name">${race.name}</h3>
                    <p class="race-circuit">${race.circuit}</p>
                </div>
                <div class="race-date-time">
                    <span class="race-date">${race.date}</span>
                    <span class="race-time">${race.time}</span>
                </div>
            </div>
            <div class="race-card-hover">
                <span class="race-hover-flag"><img src="https://flagcdn.com/w20/${race.countryCode}.png" alt="${race.country}" style="width: 20px; height: 15px;"></span>
                <img src="${race.circuitImage}" alt="${race.circuit}" class="race-circuit-img">
                <h4 class="race-hover-name">${race.circuit}</h4>
                <p class="race-hover-location">${race.city} <img src="https://flagcdn.com/w20/${race.countryCode}.png" alt="${race.country}" style="width: 20px; height: 15px;"></p>
            </div>
            <div class="race-card-glow"></div>
        </div>
    `).join('');
}

// =====================================================
// Render Drivers
// =====================================================

function renderDrivers() {
    // Sort: champion first
    const sortedDrivers = [...drivers2026].sort((a, b) => {
        if (a.isCurrentChampion) return -1;
        if (b.isCurrentChampion) return 1;
        return 0;
    });

    driversGrid.innerHTML = sortedDrivers.map((driver, index) => `
        <div class="card driver-card animate-fade-up" style="animation-delay: ${index * 0.03}s">
            ${driver.isCurrentChampion ? '<div class="driver-crown">👑</div>' : ''}
            <div class="driver-team-bar" style="background-color: ${driver.teamColor}"></div>
            <div class="driver-image-container">
                <img src="${driver.image}" alt="${driver.firstName} ${driver.lastName}" class="driver-image" onerror="this.src='https://via.placeholder.com/300x400?text=Driver'">
                <div class="driver-image-overlay"></div>
                <span class="driver-number" style="color: ${driver.teamColor}">${driver.number}</span>
                ${driver.isCurrentChampion ? `<div class="driver-champion-glow" style="--glow-color: ${driver.teamColor}"></div>` : ''}
            </div>
            <div class="driver-info">
                <div class="driver-name-row">
                    <span class="driver-flag"><img src="https://flagcdn.com/w20/${driver.countryCode}.png" alt="${driver.country}" style="width: 20px; height: 15px;"></span>
                    <div>
                        <p class="driver-first-name">${driver.firstName}</p>
                        <h3 class="driver-last-name">${driver.lastName}</h3>
                    </div>
                </div>
                <p class="driver-team" style="color: ${driver.teamColor}">${driver.team}</p>
                ${driver.worldTitles > 0 ? `
                    <div class="driver-titles">
                        ${'<svg class="driver-star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'.repeat(driver.worldTitles)}
                        <span class="driver-titles-text">${driver.worldTitles}x Campeão Mundial</span>
                    </div>
                ` : ''}
            </div>
            <div class="driver-card-hover" style="box-shadow: inset 0 0 40px ${driver.teamColor}30"></div>
        </div>
    `).join('');
}

// =====================================================
// Render Teams
// =====================================================

function renderTeams() {
    teamsGrid.innerHTML = teams2026.map((team, index) => `
        <div class="card team-card animate-fade-up" style="animation-delay: ${index * 0.05}s">
            <div class="team-color-bar" style="background-color: ${team.color}"></div>
            <div class="team-logo-container">
                <img src="${team.logo}" alt="${team.name}" class="team-logo ${['Ferrari', 'Cadillac', 'Red Bull Racing', 'Audi', 'Racing Bulls', 'Williams', 'Haas', 'Alpine', 'McLaren'].includes(team.name) ? 'colored-logo' : ''}" onerror="this.style.display='none'">
            </div>
            <h3 class="team-name">${team.name}</h3>
            <p class="team-full-name">${team.fullName}</p>
            <div class="team-drivers">
                ${team.drivers.map(driver => `<p class="team-driver" style="color: ${team.color}">${driver}</p>`).join('')}
            </div>
            ${team.championships > 0 ? `
                <div class="team-championships">
                    <svg class="team-trophy" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 21h8v-2H8v2zm4-4a2 2 0 0 0 2-2v-1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v1a2 2 0 0 0 2 2h2z"/></svg>
                    <span class="team-championships-text">${team.championships}x Construtores</span>
                </div>
            ` : ''}
            <div class="team-card-gradient" style="background: linear-gradient(135deg, ${team.color}10 0%, transparent 50%)"></div>
            <div class="team-card-corner" style="background: linear-gradient(135deg, transparent 50%, ${team.color} 50%)"></div>
        </div>
    `).join('');
}

// =====================================================
// Render Cars
// =====================================================

function renderCars() {
    const coloredTeams = ['Ferrari', 'Cadillac', 'Red Bull Racing', 'Audi', 'Racing Bulls', 'Williams', 'Haas', 'Alpine', 'McLaren'];
    carsGrid.innerHTML = cars2026.map((car, index) => {
        const team = teams2026.find(t => t.name === car.team);
        const imagesHtml = car.images.map((img, imgIndex) => `<img src="${img}" alt="${car.team} ${car.model}" class="car-image" style="display: ${imgIndex === 0 ? 'block' : 'none'};" data-index="${imgIndex}">`).join('');
        const buttonsHtml = car.images.length > 1 ? `
            <button class="image-btn image-prev" data-team="${car.team}">&lt;</button>
            <button class="image-btn image-next" data-team="${car.team}">&gt;</button>
        ` : '';
        return `
        <div class="card car-card animate-fade-up" style="animation-delay: ${index * 0.05}s">
            <div class="car-color-bar" style="background-color: ${car.color}"></div>
            <div class="car-image-container">
                ${imagesHtml}
                <div class="car-overlay"></div>
                <div class="car-speed-lines">
                    <div class="speed-line"></div>
                    <div class="speed-line"></div>
                    <div class="speed-line"></div>
                </div>
                ${buttonsHtml}
            </div>
            <div class="car-info">
                <div>
                    <h3 class="car-team-name">${car.team}</h3>
                    <p class="car-model" style="color: ${car.color}">${car.model}</p>
                </div>
                <img src="${team.logo}" alt="${car.team}" class="car-logo ${(car.team === 'Mercedes' || car.team === 'Aston Martin') ? 'white-logo' : ''}" onerror="this.style.display='none'">
            </div>
        </div>
    `;}).join('');

    // Add image switching functionality
    document.querySelectorAll('.image-prev').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.closest('.car-image-container');
            const images = container.querySelectorAll('.car-image');
            let current = Array.from(images).findIndex(img => img.style.display === 'block');
            images[current].style.display = 'none';
            current = (current - 1 + images.length) % images.length;
            images[current].style.display = 'block';
        });
    });

    document.querySelectorAll('.image-next').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.closest('.car-image-container');
            const images = container.querySelectorAll('.car-image');
            let current = Array.from(images).findIndex(img => img.style.display === 'block');
            images[current].style.display = 'none';
            current = (current + 1) % images.length;
            images[current].style.display = 'block';
        });
    });
}

// =====================================================
// Render Calendar
// =====================================================

function renderCalendar() {
    calendarTimeline.innerHTML = `
        <div class="timeline-line"></div>
        ${races2026.map((race, index) => `
            <div class="calendar-item animate-fade-up" style="animation-delay: ${index * 0.03}s">
                <div class="timeline-dot"></div>
                <div class="calendar-spacer"></div>
                <div class="card calendar-card">
                    <div class="calendar-card-content">
                        <span class="calendar-flag"><img src="https://flagcdn.com/w20/${race.countryCode}.png" alt="${race.country}" style="width: 20px; height: 15px;"></span>
                        <div class="calendar-race-info">
                            <span class="calendar-round">Round ${race.id}</span>
                            <h3 class="calendar-race-name">${race.name}</h3>
                            <div class="calendar-circuit">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>${race.circuit}</span>
                            </div>
                            <div class="calendar-date-time">
                                <div class="calendar-date">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                    <span>${race.date}</span>
                                </div>
                                <div class="calendar-time">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    <span>${race.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

// =====================================================
// Smooth Scroll for Anchor Links
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================================
// Intersection Observer for Animations
// =====================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all animated elements after they're rendered
function observeAnimations() {
    document.querySelectorAll('.animate-fade-up').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// =====================================================
// Initialize
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    renderRaces();
    renderDrivers();
    renderTeams();
    renderCars();
    renderCalendar();
    
    // Start observing after a short delay to ensure elements are rendered
    setTimeout(observeAnimations, 100);
});
