import { config, collection, fields } from "@keystatic/core";

export default config({
  storage:
  process.env.NODE_ENV === "development"
    ? { kind: "local" }
    : { kind: "github", repo: { owner: "partikond212", name: "elena-kuneevskaya-cakes" } },

    locale: "ru-RU",
  collections: {
    cakes: collection({
      label: "Торты",
      slugField: "title",
      path: "content/cakes/*",
        columns: ["title", "price"],  
      format: { data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Название" } }),
        price: fields.integer({
          label: "Цена, ₽",
          validation: { isRequired: true, min: 0 },
        }),
        unitValue: fields.number({
          label: "Вес, кг",
          validation: { isRequired: true, min: 0 },
        }),
        image: fields.image({
          label: "Фото",
          directory: "public/cakes",
          publicPath: "/cakes/",
          validation: { isRequired: true },
        }),
        categories: fields.multiselect({
          label: "Категории",
          options: [
            { label: "На день рождения", value: "birthday" },
            { label: "Детские", value: "junior" },
            { label: "Праздничные", value: "festive" },
            { label: "Бенто", value: "bento" },
            { label: "Десерты", value: "desserts" },
          ],
        }),
      },
    }),

    fillings: collection({
      label: "Начинки",
      slugField: "name",
        columns: ["name",],  
      path: "content/fillings/*",
      format: { data: "yaml" },
      schema: {
        name: fields.slug({ name: { label: "Название" } }),
        desc: fields.text({ label: "Описание", multiline: true }),
        image: fields.image({
          label: "Фото",
          directory: "public/fillings",
          publicPath: "/fillings/",
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
