import { TProducts, TUsers } from "../types/types"

export const users: TUsers[] = [
    {
        id: "u001",
        name: "Fulano",
        email: "fulano@email.com",
        password: "Fulano123",
        createAt: new Date().toISOString()
    },
    {
        id: "u002",
        name: "Beltrano",
        email: "Beltrano@email.com",
        password: "Beltrano123",
        createAt: new Date().toISOString()
    }
]

export const products: TProducts[] = [
    {
        id: "prod001",
        name: "Mouse Gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400"
    }
]
