import Image from "next/image";
import ArrowIcon from "../assets/images/arrow.png";
import CalenderIcon from "../assets/images/blog/calender.png";
import ProfileIcon from "../assets/images/blog/profileicon.png";
import BlogIcon from "../assets/svg/blog-icon.svg";
import { Image as img } from "../typescript/action";

type ItmaBlog = {
  blog_image: img;
  blog_tag: string;
  blog_title: string;
  blog_description: string;
  blog_author_image: img;
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
    <div id="itma-news-blogs" className="itma-news-blogs-parent">
      <div className="itma-bn-header">
        <Image src={BlogIcon} alt="icon" />
      <div className="stay-informed">
        <span className="stay-informed-text ">Stay Informed</span>
      </div>
      <div className="itma-blogs--new">
        <span className="itma-blogs--new-text ">ITMA Blogs & News</span>
      </div>
    </div>
     <div className="itma-bn-card-parent">
      <div className="itma-bn-card-container">
        <div className="property-1frame-771644" id="id-771644">
          <div className="frame-3467-771469" id="id-771469">
            <div className="image-771470" id="id-771470">
              <div
                className=" image-div bg-no-repeat fill-parent bg-cover nodeBg-771470"
                id="id-bg-771470"
              >
                <Image src={BlogImage1} alt="icon"/>
                {/* <img src={BlogIcon} alt="icon"/> */}
              </div>
            </div>
            <div className="frame-3468-771471" id="id-771471">
              <div className="frame-3384-771472" id="id-771472">
                <div className="technology-771473" id="id-771473">
                  <span className="technology-771473-0 ">Technology</span>
                </div>
              </div>
              <div className="ensuring-worker-771474" id="id-771474">
                <span className="ensuring-worker-771474-0 ">
                  Ensuring Worker Safety in Modern Textile Manufacturing
                </span>
              </div>
              <div className="frame-3466-771475" id="id-771475">
                <div className="group-3258-771476" id="id-771476">
                  <div className="ellipse-322-771477" id="id-771477">
                    <div
                      className=" image-div bg-no-repeat bg-crop nodeBg-771477"
                      id="id-bg-771477"
                    >
                      <Image src={ProfileIcon} alt="icon"/>
                    </div>
                  </div>
                </div>
                <div className="jesica-koli-771478" id="id-771478">
                  <span className="jesica-koli-771478-0 ">Jesica koli</span>
                </div>
                <div className="c-02-december-202-771482" id="id-771482">
                  <Image src={CalenderIcon} alt="icon"/>
                  <span className="c-02-december-202-771482-0 ">02 december 2022</span>
                </div>
                <div className="line-140-771479" id="id-771479"></div>
                <div className="line-141-771483" id="id-771483"></div>
              </div>
              <div className="empowering-prof-771484" id="id-771484">
                <span className="empowering-prof-771484-0 ">
                  empowering professionals to enhance precision and productivity in embroidery and garment......
                </span>
              </div>
              <div className="frame-3487-771485" id="id-771485">
                <div className="read-more-771486" id="id-771486">
                  <span className="read-more-771486-0 ">Read more</span>
                  {/* <Image src={ArrowIcon} alt="icon" width="16px" height="16px"/> */}
                </div>
                <div className="frame-3483-771487" id="id-771487">
                  <div className="arrow-1-771488" id="id-771488">
                    <div
                      className="nodeBg-771488 pos-init fill-parent image-div bg-contain bg-no-repeat"
                      id="id-bg-771488"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="itma-bn-card-container">
        <div className="property-1frame-771644" id="id-771644">
          <div className="frame-3467-771469" id="id-771469">
            <div className="image-771470" id="id-771470">
              <div
                className=" image-div bg-no-repeat fill-parent bg-cover nodeBg-771470"
                id="id-bg-771470"
              >
                <Image src={BlogImage2} alt="icon"/>
                {/* <img src={BlogIcon} alt="icon"/> */}
              </div>
            </div>
            <div className="frame-3468-771471" id="id-771471">
              <div className="frame-3384-771472" id="id-771472">
                <div className="technology-771473" id="id-771473">
                  <span className="technology-771473-0 ">Technology</span>
                </div>
              </div>
              <div className="ensuring-worker-771474" id="id-771474">
                <span className="ensuring-worker-771474-0 ">
                  Ensuring Worker Safety in Modern Textile Manufacturing
                </span>
              </div>
              <div className="frame-3466-771475" id="id-771475">
                <div className="group-3258-771476" id="id-771476">
                  <div className="ellipse-322-771477" id="id-771477">
                    <div
                      className=" image-div bg-no-repeat bg-crop nodeBg-771477"
                      id="id-bg-771477"
                    >
                      <img
                        className="itma-blogsnews-img"
                        src={blog.blog_image.url}
                        alt="icon"
                      />
                      {/* <img src={BlogIcon} alt="icon"/> */}
                    </div>
                  </div>
                </div>
                <div className="jesica-koli-771478" id="id-771478">
                  <span className="jesica-koli-771478-0 ">Jesica koli</span>
                </div>
                <div className="c-02-december-202-771482" id="id-771482">
                  <Image src={CalenderIcon} alt="icon"/>
                  <span className="c-02-december-202-771482-0 ">02 december 2022</span>
                </div>
                <div className="line-140-771479" id="id-771479"></div>
                <div className="line-141-771483" id="id-771483"></div>
              </div>
              <div className="empowering-prof-771484" id="id-771484">
                <span className="empowering-prof-771484-0 ">
                  empowering professionals to enhance precision and productivity in embroidery and garment......
                </span>
              </div>
              <div className="frame-3487-771485" id="id-771485">
                <div className="read-more-771486" id="id-771486">
                  <span className="read-more-771486-0 ">Read more</span>
                  {/* <Image src={ArrowIcon} alt="icon" width="16px" height="16px"/> */}
                </div>
                <div className="frame-3483-771487" id="id-771487">
                  <div className="arrow-1-771488" id="id-771488">
                    <div
                      className="nodeBg-771488 pos-init fill-parent image-div bg-contain bg-no-repeat"
                      id="id-bg-771488"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    <div className="itma-bn-card-container">
        <div className="property-1frame-771644" id="id-771644">
          <div className="frame-3467-771469" id="id-771469">
            <div className="image-771470" id="id-771470">
              <div
                className=" image-div bg-no-repeat fill-parent bg-cover nodeBg-771470"
                id="id-bg-771470"
              >
                <Image src={BlogImage4} alt="icon"/>
                {/* <img src={BlogIcon} alt="icon"/> */}
              </div>
            </div>
            <div className="frame-3468-771471" id="id-771471">
              <div className="frame-3384-771472" id="id-771472">
                <div className="technology-771473" id="id-771473">
                  <span className="technology-771473-0 ">Technology</span>
                </div>
              </div>
              <div className="ensuring-worker-771474" id="id-771474">
                <span className="ensuring-worker-771474-0 ">
                  Ensuring Worker Safety in Modern Textile Manufacturing
                </span>
              </div>
              <div className="frame-3466-771475" id="id-771475">
                <div className="group-3258-771476" id="id-771476">
                  <div className="ellipse-322-771477" id="id-771477">
                    <div
                      className=" image-div bg-no-repeat bg-crop nodeBg-771477"
                      id="id-bg-771477"
                    >
                      <Image src={ProfileIcon} alt="icon"/>
                    </div>
                  </div>
                </div>
                <div className="jesica-koli-771478" id="id-771478">
                  <span className="jesica-koli-771478-0 ">Jesica koli</span>
                </div>
                <div className="c-02-december-202-771482" id="id-771482">
                  <Image src={CalenderIcon} alt="icon"/>
                  <span className="c-02-december-202-771482-0 ">02 december 2022</span>
                </div>
                <div className="line-140-771479" id="id-771479"></div>
                <div className="line-141-771483" id="id-771483"></div>
              </div>
              <div className="empowering-prof-771484" id="id-771484">
                <span className="empowering-prof-771484-0 ">
                  empowering professionals to enhance precision and productivity in embroidery and garment......
                </span>
              </div>
              <div className="frame-3487-771485" id="id-771485">
                <div className="read-more-771486" id="id-771486">
                  <span className="read-more-771486-0 ">Read more</span>
                  {/* <Image src={ArrowIcon} alt="icon" width="16px" height="16px"/> */}
                </div>
                <div className="frame-3483-771487" id="id-771487">
                  <div className="arrow-1-771488" id="id-771488">
                    <div
                      className="nodeBg-771488 pos-init fill-parent image-div bg-contain bg-no-repeat"
                      id="id-bg-771488"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    <div className="itma-bn-card-container">
        <div className="property-1frame-771644" id="id-771644">
          <div className="frame-3467-771469" id="id-771469">
            <div className="image-771470" id="id-771470">
              <div
                className=" image-div bg-no-repeat fill-parent bg-cover nodeBg-771470"
                id="id-bg-771470"
              >
                <Image src={BlogImage3} alt="icon"/>
                {/* <img src={BlogIcon} alt="icon"/> */}
              </div>
            </div>
            <div className="frame-3468-771471" id="id-771471">
              <div className="frame-3384-771472" id="id-771472">
                <div className="technology-771473" id="id-771473">
                  <span className="technology-771473-0 ">Technology</span>
                </div>
              </div>
              <div className="ensuring-worker-771474" id="id-771474">
                <span className="ensuring-worker-771474-0 ">
                  Ensuring Worker Safety in Modern Textile Manufacturing
                </span>
              </div>
              <div className="frame-3466-771475" id="id-771475">
                <div className="group-3258-771476" id="id-771476">
                  <div className="ellipse-322-771477" id="id-771477">
                    <div
                      className=" image-div bg-no-repeat bg-crop nodeBg-771477"
                      id="id-bg-771477"
                    >
                      <Image src={ProfileIcon} alt="icon"/>
                    </div>
                  </div>
                </div>
                <div className="jesica-koli-771478" id="id-771478">
                  <span className="jesica-koli-771478-0 ">Jesica koli</span>
                </div>
                <div className="c-02-december-202-771482" id="id-771482">
                  <Image src={CalenderIcon} alt="icon"/>
                  <span className="c-02-december-202-771482-0 ">02 december 2022</span>
                </div>
                <div className="line-140-771479" id="id-771479"></div>
                <div className="line-141-771483" id="id-771483"></div>
              </div>
              <div className="empowering-prof-771484" id="id-771484">
                <span className="empowering-prof-771484-0 ">
                  empowering professionals to enhance precision and productivity in embroidery and garment......
                </span>
              </div>
              <div className="frame-3487-771485" id="id-771485">
                <div className="read-more-771486" id="id-771486">
                  <span className="read-more-771486-0 ">Read more</span>
                  {/* <Image src={ArrowIcon} className="footer-icon" alt="icon" width="10px" height="10px"/> */}
                </div>
                <div className="frame-3483-771487" id="id-771487">
                  <div className="arrow-1-771488" id="id-771488">
                    <div
                      className="nodeBg-771488 pos-init fill-parent image-div bg-contain bg-no-repeat"
                      id="id-bg-771488"
                      ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="frame-3502-872697">
        <div className="itma-blogs-explore explore-all-blo-872698">
          <span className="itma-blogs-explore-text">
            <a href="https://itma.com/blogs">Explore all Blogs</a>
            <Image src={ArrowIcon} alt="icon" width="16px" height="16px" />
          </span>
        </div>
      </div>
    </div>
  );
}
