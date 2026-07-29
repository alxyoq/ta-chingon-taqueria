import type { MenuSection } from "@/types/content";

export const menuContent: {
  title: string;
  intro: string;
  notice: string;
  sections: MenuSection[];
} = {
  title: "The Menu",
  intro:
    "Street-food favorites, rich birria, loaded sandwiches, and the classics—made fresh from the Ta Chingón truck.",
  notice:
    "Prices reflect the current online menu and may change. Item availability and food-truck specials vary by day. Please tell our team about any allergies before ordering.",
  sections: [
    {
      title: "Chingón Favorites",
      description: "The first-time order that turns into your regular order.",
      items: [
        {
          name: "Pizza Birria",
          price: "$17",
          description:
            "Birria beef and melted mozzarella layered between tortillas, finished with onion and cilantro, with consommé on the side.",
          tags: ["Popular"],
        },
        {
          name: "Birria Empanadas",
          price: "$17",
          description:
            "Golden empanadas filled with slow-cooked birria and served with salsa.",
        },
        {
          name: "Ramen Birria",
          price: "$13",
          description:
            "Noodles in rich birria broth with tender beef, onion, cilantro, lime, and a chile kick.",
        },
        {
          name: "Papas Locas",
          price: "$14",
          description:
            "Crispy fries loaded with cheese, your choice of meat, pico de gallo, and sour cream.",
        },
        {
          name: "Nachos Rancheros",
          price: "$14",
          description:
            "Chips, cheese, refried beans, and pico de gallo with chorizo, azada, or al pastor.",
        },
        {
          name: "Taco Salad",
          price: "$13",
          description:
            "Greens, your choice of protein, pico de gallo, black beans, tortilla chips, cheese, and dressing.",
        },
        {
          name: "Chips & Guacamole",
          price: "$9",
          description: "Crisp tortilla chips with freshly made guacamole.",
        },
        {
          name: "Salsa Fresca & Chips",
          price: "$8",
          description: "Crisp tortilla chips with bright house pico de gallo.",
        },
      ],
    },
    {
      title: "Tacos",
      description:
        "Served on corn tortillas. Toppings vary by protein; salsa and lime served on the side.",
      items: [
        {
          name: "Birria",
          price: "$16",
          description:
            "Sinaloa-style braised beef, mozzarella, onion, and cilantro.",
          tags: ["Popular"],
        },
        {
          name: "Azada (Steak)",
          price: "$16",
          description:
            "Seasoned grilled steak with onion and cilantro. Guacamole available.",
        },
        {
          name: "Al Pastor",
          price: "$15",
          description:
            "Achiote-marinated pork with pineapple, onion, and cilantro.",
        },
        {
          name: "Chicken",
          price: "$15",
          description:
            "Seasoned chicken with mixed cheese, lettuce, and pico de gallo.",
        },
        {
          name: "Shrimp",
          price: "$15",
          description:
            "Sautéed shrimp with mixed cheese, lettuce, and pico de gallo.",
        },
      ],
    },
    {
      title: "Tortas & Cemitas",
      description:
        "Hearty Mexican sandwiches layered with fresh toppings and Oaxaca cheese.",
      items: [
        {
          name: "Azada Torta",
          price: "$17",
          description:
            "Steak, refried beans, onion, cilantro, Oaxaca cheese, and avocado.",
        },
        {
          name: "Milanesa Torta",
          price: "$16",
          description:
            "Breaded beef, mayonnaise, avocado, lettuce, tomato, and onion.",
        },
        {
          name: "Cemita",
          price: "$16",
          description:
            "A Puebla-style sesame roll with avocado, onion, cilantro, Oaxaca cheese, and pineapple.",
        },
        {
          name: "Chicken Torta",
          price: "$16",
          description:
            "Chicken, refried beans, Oaxaca cheese, lettuce, tomato, jalapeño, mayonnaise, and avocado.",
        },
        {
          name: "Al Pastor Torta",
          price: "$15",
          description:
            "Al pastor pork, avocado, onion, cilantro, pineapple, and Oaxaca cheese.",
        },
      ],
    },
    {
      title: "Burritos",
      description:
        "Flour tortilla with rice, refried beans, Oaxaca cheese, pico de gallo, and sour cream.",
      items: [
        { name: "Azada (Steak)", price: "$16" },
        { name: "Shrimp", price: "$16" },
        { name: "Al Pastor", price: "$15" },
        { name: "Chicken", price: "$15" },
      ],
    },
    {
      title: "Quesadillas",
      description: "Flour tortilla, mixed cheese, sautéed peppers, and onions.",
      items: [
        { name: "Azada (Steak)", price: "$15" },
        { name: "Shrimp", price: "$15" },
        { name: "Al Pastor", price: "$14" },
        { name: "Chicken", price: "$14" },
      ],
    },
    {
      title: "Street Extras & Sips",
      description: "Selection changes with the season, event, and daily prep.",
      items: [
        {
          name: "Elotes Preparados",
          price: "Ask about availability",
          description:
            "Mexican street corn dressed with creamy, tangy, cheesy, chile-lime flavor.",
        },
        {
          name: "Aguas Frescas",
          price: "Flavors vary",
          description:
            "Horchata, jamaica, strawberry lemonade, and rotating seasonal flavors.",
        },
        {
          name: "Jarritos",
          price: "$3.50",
          description: "Assorted Mexican fruit sodas.",
        },
        {
          name: "Mexican Glass-Bottle Coke",
          price: "$3.50",
          description: "Classic Coca-Cola made with cane sugar.",
        },
      ],
    },
  ],
};
