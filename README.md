# Restaurant Menu Management System

A modern, responsive web application built with React and Tailwind CSS for managing restaurant menu items. This application allows you to add, view, and manage dishes with their details including price and dietary preferences.

## Features

- 📱 Responsive design that works on both desktop and mobile devices
- 💾 Local storage integration for data persistence
- 🍽️ Add dishes with detailed information:
  - Dish name
  - Price
  - Dietary preferences (Veg, Non-Veg, Vegan)
- 🔄 Real-time updates
- 🗑️ Reset functionality to clear all entries
- 🎨 Modern UI with Tailwind CSS

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Local Storage API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd restroSite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Usage

1. **Adding a Dish**
   - Enter the dish name
   - Set the price
   - Select dietary preferences (Veg, Non-Veg, Vegan)
   - Click "Add Dishes" button

2. **Viewing Dishes**
   - All added dishes are displayed in a responsive table
   - Each dish shows its name, price, and dietary preferences
   - Data persists even after page refresh

3. **Resetting**
   - Click "Reset Dishes" to clear all entries
   - This will remove all dishes from both the display and local storage

## Data Structure

Each dish entry contains:
```typescript
{
  id: number;
  name: string;
  price: number;
  isVeg: boolean;
  isNonVeg: boolean;
  isVegan: boolean;
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and UI inspiration from various sources
