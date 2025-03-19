import { createI18n } from "vue-i18n";

const messages = {
  en: {
    home: {
      title: "Welcome to RAZZ BAR",
      description: "Explore our exclusive catalog of products.",
    },
    catalog: {
      title: "Our Catalog",
      product: "Product",
    },
    contact: {
      title: "Contact Us",
      send: "Send Message",
    },
    navbar: {
      home: "Home",
      catalog: "Catalog",
      contact: "Contact",
    },
  },
  es: {
    home: {
      title: "Bienvenido a RAZZ BAR",
      description: "Explora nuestro catálogo de productos exclusivos.",
    },
    catalog: {
      title: "Nuestro Catálogo",
      product: "Producto",
    },
    contact: {
      title: "Contáctanos",
      send: "Enviar Mensaje",
    },
    navbar: {
      home: "Inicio",
      catalog: "Catálogo",
      contact: "Contacto",
    },
  },
  fr: {
    home: {
      title: "Bienvenue au RAZZ BAR",
      description: "Découvrez notre catalogue exclusif de produits.",
    },
    catalog: {
      title: "Notre Catalogue",
      product: "Produit",
    },
    contact: {
      title: "Contactez-nous",
      send: "Envoyer le message",
    },
    navbar: {
      home: "Accueil",
      catalog: "Catalogue",
      contact: "Contact",
    },
  },
  de: {
    home: {
      title: "Willkommen im RAZZ BAR",
      description: "Entdecken Sie unseren exklusiven Produktkatalog.",
    },
    catalog: {
      title: "Unser Katalog",
      product: "Produkt",
    },
    contact: {
      title: "Kontaktieren Sie uns",
      send: "Nachricht senden",
    },
    navbar: {
      home: "Startseite",
      catalog: "Katalog",
      contact: "Kontakt",
    },
  },
};

const i18n = createI18n({
  legacy: false, // Necesario para Vue 3
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;

