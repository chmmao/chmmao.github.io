# chmmao.github.io

Chuanming Mao 的个人网站，使用 Astro 静态构建，发布至 https://chmmao.github.io/ 。

## 本地开发

使用 Node 22.23.4 或更新版本。项目也自带仅用于开发的 Node 22，以兼容旧的系统版本。

```sh
npm ci
ASTRO_TELEMETRY_DISABLED=1 npm run dev
```

## 发布

GitHub 仓库名称必须为 `chmmao.github.io`，并设为 Public。
在 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
每次推送到 `main` 都会自动构建部署；也可以在 Actions 手动运行部署流程。
工作流使用 GitHub 的 Pages artifact / deploy Actions，不需要个人访问令牌或自定义域名。

## 写博客

在 `src/content/blog/` 添加 `.md` 文件：

```md
---
title: 文章标题
description: 一句话简介
date: 2026-10-25
draft: false
---

这里是正文。
```

草稿使用 `draft: true`，不会生成公开页面，也不会出现在列表或站点地图中。文件名用作文章 URL。

## 修改网站

- 首页：`src/pages/index.astro`
- 项目：`src/pages/projects.astro`（只列出已确认的公开仓库）
- 工具：`src/pages/tools/`
- 关于：`src/pages/about.astro`
- 导航、页脚、SEO：`src/layouts/Base.astro`
- 配色、布局、移动端样式：`src/styles/global.css`
- 未来更换域名：修改 `astro.config.mjs` 的 `site`、`public/robots.txt`，并在 GitHub Pages 设置中绑定域名。

## 构建

```sh
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run preview
```

输出目录为 `dist/`。不依赖服务器、付费服务、外部字体或分析服务。文字计数工具仅在浏览器内处理输入。
