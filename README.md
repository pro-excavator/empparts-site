# EMP PARTS CO., LTD. — Company Website

Professional bilingual (English / Español) company introduction website for EMP PARTS.

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) → **New Repository**
2. Name it: `empparts-site` (or any name you prefer)
3. Set to **Public**
4. Click **Create Repository**

### Step 2: Upload Files
Upload the entire folder contents:
```
empparts-site/
├── index.html              ← Main website
├── images/                 ← All company photos
│   ├── isuzu-dealer.jpg
│   ├── pme-engine.jpg
│   ├── hydraulic-travel.jpg
│   ├── main-pump.jpg
│   ├── map.jpg
│   ├── shanghai-shop.jpg
│   ├── warehouse1.jpg
│   └── warehouse2.jpg
├── videos/                 ← Add your MP4 videos here
│   └── (place videos here)
├── EMP_PARTS_OnePageBilingual.pdf   ← Company one-pager
└── README.md
```

**Option A: GitHub Web Upload**
- Go to your repo → **Add file** → **Upload files**
- Drag all files and folders → Commit

**Option B: Git Command Line**
```bash
git init
git add .
git commit -m "Initial EMP PARTS website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/empparts-site.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repo **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root**
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/empparts-site`

---

## 📹 Adding Videos

### Option A: Local MP4 files
Place MP4 files in the `videos/` folder, then edit `index.html`.

Find the `video-placeholder` divs and replace with:
```html
<video controls style="width:100%;aspect-ratio:16/9;">
  <source src="videos/your-video.mp4" type="video/mp4">
</video>
```

### Option B: YouTube Embed
```html
<iframe width="100%" style="aspect-ratio:16/9;" 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
  frameborder="0" allowfullscreen></iframe>
```

### Option C: Bilibili Embed (for Chinese videos)
```html
<iframe width="100%" style="aspect-ratio:16/9;"
  src="//player.bilibili.com/player.html?bvid=YOUR_BV_ID"
  frameborder="0" allowfullscreen></iframe>
```

---

## ✏️ Customization

### Update Contact Info
In `index.html`, search for:
- `+86-[Your Number]` → Replace with your WhatsApp number
- `[Your Email]` → Replace with your personal email

### Add More PDF Catalogues
Find the downloads section and update the `href` attributes:
```html
<a href="your-catalogue.pdf" class="download-card" download>
```

### Update Form to Actually Send Emails
Consider using [Formspree](https://formspree.io) (free):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 🌐 Custom Domain (Optional)
If you have a domain like `empparts.com`, you can point it to GitHub Pages:
1. In repo Settings → Pages → Custom domain: enter your domain
2. Add a CNAME record at your DNS provider pointing to `YOUR_USERNAME.github.io`

---

*EMP PARTS CO., LTD. · www.empparts.com · sales@empparts.com*
