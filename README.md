# 💭 Feels

A beautiful typing effect web application that displays Bengali text with an elegant animated cursor. Perfect for showcasing poetry, thoughts, or any meaningful text with a cinematic typing animation.

## ✨ Features

- **Typing Animation**: Smooth character-by-character typing effect
- **Blinking Cursor**: Realistic cursor animation that follows the text
- **Bengali Font Support**: Custom font with full Bengali character support
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Background Image**: Customizable background with overlay effect
- **Sentence-by-Sentence Display**: Text breaks naturally at Bengali danda (।), exclamation (!), and question marks (?)

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/momobsidian/feels.git
cd feels
```

2. Install dependencies:
```bash
npm install
```

3. Add your background image:
   - Place your image file in the project root
   - Name it `image.jpg` (or update the path in `index.html`)

4. Start the server:
```bash
npm start
```

5. Open your browser and visit:
```
http://localhost:5000
```

## 🛠️ Development

For development with auto-reload:
```bash
npm run dev
```

## 📝 Customization

### Change the Text

Edit the text content in `index.html` inside the `<p>` tag within the `.content` div.

### Adjust Typing Speed

In `index.html`, modify the timing parameters:
```javascript
typeSentencesWithCursor('.content p', 28, 220);
// First number (28): milliseconds per character
// Second number (220): milliseconds between sentences
```

### Change Background

Replace `image.jpg` with your own image, or update the CSS in `index.html`:
```css
background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('your-image.jpg');
```

### Customize Font

Replace `font.ttf` with your preferred font file and update the font-family in the CSS.

## 📁 Project Structure

```
feels/
├── server.js          # Express server
├── index.html         # Main HTML with embedded CSS and JS
├── font.ttf          # Custom Bengali font
├── image.jpg         # Background image
├── package.json      # Node.js dependencies
└── README.md         # This file
```

## 🎨 Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Font**: Custom TTF font with Bengali support
- **Compression**: gzip compression for faster loading

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 💖 Author

Created with love by [momobsidian](https://github.com/momobsidian)

---

**Note**: Make sure to add your `image.jpg` file to the project root before running the server.
