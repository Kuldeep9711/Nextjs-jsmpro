import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: number;
}

export const getResources = async ({
  query,
  category,
  page,
}: GetResourcesParams) => {
  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page,
      })}{
        _id,
        title,
        downloadlink,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`
    );

    console.log("SANITY RESOURCES 👉", resources);

    return resources ?? [];
  } catch (error) {
    console.error("SANITY ERROR 👉", error);
    return [];
  }
};
