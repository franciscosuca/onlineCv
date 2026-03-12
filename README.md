# 🚀 Portfolio Starter

A sleek, modern portfolio template based on [Vercel](https://portfolio-blog-starter.vercel.app), designed to showcase your career journey with style.

## ✨ Features

- **JSON Data Injection**: Update your entire portfolio by simply editing JSON files. No database setup required for static use!
- **Docker Ready**: Pre-configured for easy containerization and deployment.
- **Developer First**: Built with Next.js, TypeScript, and a focus on clean architecture.

---

## 🛠️ How to Customize

Updating your portfolio is as easy as editing a text file. Navigate to `app/data/` and modify these files:

- `workExperience.json` - Your professional history.
- `projects.json` - Your key projects.
- `volunteering.json` - Your community work.

*Changes reflect instantly in development!*

---

## 🏃 Getting Started

Clone the repository and jump right in:

```bash
# Install dependencies
npm install --legacy-peer-deps

# Spin up the dev server
npm run dev
```

---

## 🐳 Running with Docker

Prefer containers? We've got you covered.

### 1. Build the Image
```bash
docker build -t online-cv .
```

### 2. Run it Locally
```bash
docker run -p 80:80 \
  -e COSMOS_ENDPOINT=your_endpoint \
  -e COSMOS_KEY=your_key \
  online-cv
```

> [!TIP]
> You can also use a `.env` file: `docker run -p 80:80 --env-file .env online-cv`

### Multi-platform Build (AMD64 + ARM64)
```bash
docker buildx build --platform linux/amd64,linux/arm64 -t online-cv:latest .
```

---

## 📬 Contact

Found a bug? Report it by [opening an issue](https://github.com/franciscosuca/onlineCv/issues).