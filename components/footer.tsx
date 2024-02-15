import React, { useState, useEffect } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import { onEntryChange } from "../contentstack-sdk";
import { getFooterRes } from "../helper";
import Skeleton from "react-loading-skeleton";
import { FooterProps, Entry, Links } from "../typescript/layout";

export default function Footer({
  footer,
  entries,
}: {
  footer: FooterProps;
  entries: Entry;
}) {
  const [getFooter, setFooter] = useState(footer);

  function buildNavigation(ent: Entry, ft: FooterProps) {
    let newFooter = { ...ft };
    if (ent.length !== newFooter.navigation.link.length) {
      ent.forEach((entry) => {
        const fFound = newFooter?.navigation.link.find(
          (nlink: Links) => nlink.title === entry.title
        );
        if (!fFound) {
          newFooter.navigation.link?.push({
            title: entry.title,
            href: entry.url,
            $: entry.$,
          });
        }
      });
    }
    return newFooter;
  }

  async function fetchData() {
    try {
      if (footer && entries) {
        const footerRes = await getFooterRes();
        const newfooter = buildNavigation(entries, footerRes);
        setFooter(newfooter);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [footer]);

  const footerData = getFooter ? getFooter : undefined;

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>{footerData?.title}</h3>
                <p>
                  {footerData?.city}
                  <br />
                  {footerData?.country}
                  <br />
                  <br />
                  {/* <p>{footerData?.phone}</p> */}
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  {footerData ? (
                    footerData.social?.social_share.map((social) => (
                      <a
                        href={social.link.href}
                        title={social.link.title}
                        key={social.link.title}
                      >
                        {social.icon && (
                          <i className="bx bxl ">
                            <img
                              src={social.icon.url}
                              alt={social.link.title}
                              {...(social.icon.$?.url as {})}
                            />
                          </i>
                        )}
                      </a>
                    ))
                  ) : (
                    <Skeleton width={200} />
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>{footerData?.usefullink_title}</h4>
              <nav>
                <ul className="nav-ul">
                  {footerData ? (
                    footerData.usefullinks?.link.map((menu) => (
                      <li
                        className="footer-nav-li"
                        key={menu.title}
                        {...menu.$?.title}
                      >
                        <Link href={menu.href}>{menu.title}</Link>
                      </li>
                    ))
                  ) : (
                    <Skeleton width={300} />
                  )}
                </ul>
              </nav>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>{footerData?.ourservice_title}</h4>
              <nav>
                <ul className="nav-ul">
                  {footerData ? (
                    footerData.our_services?.link.map((menu) => (
                      <li
                        className="footer-nav-li"
                        key={menu.title}
                        {...menu.$?.title}
                      >
                        <Link href={menu.href}>{menu.title}</Link>
                      </li>
                    ))
                  ) : (
                    <Skeleton width={300} />
                  )}
                </ul>
              </nav>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>{footerData?.newsletter}</h4>
              <p>{footerData?.newsletter_text} </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Restaurantly</span>
          </strong>
          . All Rights Reserved
        </div>
        {/* <div className="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/restaurantly-restaurant-template/ -->
          <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
        </div> */}
      </div>
    </footer>
  );
}

// <footer>
//   <div className="max-width footer-div">
//     <div className="col-quarter">
//       {footerData && footerData.logo ? (
//         <Link href="/">
//           <a className="logo-tag">
//             <img
//               src={footerData.logo.url}
//               alt={footerData.title}
//               title={footerData.title}
//               {...(footer.logo.$?.url as {})}
//               className="logo footer-logo"
//             />
//           </a>
//         </Link>
//       ) : (
//         <Skeleton width={150} />
//       )}
//     </div>
//     <div className="col-half">
//       <nav>
//         <ul className="nav-ul">
//           {footerData ? (
//             footerData.navigation.link.map((menu) => (
//               <li
//                 className="footer-nav-li"
//                 key={menu.title}
//                 {...menu.$?.title}
//               >
//                 <Link href={menu.href}>{menu.title}</Link>
//               </li>
//             ))
//           ) : (
//             <Skeleton width={300} />
//           )}
//         </ul>
//       </nav>
//     </div>
//     <div className="col-quarter social-link">
//       <div className="social-nav">
//         {footerData ? (
//           footerData.social?.social_share.map((social) => (
//             <a
//               href={social.link.href}
//               title={social.link.title}
//               key={social.link.title}
//             >
//               {social.icon && (
//                 <img
//                   src={social.icon.url}
//                   alt={social.link.title}
//                   {...(social.icon.$?.url as {})}
//                 />
//               )}
//             </a>
//           ))
//         ) : (
//           <Skeleton width={200} />
//         )}
//       </div>
//     </div>
//   </div>
//   {footerData && typeof footerData.copyright === "string" ? (
//     <div className="copyright" {...(footer.$?.copyright as {})}>
//       {parse(footerData.copyright)}
//     </div>
//   ) : (
//     <div className="copyright">
//       <Skeleton width={500} />
//     </div>
//   )}
// </footer>
