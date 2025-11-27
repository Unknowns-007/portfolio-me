# 🖥️ NeoVim Portfolio

> A developer portfolio designed to look and feel like a customized **NeoVim** environment.

![NeoVim Portfolio Preview](https://via.placeholder.com/800x450?text=NeoVim+Portfolio+Preview)

Built with **React**, **Tailwind CSS**, and **Framer Motion**, this project brings the developer experience to the web. It features the classic **Gruvbox Dark Hard** theme, Vim-style navigation, and a fully functional Command Palette.

## ✨ Features

- **🎨 Gruvbox Theme**: Authentic colors and syntax highlighting aesthetics.
- **⌨️ Vim Navigation**: Navigate the site using keyboard shortcuts (e.g., `g` + `h` for Home).
- **⌘ Command Palette**: Press `Ctrl + K` (or `Cmd + K`) to access a power-user menu.
- **⚡ Fast & Responsive**: Built on Vite for lightning-fast performance.
- **📱 Mobile Friendly**: Responsive design that adapts to mobile "terminals".
- **🧩 File System Metaphor**: Navigation mimics a file tree (`README.md`, `init.lua`, `projects.rs`).

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/neovim-portfolio.git
    cd neovim-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  Open your browser at `http://localhost:5173`.

## 🎮 Keyboard Shortcuts

| Key Sequence | Action |
| :--- | :--- |
| `Ctrl` + `K` | Open Command Palette |
| `g` then `h` | Go to **Home** |
| `g` then `a` | Go to **About** |
| `g` then `p` | Go to **Projects** |
| `g` then `e` | Go to **Experience** |
| `g` then `c` | Go to **Contact** |
| `j` / `k` | Scroll Down / Up |

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📝 Customization

### Changing the Theme
The theme is defined in `tailwind.config.js`. You can easily swap the Gruvbox colors for **Dracula**, **Nord**, or **Monokai** by updating the color palette.

### Adding Projects
Edit `src/Projects.jsx` to add your own projects to the list.

## 📄 License

MIT © [Your Name]
