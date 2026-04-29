# 🌍 WebGIS Bandar Lampung

Aplikasi WebGIS berbasis **React + Leaflet** yang terintegrasi dengan **FastAPI** untuk menampilkan data spasial dalam format GeoJSON.

---

## 📌 Deskripsi
Aplikasi ini dikembangkan sebagai bagian dari tugas praktikum Sistem Informasi Geografis.  
Tujuan dari aplikasi ini adalah untuk menampilkan data fasilitas di wilayah Bandar Lampung secara interaktif melalui peta digital.

Data yang ditampilkan mencakup berbagai jenis fasilitas seperti:
- Sekolah
- Fasilitas kesehatan
- Tempat publik
- Masjid
- Perguruan tinggi
- Pusat perbelanjaan
- Kantor polisi
- dan lainnya

---

## ⚙️ Teknologi yang Digunakan
- React (Vite)
- Leaflet (React Leaflet)
- FastAPI (Backend API)
- Axios (HTTP request)
- GeoJSON (format data spasial)

---

## 🗺️ Fitur Utama
- Menampilkan peta wilayah Bandar Lampung
- Mengambil data GeoJSON dari API FastAPI
- Menampilkan marker lokasi pada peta
- Styling marker berbeda berdasarkan kategori
- Popup interaktif berisi:
  - Nama lokasi
  - Jenis fasilitas
  - Koordinat (Latitude & Longitude)
- Interaksi peta:
  - Hover highlight marker
  - Klik marker untuk zoom ke lokasi
- Menggunakan basemap satelit (lebih realistis)


---
