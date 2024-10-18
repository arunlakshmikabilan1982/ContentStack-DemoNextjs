import { Image } from "../typescript/action";

type ItmaBlog = {
  blog_image: Image;
  blog_tag: string;
  blog_title: string;
  blog_description: string;
  blog_author_image: Image;
  blog_author_name: string;
  blog_published_date: string;
};

type ItmaBlogNewsProps = {
  blogs_news_sub_title: string;
  blogs_news_main_title: string;
  blogs: [ItmaBlog];
};

export default function ItmaBlogNews({
  section,
}: {
  section: ItmaBlogNewsProps;
}) {
  return (
    <div id="itma-blog-news" style={{ color: "black" }}>
      {section?.blogs_news_main_title}
      <p>{section?.blogs_news_main_title}</p>
      <p>{section?.blogs_news_sub_title}</p>
      <ul>
        {section.blogs.map((blog) => {
          return (
            <li className="filter" key={blog.blog_title}>
              <p>{blog.blog_title}</p>
              <p>{blog.blog_tag}</p>
              <p>{blog.blog_description}</p>
              <p>{blog.blog_published_date}</p>
              <p>{blog.blog_author_name}</p>
              <img src={blog.blog_author_image?.url} alt="872381-ALT" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
