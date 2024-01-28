# Pengantar CSS
CSS (Cascading Style Sheets) adalah bahasa gaya yang digunakan untuk mengatur tata letak dan penampilan elemen-elemen HTML pada halaman web. CSS memberikan kemampuan untuk memperindah dan memodifikasi tampilan halaman web, memisahkan struktur konten dari gaya presentasi.

## Aturan Styling
Pada penggunaan CSS, ada dua bagian dalam sebuah rule. Pertama adalah identitas elemen atau elemen yang akan menerapkan rule (singkatnya kita akan sebut selector). Kedua adalah deklarasi atau instruksi yang akan diterapkan pada sebuah selector.

![image](https://github.com/dapraws/WebProgrammingBasics-Repository/assets/122019775/8d510f37-6c3a-4460-bd0b-38948cd36c6f)

## Cara Melampirkan Styling pada Dokumen HTML
1. External Style Sheet
   
External Style Sheet adalah berkas terpisah yang di dalamnya hanya ada CSS rules. Berkas ini harus berekstensi .css, dan akan dihubungkan dengan dokumen HTML. Cara ini merupakan yang paling powerful dalam menerapkan styling. Dengan cara ini, satu berkas styling (.css) dapat digunakan oleh banyak berkas HTML.
```bash
<head>
  <meta charset="UTF-8" />
  <title>Judul Dokumen</title>
 
  <!-- Impor berkas CSS Anda -->
  <link rel="stylesheet" href="style.css">
</head>
```
2. Embedded Style Sheet
   
Embedded Style Sheet adalah kumpulan rules yang dituliskan dalam berkas HTML dengan menggunakan elemen <style>. Penulisan rules harus dituliskan dalam elemen <style> dan biasanya ditempatkan dalam <head> pada berkas HTML.
```bash
<head>
  <meta charset="UTF-8" />
  <title>Judul Dokumen</title>
 
  <style>
    h1 {
      color: green;
    }
  </style>
</head>
```
3. Inline Style
   
Inline Style adalah styling yang diterapkan pada elemen HTML dengan menggunakan atribut style. Contohnya seperti berikut.
```bash
<nama-elemen style="color: green">Konten dari Elemen HTML</nama-elemen>
```
