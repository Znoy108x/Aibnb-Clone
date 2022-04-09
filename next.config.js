/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['links.papareact.com','upload.wikimedia.org'],
  },
  env:{
    mapbox_key:'pk.eyJ1IjoiYWJoYXliaXNodCIsImEiOiJjbDE4dDY1OGsxdG44M29tdDc2YzU1NGluIn0.M0gb1CgymB4uD9h1u31RQQ'
  }
}
module.exports = nextConfig