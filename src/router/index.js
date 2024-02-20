import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageOne from "../components/Pages/HomePageOne";
import HomePageTwo from "../components/Pages/HomePageTwo";
import HomePageThree from "../components/Pages/HomePageThree";
import HomePageFour from "../components/Pages/HomePageFour";
import HomePageFive from "../components/Pages/HomePageFive";
import HomePageSix from "../components/Pages/HomePageSix";
import HomePageSeven from "../components/Pages/HomePageSeven";
import HomePageEight from "../components/Pages/HomePageEight";
import AboutPageOne from "../components/Pages/AboutPageOne";
import AboutPageTwo from "../components/Pages/AboutPageTwo";
import TeamPage from "../components/Pages/TeamPage";
import PricingPage from "../components/Pages/PricingPage";
import FeedbackPage from "../components/Pages/FeedbackPage";
import PartnerPage from "../components/Pages/PartnerPage";
import FaqPage from "../components/Pages/FaqPage";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage";
import TermsConditionPage from "../components/Pages/TermsConditionPage";
import ServicesPageOne from "../components/Pages/ServicesPageOne";
import ServicesPageTwo from "../components/Pages/ServicesPageTwo";
import ServicesPageThree from "../components/Pages/ServicesPageThree";
import ServicesPageFour from "../components/Pages/ServicesPageFour";
import ServicesDetailsPage from "../components/Pages/ServicesDetailsPage";
import ProjectsPage from "../components/Pages/ProjectsPage";
import ProjectsDetailsPage from "../components/Pages/ProjectsDetailsPage";
import ShopPage from "../components/Pages/ShopPage";
import CartPage from "../components/Pages/CartPage";
import CheckoutPage from "../components/Pages/CheckoutPage";
import ProductsDetailsPage from "../components/Pages/ProductsDetailsPage";
import BlogPageOne from "../components/Pages/BlogPageOne";
import BlogPageTwo from "../components/Pages/BlogPageTwo";
import BlogDetailsPage from "../components/Pages/BlogDetailsPage";
import ContactPage from "../components/Pages/ContactPage";

const routes = [
  { path: "/", component: HomePageSix },
  { path: "/home-demo-two", component: HomePageTwo },
  { path: "/home-demo-three", component: HomePageThree },
  { path: "/home-demo-four", component: HomePageFour },
  { path: "/home-demo-five", component: HomePageFive },
  // { path: "/home-demo-six", component: HomePageSix },
  { path: "/home-demo-seven", component: HomePageSeven },
  { path: "/home-demo-eight", component: HomePageEight },
  { path: "/about-one", component: AboutPageOne },
  { path: "/about-two", component: AboutPageTwo },
  { path: "/team", component: TeamPage },
  { path: "/pricing", component: PricingPage },
  { path: "/feedback", component: FeedbackPage },
  { path: "/partner", component: PartnerPage },
  { path: "/faq", component: FaqPage },
  { path: "/privacy-policy", component: PrivacyPolicyPage },
  { path: "/terms-of-service", component: TermsConditionPage },
  { path: "/services-one", component: ServicesPageOne },
  { path: "/services-two", component: ServicesPageTwo },
  { path: "/services-three", component: ServicesPageThree },
  { path: "/services-four", component: ServicesPageFour },
  { path: "/services-details/:id", component: ServicesDetailsPage },
  { path: "/projects", component: ProjectsPage },
  { path: "/projects-details/:id", component: ProjectsDetailsPage },
  { path: "/shop", component: ShopPage },
  { path: "/cart", component: CartPage },
  { path: "/checkout", component: CheckoutPage },
  { path: "/products-details", component: ProductsDetailsPage },
  { path: "/blog-one", component: BlogPageOne },
  { path: "/blog-two", component: BlogPageTwo },
  { path: "/blog-details/:id", component: BlogDetailsPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
