import { Action, Image } from "./action";

type AdditionalParam = {
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  banner_title: string;
  banner_description: string;
  designation: string;
  name: string;
  html_code: string;
  body: string;
  date: string;
};

type Employee = {
  image: Image;
  name: string;
  designation: string;
  $: AdditionalParam;
};

type BucketList = [
  BucketArray: {
    title_h3: string;
    description: string;
    url: string;
    call_to_action: Action;
    icon: Image;
    $: AdditionalParam;
  }
];

type GalleryImages = [
  ImagesArray: {
    url: string;
    image: Image;
    $: AdditionalParam;
  }
];

type Card = [
  cardArray: {
    title_h3: string;
    description: string;
    call_to_action: Action;
    $: AdditionalParam;
  }
];

type Article = {
  href: string;
  title: string;
  $: AdditionalParam;
};

type FeaturedBlog = [
  BlogArray: {
    title: string;
    featured_image: Image;
    body: string;
    url: string;
    $: AdditionalParam;
  }
];

type Widget = {
  title_h2: string;
  type?: string;
  $: AdditionalParam;
};

export type BookingProps = {
  booking_title: string;
  booking_desc: string;
  booking_button: string;
  $: AdditionalParam;
};

export type Component = {
  hero_banner: Banner;
  section?: SectionProps;
  // section_with_buckets?: SectionWithBucket;
  // from_blog?: FeaturedBlogData;
  section_with_cards?: Cards;
  section_with_html_code?: AdditionalParamProps;
  our_team?: TeamProps;
  widget?: Widget;
  contactus?: ContactUsProps;
  gallery: GallerywithImages;
  specials: Specials;
  menu: MenuProps;
  booking: BookingProps;
};

export type Specails_Item = {
  specials_item_sidetitle: string;
  specials_item_maintitle: string;
  special_item_description: string;
  specials_item_matter: string;
  specials_item_image: Image;
};

export type Specail_Item_Types = {
  specials_item: [Specails_Item];
};

export type Specials = {
  specials_title: string;
  specials_desc: string;
  specials_item_types: Specail_Item_Types;
};
export type StandardPageComponents = {
  gallery: GallerywithImages;
};

export type SectionWithBucket = {
  bucket_tabular: boolean;
  title_h2: string;
  buckets: BucketList;
  description: string;
  $: AdditionalParam;
};

export type GallerywithImages = {
  title_h2: string;
  gallery_images: GalleryImages;
  description: string;
  $: AdditionalParam;
};
export type contactus_item = {
  contactus_item_title: string;
  contactus_item_desc: string;
  contactus_item_image: [Image];
};

export type ContactUsProps = {
  contactus_title: string;
  contactus_desc: string;
  contactus_content: [contactus_item];
  form_button: string;
};

export type Cards = {
  cards: Card;
};

export type Banner = {
  banner_title: string;
  banner_description: string;
  bg_color: string;
  call_to_action: Action;
  banner_image: Image;
  text_color: string;
  $: AdditionalParam;
};

export type AdditionalParamProps = {
  html_code_alignment: string;
  title: string;
  $: AdditionalParam;
  description: string;
  html_code: string;
};

export type SectionProps = {
  title_h2: String;
  description: string;
  call_to_action: Action;
  image: Image;
  image_alignment: string;
  $: AdditionalParam;
};

export type TeamProps = {
  title_h2: string;
  description: string;
  $: AdditionalParam;
  employees: [Employee];
};

export type FeaturedBlogData = {
  title_h2: string;
  view_articles: Article;
  featured_blogs: FeaturedBlog;
  $: AdditionalParam;
};

export type RenderProps = {
  blogPost?: boolean;
  contentTypeUid: string;
  entryUid: string;
  locale: string;
  pageComponents: Component[];
};

export type RenderStandardPageProps = {
  contentTypeUid: string;
  entryUid: string;
  locale: string;
  pageComponents: StandardPageComponents[];
};

export type MenuItemNames = {
  menu_item_name: [MenuItemName];
};

export type MenuItemName = {
  menu_item_name: string;
};

export type MenuItems = {
  menu_item: [MenuItem];
};

export type MenuItem = {
  menu_item_title: string;
  menu_item_desc: string;
  menu_item_price: string;
  menu_item_img: Image;
  menu_item_tags: string;
};

export type MenuProps = {
  menu_title: string;
  menu_desc: string;
  menu_item_names: MenuItemNames;
  menu_items: MenuItems;
};
