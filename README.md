# 🎬 Netflix-Inspired Movie Discovery App

A Netflix-inspired **movie discovery and recommendation application**
built with React, Redux Toolkit, Firebase, and the TMDB API.

The app allows users to explore movies and TV shows, search for content,
view detailed information, watch trailers, discover trending titles, and
get AI-powered movie recommendations using Gemini.

## ✨ Features

-   🔐 Firebase Authentication
-   🎬 Movie and TV show discovery
-   🔥 Trending movies and TV shows
-   🔎 Search movies and TV shows
-   🤖 AI-powered movie recommendations with Gemini
-   ⭐ Movie ratings and genres
-   🎥 Trailers and videos
-   👥 Cast and crew information
-   🎯 Similar movies and recommendations
-   🌐 Multi-language UI support
-   📱 Responsive design for mobile, tablet, and desktop
-   🔄 Infinite scrolling
-   💀 Shimmer loading states
-   🎨 Netflix-inspired user interface
-   🧭 React Router navigation
-   🗃️ Redux Toolkit state management

## 🛠️ Tech Stack

### Frontend

-   React.js
-   JavaScript
-   React Router
-   Redux Toolkit
-   Tailwind CSS
-   Lucide React
-   Day.js

### APIs & Services

-   TMDB API --- movie and TV show data
-   Gemini API --- AI movie recommendations
-   Firebase Authentication --- user authentication

## 🤖 AI Movie Recommendations

The GPT Search feature uses Gemini to understand natural-language movie
requests and generate recommendations.

For example:

> "Recommend some good Kannada crime thriller movies"

Gemini generates movie titles, and those titles are searched through
TMDB to retrieve the corresponding movie information.

### Recommendation Flow

``` text
User Query
    ↓
Gemini AI
    ↓
Movie Titles
    ↓
TMDB Search API
    ↓
Movie Results
    ↓
Redux Store
    ↓
Movie Carousel
```

## 🏗️ Application Architecture

``` text
React Components
       ↓
React Router
       ↓
Redux Toolkit
       ↓
Custom Hooks / API Utilities
       ↓
TMDB API + Gemini API + Firebase
```

## 📱 Responsive Design

The application is designed to work across:

-   📱 Mobile
-   📲 Tablet
-   💻 Desktop

Movie carousels support horizontal scrolling, while layouts adapt to
different screen sizes using responsive Tailwind CSS utilities.

## 🔐 Authentication

Firebase Authentication is used for:

-   User registration
-   User login
-   Authentication state management
-   User profile information

Authenticated user information is stored in Redux for use across the
application.

## 📂 Main Project Structure

``` text
src/
├── Assets/
├── Components/
│   ├── Header/
│   ├── GPT/
│   ├── Details/
│   ├── MovieCard/
│   └── ...
├── Hooks/
├── Pages/
├── Redux/
├── Utils/
├── App.js
└── index.js
```

## 🚀 Getting Started

### 1. Clone the repository

``` bash
git clone <your-repository-url>
```

### 2. Navigate to the project

``` bash
cd <project-folder>
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Configure API credentials

Add your API credentials to the appropriate configuration/environment
files.

Required services:

-   TMDB API
-   Gemini API
-   Firebase

### 5. Start the development server

``` bash
npm start
```

The application will run locally on your development server.





⭐ If you find this project useful, consider giving the repository a
star!
