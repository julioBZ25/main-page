import * as prismic from "@prismicio/client";

const repositoryName = import.meta.env.REPOSITORY_NAME;
const accessToken = import.meta.env.ACCESS_TOKEN;

const client = prismic.createClient(repositoryName, {
  accessToken,
});

export function getHomeProjects() {
  return client.getAllByType("proyectos", {
    filters: [prismic.filter.at("my.proyectos.show_in_home_", true)],
  });
}
