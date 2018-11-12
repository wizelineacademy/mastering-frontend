import "../styles/main.scss";
import { BlogCarousel } from "./blog-carousel";

const blogCarousel = new BlogCarousel();
blogCarousel.init(document.querySelector(".resources__carousel"));
