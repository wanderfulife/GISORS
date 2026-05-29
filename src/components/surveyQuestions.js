// 🅿️ ÉTUDE DE CIRCULATION ET DE STATIONNEMENT - GISORS
// Questionnaire interview usagers du stationnement

export const templateSurveyQuestions = [
    // 🅿️ Q1 - Zone de stationnement de l'interviewé
    {
        id: "Q1",
        text: "Dans quelle zone s'est stationné l'interviewé ?",
        type: 'singleChoice',
        image: "plan.png",
        imageAlt: "Plan des zones de stationnement de Gisors",
        options: [
            { id: 1, text: "1A. Zone bleue (\"Rue de Vienne\")", next: "Q2" },
            { id: 2, text: "1B. Zone bleue (\"Rue de Paris\")", next: "Q2" },
            { id: 3, text: "2. Parkings Poste / Mairie", next: "Q2" },
            { id: 4, text: "3. Parking de la Salle des fêtes", next: "Q2" },
            { id: 5, text: "4. Parvis de l'église", next: "Q2" },
            { id: 6, text: "6. Parking du château", next: "Q2" }
        ]
    },

    // 🏙️ Q2 - Commune de résidence
    {
        id: "Q2",
        text: "Dans quelle commune habitez-vous ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Gisors", next: "Q2_Rue" },
            { id: 2, text: "Autre commune", next: "Q2_Autre" }
        ]
    },

    // 🛣️ Q2 - Rue (si Gisors)
    {
        id: "Q2_Rue",
        text: "Dans quelle rue de Gisors habitez-vous ?",
        type: 'street',
        next: "Q3"
    },

    // 🗺️ Q2 - Autre commune (sélecteur)
    {
        id: "Q2_Autre",
        text: "Préciser la commune :",
        type: 'commune',
        next: "Q3"
    },

    // 🎯 Q3 - Raison principale de la présence dans le secteur
    {
        id: "Q3",
        text: "Quelle est la raison principale de votre présence dans le secteur aujourd'hui ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "J'habite ici", next: "Q4" },
            { id: 2, text: "Travail / emploi", next: "Q4" },
            { id: 3, text: "Achats / courses / commerces", next: "Q4" },
            { id: 4, text: "Rendez-vous (médical, administratif...)", next: "Q4" },
            { id: 5, text: "Loisirs / promenade / restaurant / Visite à un proche", next: "Q4" },
            { id: 6, text: "Accompagnement (école, proche...)", next: "Q4" },
            { id: 7, text: "Autre", next: "Q3_Autre" }
        ]
    },

    // 📝 Q3 - Autre raison
    {
        id: "Q3_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser la raison...",
        next: "Q4"
    },

    // 🔁 Q4 - Fréquence de stationnement dans ce secteur
    {
        id: "Q4",
        text: "À quelle fréquence venez-vous vous stationner dans ce secteur ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours ou presque", next: "Q5" },
            { id: 2, text: "Plusieurs fois par semaine", next: "Q5" },
            { id: 3, text: "Environ 1 fois par semaine", next: "Q5" },
            { id: 4, text: "Quelques fois par mois", next: "Q5" },
            { id: 5, text: "Plus rarement", next: "Q5" }
        ]
    },

    // ⏱️ Q5 - Durée prévue du stationnement
    {
        id: "Q5",
        text: "Combien de temps pensez-vous rester stationné aujourd'hui ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 30 min", next: "Q6" },
            { id: 2, text: "30 min à 1h30", next: "Q6" },
            { id: 3, text: "1h30 à 4h", next: "Q6" },
            { id: 4, text: "Plus de 4h", next: "Q6" },
            { id: 5, text: "Plus d'une journée", next: "Q6" }
        ]
    },

    // 🅿️ Q6 - Raison du choix de stationnement ici
    {
        id: "Q6",
        text: "Pourquoi avez-vous choisi de stationner ici ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je n'ai pas de stationnement privé", next: "Q7" },
            { id: 2, text: "Habitude / praticité", next: "Q7" },
            { id: 3, text: "Proximité de ma destination finale", next: "Q7" },
            { id: 4, text: "Autre", next: "Q6_Autre" }
        ]
    },

    // 📝 Q6 - Autre raison de choix
    {
        id: "Q6_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser la raison...",
        next: "Q7"
    },

    // 🔎 Q7 - Facilité à trouver une place
    {
        id: "Q7",
        text: "Trouvez-vous généralement une place facilement ici ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui, facilement", next: "Q8" },
            { id: 2, text: "Oui, mais parfois après recherche", next: "Q8" },
            { id: 3, text: "Non, c'est souvent difficile", next: "Q8" }
        ]
    },

    // 🚗 Q8 - Raisons du choix de la voiture (choix multiples)
    {
        id: "Q8",
        text: "Pourquoi êtes-vous venu(e) en voiture aujourd'hui plutôt qu'un autre moyen de transport ?",
        type: 'multipleChoice',
        options: [
            { id: 1, text: "Peu ou pas d'alternative pratique" },
            { id: 2, text: "Le plus rapide / gain de temps" },
            { id: 3, text: "Habitude / confort" },
            { id: 4, text: "Déplacements multiples prévus" },
            { id: 5, text: "Transport de matériel ou de personnes" }
        ],
        next: "end"
    }
];
