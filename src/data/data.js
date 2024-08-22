const quizzData = {
    questions: [
    {
        id: 0,
        question: "How much time in hours do you have to spend on pet care each day?",
        type: "counter",
        answers: {
            min: ["Reptile", "Fish"],
            max: ["Dog", "Cat", "Bird"]
        }
    },
    {
        id: 1,
        question: "What is your living situation?",
        type: "multiple",
        answers: [
            {
                id: 0,
                answer: "House",
                points: ["Dog", "Cat", "Bird", "Reptile", "Fish"]
            },
            {
                id: 1,
                answer: "Apartment",
                points: ["Cat", "Bird", "Reptile", "Fish"]
            },
            {
                id: 2,
                answer: "Shared house",
                points: ["Dog", "Cat", "Bird", "Reptile", "Fish"]
            },
            {
                id: 3,
                answer: "Other",
                points: ["Dog", "Cat", "Bird", "Reptile", "Fish"]
            }
        ]
    },
    {
        id: 2,
        question: "Do you have any allergies or sensitivities?",
        type: "multiple",
        answers: [
            {
                id: 0,
                answer: "Yes",
                points: ["Bird", "Reptile", "Fish"]
            },
            {
                id: 1,
                answer: "No",
                points: ["Dog", "Cat", "Bird", "Reptile", "Fish"]
            }
        ]
    },
    {
        id: 3,
        question: "What is your lifestyle like?",
        type: "multiple",
        answers: [
            {
                id: 0,
                answer: "Active",
                points: ["Dog", "Cat", "Bird"]
            },
            {
                id: 1,
                answer: "Sedentary",
                points: ["Reptile", "Fish"]
            },
            {
                id: 2,
                answer: "Busy",
                points: ["Cat", "Bird", "Reptile", "Fish"]
            },
            {
                id: 3,
                answer: "Relaxed",
                points: ["Dog", "Cat", "Bird", "Reptile", "Fish"]
            }
        ]
    },
    {
        id: 4,
        question: "Do you prefer pets that are affectionate or independent?",
        type: "slider",
        answers: {
            ends: ["Independent", "Affectionate"],
            points: {
                min: ["Reptile", "Fish"],
                max: ["Dog", "Cat", "Bird"]
            }
        }

    },
    {
        id: 5,
        question: "What is your experience with pets?",
        type: "multiple",
        answers: [
            {
                id: 0,
                answer: "None",
                points: ["Reptile", "Fish"]
            },
            {
                id: 1,
                answer: "Beginner",
                points: ["Reptile", "Fish", "Cat", "Bird"]
            },
            {
                id: 2,
                answer: "Experienced",
                points: ["Dog", "Cat", "Bird"]
            }
        ]
    },
    {
        id: 6,
        question: "What will be the name for your pet?",
        type: "text",
    }
],

    results: [
        {
            id: 0,
            name: "Dog",
            description: "Dogs are loyal, loving, and great companions. They require a lot of time and attention, but they are worth it."
        },
        {
            id: 1,
            name: "Cat",
            description: "Cats are independent, low-maintenance, and affectionate. They are great for people with busy lifestyles."
        },
        {
            id: 2,
            name: "Bird",
            description: "Birds are social, intelligent, and entertaining. They require a lot of attention and care, but they are fun to have around."
        },
        {
            id: 3,
            name: "Reptile",
            description: "Reptiles are low-maintenance, quiet, and fascinating. They are great for people with allergies or sensitivities."
        },
        {
            id: 4,
            name: "Fish",
            description: "Fish are low-maintenance, peaceful, and beautiful. They are great for people with limited space or time."
        }
    ]
}

export default quizzData;