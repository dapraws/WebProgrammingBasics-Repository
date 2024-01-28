# Dicoding Landing Page
Membuat Dicoding Landing Page dengan Layout Responsif menggunakan Flexbox.

## Flexbox
Flexbox adalah model tata letak (layout) dalam CSS yang dirancang untuk menyusun elemen-elemen di dalam kontainer dan menangani distribusi ruang di antara mereka secara efisien. Dengan menggunakan Flexbox, kita dapat membuat tata letak yang responsif dan mudah diatur.

## Fungsi 
Flexbox memberikan kita kontrol yang lebih baik dalam menyusun elemen-elemen di dalam sebuah kontainer. Fungsi utamanya melibatkan:

**1. Penyusunan Elemen:** Memungkinkan penyusunan elemen secara horizontal atau vertikal, serta perubahan urutan tampilan elemen.

**2. Pengaturan Ruang:** Fleksibilitas dalam mengatur ruang di antara elemen-elemen dengan mudah menggunakan properti-properti seperti justify-content, align-items, dan align-self.

**3. Ekspansi dan Penyusutan:** Memungkinkan elemen untuk merespon ukuran kontainer dan ekspansi atau penyusutan proporsional terhadap ukuran mereka.

**4. Penanganan Ukuran Dinamis:** Mengatasi situasi di mana elemen-elemen memiliki ukuran yang bervariasi dan tetap mempertahankan keseimbangan dalam tata letak.

## Terminologi
Beberapa terminologi yang umum digunakan dalam Flexbox:

- Flex Container: Elemen yang menjadi wadah untuk elemen-elemen fleksibel. Didefinisikan dengan memberikan properti display: flex; atau display: inline-flex;.

- Flex Item: Elemen-elemen yang berada di dalam flex container dan menjadi objek untuk dikelola dengan Flexbox.

- Main Axis: Arah utama dari flex container, dapat berupa horizontal (default) atau vertikal, ditentukan oleh properti flex-direction.

- Cross Axis: Arah tegak lurus terhadap main axis di dalam flex container.

- Justify Content: Properti untuk mengatur penempatan elemen-elemen di sepanjang main axis.

- Align Items: Properti untuk mengatur penempatan elemen-elemen di sepanjang cross axis.

- Align Self: Properti untuk mengatur penempatan elemen fleksibel individu dalam hubungannya dengan cross axis.

Flexbox menyediakan alat yang kuat untuk menyusun dan mengelola tata letak, memungkinkan kita untuk menciptakan antarmuka yang lebih responsif dan dinamis.

## Flex Container
Dalam penerapan flexbox, ada properti-properti yang terlibat pada dua hal, yaitu flex container (parent element) dan flex item. Properti-properti pada flex container akan berpengaruh secara langsung kepada flex item dalam menampilkan susunannya. Berikut daftar dan penjelasannya.

- display: mendefinisikan elemen agar disusun sebagai flexible box.
- flex-direction: menentukan arah susunan flex item dijajarkan.
- flex-wrap: mengubah perilaku susunan flex item menjadi dua dimensi (jika dibutuhkan).
- justify-content: mengatur tata letak dari flex item pada main axis.
- align-items: mirip seperti justify-content, tetapi mengatur child element dalam satu baris pada cross axis.
- align-content: melakukan perataan terhadap flex item pada setiap baris dalam cross-axis.
- gap: memberikan jarak atau celah pada flex item.

## Flex Items
Properti yang ditujukan pada flex item hanya akan berpengaruh pada flex item yang ditarget, bukan elemen pembungkusnya (flex container).

- order: mengatur urutan susunan flex item.
- flex-grow: melakukan grow (pelebaran ukuran) dari flex item yang ditarget pada main axis.
- flex-shrink: menyusutkan atau menciutkan ukuran child element jika ukurannya tidak mencukupi ruang container.
- flex-basis: memberikan ukuran default sebelum sisa ruang container didistribusikan kepada flex item.
- align-self: mengatur posisi child element secara cross-axis.

## Contoh Tampilan 
![DicodingLandingPage](https://github.com/dapraws/WebProgrammingBasics-Repository/assets/122019775/f9f522a4-6b09-46d7-b134-dabebe10b893)
![DicodingLandingPage-mobile](https://github.com/dapraws/WebProgrammingBasics-Repository/assets/122019775/17f87f86-6a14-4467-a704-5224c6bded4d)
