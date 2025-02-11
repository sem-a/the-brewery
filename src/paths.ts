// константа для обозначения маршрутов по сайту
export const PATHS = {
  home: "/",
  recipe: "/recipe/:id",
  edit: "/recipe/edit/:id",
  api: 'https://api.spoonacular.com/recipes/'
} as const;