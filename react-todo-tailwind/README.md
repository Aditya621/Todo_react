# React Todo Application

A modern, type-safe Todo application built with React, TypeScript, and Tailwind CSS. This application allows users to create and manage todo groups and tasks with a clean, intuitive interface.

## Features

- Create and manage todo groups
- Add tasks within each group
- Mark tasks as complete/incomplete
- Delete groups and tasks
- Responsive design with Tailwind CSS
- Type-safe implementation with TypeScript

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Vite
- ESLint

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-todo-tailwind
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

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── Components/
│   ├── TodoGroup.tsx    # Main component for todo groups
│   └── TodoList.tsx     # Component for individual todo lists
├── App.tsx              # Root component
└── main.tsx             # Application entry point
```

## TypeScript Interfaces

The application uses the following TypeScript interfaces:

```typescript
interface TodoItem {
  id: number;
  value: string;
  checked: boolean;
}

interface TodoGroup {
  id: number;
  value: string;
  checked: boolean;
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
