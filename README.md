# React Router v7 Loading Animation Demo

This project demonstrates how to implement a full-screen loading animation when navigating between pages in a React Router v7 application.

## Overview

I wanted to insert an animation that gradually covers the screen when screen transitions are made in React Router v7.

This is a demo of how I achieved it.

## Live Demo

[View Demo](https://go-noji.github.io/react-router-7-loading-animation-demo-/)

## Features

- Full-screen loading animation during page transitions
- Preloading of destination page content before transition
- Works with React Router v7's `loader` and `clientLoader`

## Challenges & Solutions

### 1. Preventing Flash of Old Content
Since React Router immediately unmounts the previous component when navigating, we delay the actual navigation until the animation fully covers the screen.

### 2. Preloading Destination Content
The animation displays a preview of the next page's content, requiring us to prefetch this data before triggering the transition.

### 3. Synchronizing Animation Timing
The transition effect must wait for both the animation to complete and for the destination content to be fully loaded before revealing the next page.

## Installation & Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/Go-Noji/react-router-7-loading-animation-demo-.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
