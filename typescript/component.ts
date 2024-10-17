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
  name_field: string;
  email_field: string;
  phone_field: string;
  date_field: string;
  time_field: string;
  of_people_field: string;
  message_field: string;
  book_a_table_text: string;
  $: BookingAdditionalParam;
};

type BookingAdditionalParam = {
  booking_title: string;
  booking_desc: string;
};

type NewBanner = {};

type Register = {};

type ItmaBlogNews = {};

type ITMAConnect = {};

type Brands = {};

type JoinItma = {};

export type Component = {
  banner: BannerProps;
  register: Register;
  itma_blogs_and_news: ItmaBlogNews;
  itma_connect: ITMAConnect;
  brands: Brands;
  join_itma: JoinItma;

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
  about: About_props;
  events: EventProps;
  why_us: WhyUsProps;
  testimonial: TestimonialProps;
  specials: Specials;
  menu: MenuProps;
  booking: BookingProps;
  chef: Chef;
};
type WhyUsCards = {
  card_no: number;
  card_descripton: String;

  card_title: String;
};

export type WhyUsProps = {
  title: String;
  description: String;
  why_us_items: [WhyUsCards];
  $: AdditionalParam;
};

type WhyUsAdditionalParam = {
  title: String;
  description: String;
  card_no: number;
  card_descripton: String;
  card_title: String;
};

export type Specails_Item = {
  specials_item_active: string;
  specials_item_id: string;
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

export type Chef_Items = {
  chef_name: string;
  chef_role: string;
  chef_twitter: string;
  chef_instagram: string;
  chef_linkedin: string;
  chef_facebook: string;
  chef_pic: Image;
  $: AdditionalParam;
};

export type Chef = {
  chef_title: string;
  chef_description: string;
  chef_items: [Chef_Items];
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
  galleryimages: GalleryImages;
  description: string;
};

type GalleryImages = {
  image: [Image];
};

type TestimoinalItems = {
  words_by_testimonial: String;
  testimonial_name: String;
  testimonial_role: String;
  testimonial_snap: Image;
  $: TestimonialAdditionalParam;
};

export type TestimonialProps = {
  title: String;
  description: String;
  testimonial_items: [TestimoinalItems];
  $: TestimonialAdditionalParam;
};

type TestimonialAdditionalParam = {
  title: string;
  description: string;
  words_by_testimonial: String;
  testimonial_name: String;
  testimonial_role: String;
};

export type About_props = {
  about_title: String;
  bg_img: Image;
  about_description: String;
  conclution: String;
  about_image: Image;
  description_points: [String];
  $: AboutAdditionalParam;
};

type AboutAdditionalParam = {
  banner_title: string;
  banner_description: string;
  about_title: String;
  about_description: String;
  description_points: [String];
  conclution: String;
};

type List_of_Events = {
  event_image: Image;
  event_title: String;
  event_price: String;
  event_description: String;
  event_points: [String];
  event_conclusion: String;
  $: EventsAdditionalParam;
};

type EventsAdditionalParam = {
  title: string;
  description: string;
  event_title: String;
  event_price: String;
  event_description: String;
  event_point: String;
  event_conclusion: String;
};
export type EventProps = {
  title: String;
  description: String;
  Background_img: Image;
  events: [List_of_Events];
  $: EventsAdditionalParam;
};
export type contactus_item = {
  contactus_item_title: string;
  contactus_item_desc: string;
  contactus_item_image: [Image];
};

export type ContactUsProps = {
  contactus_title: string;
  contactus_desc: string;
  contactus_content: contactus_Contents;
  name_input: string;
  email_input: string;
  subject_input: string;
  message_input: string;
  form_button: string;
};
type contactus_Contents = {
  contactus_item: [contactus_content];
};
type contactus_content = {
  contactus_item_title: string;
  contactus_item_desc: string;
  contactus_item_image: Image;
};
export type Cards = {
  cards: Card;
};

export type Banner = {
  banner_title: string;
  banner_description: string;
  bg_color: string;
  call_to_action: Action;
  call_to_action_2: Action;
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

type MenuItems = {
  menu_item: [CNXMenuItem];
};

type MenuTag = {
  menu_tag_name: string;
};

type MenuTags = {
  menu_tag: [MenuTag];
};

type CNXMenuItem = {
  menu_item_title: string;
  menu_item_desc: string;
  menu_item_price: string;
  menu_item_image: Image;
  menu_item_tags: string;
};

export type MenuProps = {
  menu_title: string;
  menu_desc: string;
  menu_items: MenuItems;
  menu_tags: MenuTags;
};

export type BannerProps = {
  banner_text_left: string;
  banner_text_right: string;
  banner_image_left: Image;
  banner_image_right: Image;
};
