#!/bin/bash

# プロジェクト名
PROJECT_NAME="tryas-energy-website"

# Next.js プロジェクトの作成
# プロジェクトディレクトリに移動
cd $PROJECT_NAME

# 必要なディレクトリの作成
mkdir -p public/images
mkdir -p src/components
mkdir -p src/styles

# 必要なファイルの作成
touch src/components/Header.js
touch src/components/Footer.js
touch src/components/Slider.js
touch src/pages/index.js
touch src/pages/news.js
touch src/pages/projects.js
touch src/pages/products.js
touch src/pages/contact.js
touch src/styles/globals.css
touch src/styles/Header.module.css
touch src/styles/Footer.module.css
touch src/styles/Home.module.css