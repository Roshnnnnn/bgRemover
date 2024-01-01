# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Background Remover

![Background Remover]('./src/assets/Screenshot 2024-01-02 010708.png)

A simple React.js application to remove backgrounds from images using the Remove.bg API.

## Features

- **Upload Image:** Easily upload images for background removal.
- **Remove Background:** Utilize the Remove.bg API to remove the background from uploaded images.
- **Download Image:** Download the processed image without a background.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/background-remover.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd background-remover
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Add Remove.bg API Key:**

   Create a `.env` file in the project root and add your Remove.bg API key:

   ```env
   REACT_APP_REMOVE_BG_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual Remove.bg API key.

## Usage

1. **Start the Development Server:**

   ```bash
   npm start
   ```

2. **Open Your Browser:**

   Visit [http://localhost:3000](http://localhost:3000) to use the application.

3. **Remove Background:**

   - Upload an image.
   - Click the "Remove Background" button.
   - Download the processed image.

## Contributing

If you want to contribute to this project, follow these steps:

1. **Fork the Repository.**
2. **Create a New Branch:**

   ```bash
   git checkout -b feature-name
   ```

3. **Make Your Changes and Commit Them:**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature-name
   ```

5. **Submit a Pull Request.**

## License

This project is licensed under the [MIT License](LICENSE).
