import type { PageServerLoad } from "./$types";
import fs from "fs";
import fm from "front-matter";
import path from "path";
import type { Piece } from "$lib/types";

const postsDir = path.join(process.cwd(), "src", "lib", "pieces");

export const load: PageServerLoad = async () => {
  const posts = fs
    .readdirSync(postsDir)
    .map((file) => {
      const post = fm<Piece>(
        fs.readFileSync(path.join(postsDir, file), "utf-8")
      );
      return {
        title: post.attributes.title,
        body: post.body,
        image: post.attributes.image,
        price: post.attributes.price,
        slug: post.attributes.slug,
      };
    }).sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());

  return {
    body: posts,
  };
};