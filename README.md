# Pendalaman CSS
Menerapkan Style pada Halaman Web Profil Kota Bandung. Proyek latihan saya selama mempelajari Pendalaman CSS di Dicoding. 

## CSS
CSS (Cascading Style Sheets) adalah bahasa gaya yang digunakan untuk mengatur tampilan elemen-elemen HTML pada halaman web.

## Selector Dasar
CSS (Cascading Style Sheets) menggunakan selector untuk menentukan elemen HTML yang akan diberi gaya. Selector dasar melibatkan pemilihan elemen berdasarkan tag, class, atau ID. Contoh:
```bash
/* Selector berdasarkan tag */
p {
  color: blue;
}

/* Selector berdasarkan class */
.my-class {
  font-size: 16px;
}

/* Selector berdasarkan ID */
#my-id {
  background-color: #f0f0f0;
}
```

## Combinators
Combinators digunakan untuk memilih elemen berdasarkan hubungan hierarki mereka. Beberapa contoh combinator:
```bash
/* Descendant combinator */
div p {
  color: green;
}

/* Child combinator */
ul > li {
  list-style-type: square;
}

/* Adjacent sibling combinator */
h2 + p {
  font-weight: bold;
}

```

## Font Styling
Mengubah gaya font pada teks dapat dilakukan menggunakan properti font di CSS. Contoh:
```bash
body {
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-style: italic;
}
```

## Text Styling
Properti-teks dapat digunakan untuk mengatur penataan, dekorasi, dan transformasi teks. Contoh:
```bash
p {
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
}
```

## Coloring
Memberikan warna pada elemen dapat dilakukan menggunakan properti color dan background-color. Contoh:
```bash
h1 {
  color: #3498db;
}

div {
  background-color: rgba(255, 0, 0, 0.3);
}
```

## Box Model
CSS menggunakan model kotak untuk mengatur tata letak dan dimensi elemen. Box model terdiri dari margin, border, padding, dan content. Contoh:
```bash
div {
  margin: 10px;
  padding: 15px;
  border: 1px solid #ccc;
}
```

## Positioning
Properti positioning digunakan untuk mengontrol posisi elemen dalam halaman web. Beberapa nilai yang umum digunakan: static, relative, absolute, dan fixed. Contoh:
```bash
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
}
```

## Screenshots
**Sudah** menggunakan CSS.
![ProfilBandungCSS](https://github.com/dapraws/WebProgrammingBasics-Repository/assets/122019775/e1b9a71b-8567-44a5-a5d0-ed091de44113)
![ProfilBandungCSS-mobile](https://github.com/dapraws/WebProgrammingBasics-Repository/assets/122019775/9d6cc338-8a33-4940-a9d0-8ae461149fd4)


