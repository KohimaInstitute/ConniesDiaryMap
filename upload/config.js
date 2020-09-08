var config = {
    style: 'mapbox://styles/negithokchom/ckesj99yq85th19p96wxr7l48',
    accessToken: 'pk.eyJ1IjoibmVnaXRob2tjaG9tIiwiYSI6ImNrZXNqZmVjaTA1eXMyeHJ1NGR1YWkxYWIifQ.CNAPlGNf9QpxvJqZ3qEwZA',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'CONNIE’S DIARY',
    subtitle: '',
    byline: 'By THE KOHIMA INSTITUTE',
    footer: 'NegiThokchom at THE KOHIMA INSTITUTE',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'DC BUNGALOW',
            description: ' In the years 1900-1902 Connie Shakespear made two extended visits to Kohima to stay with her husband who was the Captain in command of the Naga Hills Military Police battalion. At that time Kohima was a small British hill station, the Headquarters of the Naga Hills district, of which the chief administrator was the DC or Deputy Commissioner. She lived in a small bungalow and whilst there kept a diary and took photographs, recording their life in Kohima and her tours in the Naga hills when she accompanied her husband to police outposts. Location: Kohima',
            image: 'https://i.ibb.co/N1VWNFr/DC-Bungalow.jpg',
            location: {
                center: [  94.11979, 25.66684 ],
                zoom: 7.44,
                pitch: 20.00,
                bearing: 1.60
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {   
            id: 'VILLAGE',
            title: 'KOHIMA VILLAGE 1900',
            image: 'https://i.ibb.co/fN9FxCw/Kohima-village-1900.jpg',
            description: '',
            location: {
                center: [ 94.11979, 25.66684],
                zoom: 9.44,
                pitch: 60.00,
                bearing: 32.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'Festival',
            title: 'FESTIVAL IN KOHIMA , DECEMBER 1900',
            image: 'https://i.ibb.co/Nn15MCs/Festival-in-Kohima-December-1900.jpg',
            description: '',
            location: {
                center: [ 94.11979, 25.66684],
                zoom: 9.44,
                pitch: 60.00,
                bearing: 66.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'First entry',
            title: 'DISPLAY OF DANCING AT HENEMA (TENING)',
            image: 'https://i.ibb.co/Rp4gsKy/Display-of-dancing-Henema.jpg',
            description: 'Her first tour recorded in the diary took her to Henema (Tening), a journey of three to four days on foot or horseback, during which time they travelled with an escort and stayed in dak bungalows, passing through Khonoma and Berrima (Peren) on the way. Whilst there, Henema and other villages gave them a display of dancing.Location:Henema (Tening)',
            location: {
                center: [93.61896, 25.36084],
                zoom: 10.00,
                pitch: 30.0,
                bearing: -20.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'CLUB',
            title: 'KHONOMA CLUB',
            image: 'https://i.ibb.co/JqMd8cM/Khonoma-club-Hiekhakike.jpg',
            description: 'Connie visited Khonoma more than once, staying in the dak bungalow close to the village, being treated on one occasion to being carried up to what she called the ‘Chukka Forts’, high on the mountain above the village. It was from here the villagers defied the British in 1879. The sitting circle she photographed she describes as the ‘Khonoma Club’, which is there today but known as the Hiekhakike. In her diary she writes about the history of the village and describes the villagers as being a ‘very independent lot’. Location: Khonoma',
            location: {
                center: [94.02155, 25.65779],
                zoom: 10.00,
                pitch: 60.50,
                bearing: 11.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'HOUSE',
            title: 'KEKRIMA (KIKRUMA)',
            image: 'https://i.ibb.co/3fZCgFp/Morungs-Kekrima-Kikruma.jpg',
            description: 'Another village she visited more than once was Kekrima (Kikruma) whose history she also recounts. Both tours which passed through this village were made at Christmas time. These were not duty tours and the village was not on a British bridle way with its dak bungalows. They would pitch their tents and camp in the village. On tour they would photograph houses, morungs, grave sites, items of interest to them as well as people. Photographs were captioned, like the one here of a house and graves: Kekrima Warriors’ graves shield, representation of heads taken by the departed’. Location: Kekrima (Kikruma)',
            location: {
                center: [94.338269,25.616820],
                zoom: 10.00,
                pitch: 60.50,
                bearing: 11.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'Morungs',
            title: 'KEKRIMA (KEKRUMA)',
            image: 'https://i.ibb.co/X5pWy7Y/Morung-Kekrima-Kikruma.jpg',
            description: 'Morung at Kekrima (kekruma)',
            location: {
                center: [94.338269,25.616820],
                zoom: 10.00,
                pitch: 60.50,
                bearing: 62.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'tamlu',
            title: 'TAMLU',
            image: 'https://i.ibb.co/m5L9Sv8/Tamlu.jpg',
            description: 'On two occasions she went as far north as Tamlu where she established relations with important individuals in the village whose names are recorded in her diary and the captions to some photographs. Two of these were Io and his wife Impi. She described him as a one-time ‘chief minister’ from Bor Tablung, a village across the River Dikku in the area outside British administration. She wrote that he ‘eloped with one of the Rajah’s ladies’ and ‘now the court couple’ has to live this side of the border ‘if he wishes to keep his head on’. Connie and her husband spent time with them negotiating to buy a ‘petticoat’, a hard bargain, Io assuring them that ‘in this romantic elopement they had left “all” behind’. Location: Tamlu',
            location: {
                center: [94.73749, 26.66219],
                zoom: 10.00,
                pitch: 60.00,
                bearing: 10.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'tAMLU',
            title: 'TAMLU',
            image: 'https://i.ibb.co/X8VPgSj/Couple-Tamlu.jpg',
            description: 'A Couple at Tamlu',
            location: {
                center: [94.73749, 26.66219],
                zoom: 10.00,
                pitch: 60.00,
                bearing: 30.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'NANKAM',
            title: 'MORUNGS AT NANKAM (LONGKHUM)',
            image: 'https://i.ibb.co/hWNJZND/Morungs-at-Nankam-Longkhum.jpg',
            description: 'The village of Nankam (Longkhum) with a photograph of morungs in the village. Location: Nankam (Longkhum)',
            location: {
                center: [94.412110, 26.260942],
                zoom: 10.00,
                pitch: 60.00,
                bearing: 30.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'Ornaments',
            title: 'NANKAM (LONGKHUM)',
            image: 'https://i.ibb.co/F3gCXq5/Morungs-Nankam-Longkhum.jpg',
            description: 'Morungs at Nankam (Longkhum)',
            location: {
                center: [94.412110, 26.260942],
                zoom: 10.00,
                pitch: 60.00,
                bearing: 90.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'The copies',
            title: 'THE RUINS OF CACHARI FORT',
            image: 'https://i.ibb.co/GWv6B4D/Ruins-of-Cachari-fort.jpg',
            description: 'On her journeys in and out of the Naga hills she traveled through Dimapur. There they took the opportunity to look at the ruins and statues within the former ‘Cachari fort’. Location: Dimapur',
            location: {
                center: [93.71464, 25.89228],
                zoom: 13.00,
                pitch: 2.50,
                bearing: -36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'The STATUE',
            title: 'THE STATUE',
            image: 'https://i.ibb.co/CBnywCH/Statue-at-Cachari-fort.jpg',
            description: 'The statue within the former ‘Cachari fort’.',
            location: {
                center: [ 93.72301, 25.91435],
                zoom: 10.00,
                pitch: 2.50,
                bearing: 8.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'The Copy',
            title: 'RETURN JOURNEY',
            image: 'https://i.ibb.co/m0vZ0Qt/Brahmaputra-Gauhati-Guwahati.jpg',
            description: 'Connie traveled to and from the Naga Hills by steamer up the River Brahmaputra. On her final return journey she was able to travel from Dimapur to Gauhati (Guwahati) on the new railway. The river steamer took her down to Goalundo from where she took a train to Calcutta (Kolkata). Location: Gauhati (Guwahati)',
            location: {
                center: [ 91.69107, 26.25652],
                zoom: 6.44,
                pitch: 10.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
