import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { WarriorPage } from "./pages/WarriorPage";
import { ConfiguratorPage } from "./pages/ConfiguratorPage";
import { ProgramPage } from "./pages/ProgramPage";
import { PistonPage } from "./pages/PistonPage";
import { LivePage } from "./pages/LivePage";
import { AboutPage } from "./pages/AboutPage";
import { StoryPage } from "./pages/StoryPage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { NewsPage } from "./pages/NewsPage";
import { PressPage } from "./pages/PressPage";
import { AwardsPage } from "./pages/AwardsPage";
import { CareersPage } from "./pages/CareersPage";
import { VacanciesPage } from "./pages/VacanciesPage";
import { ApprenticeshipsPage } from "./pages/ApprenticeshipsPage";
import { HirePage } from "./pages/HirePage";
import { SustainabilityPage } from "./pages/SustainabilityPage";
import { EcoParkPage } from "./pages/EcoParkPage";
import { GreenCredentialsPage } from "./pages/GreenCredentialsPage";
import { CircularEconomyPage } from "./pages/CircularEconomyPage";
import { DecarboZonePage } from "./pages/DecarboZonePage";
import { PartnersPage } from "./pages/PartnersPage";
import { GlobalPage } from "./pages/GlobalPage";
import { IrelandPage } from "./pages/IrelandPage";
import { UKPage } from "./pages/UKPage";
import { NordicPage } from "./pages/NordicPage";
import { FrancePage } from "./pages/FrancePage";
import { NewZealandPage } from "./pages/NewZealandPage";
import { ErrorPage } from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/products",
        Component: ProductsPage,
      },
      {
        path: "/products/warrior",
        Component: WarriorPage,
      },
      {
        path: "/products/warrior/configure",
        Component: ConfiguratorPage,
      },
      {
        path: "/products/program",
        Component: ProgramPage,
      },
      {
        path: "/products/piston",
        Component: PistonPage,
      },
      {
        path: "/products/live",
        Component: LivePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/about/story",
        Component: StoryPage,
      },
      {
        path: "/about/team",
        Component: LeadershipPage,
      },
      {
        path: "/about/news",
        Component: NewsPage,
      },
      {
        path: "/about/press",
        Component: PressPage,
      },
      {
        path: "/careers",
        Component: CareersPage,
      },
      {
        path: "/careers/vacancies",
        Component: VacanciesPage,
      },
      {
        path: "/careers/apprenticeships",
        Component: ApprenticeshipsPage,
      },
      {
        path: "/careers/hire",
        Component: HirePage,
      },
      {
        path: "/about/awards",
        Component: AwardsPage,
      },
      {
        path: "/sustainability",
        Component: SustainabilityPage,
      },
      {
        path: "/sustainability/ecopark",
        Component: EcoParkPage,
      },
      {
        path: "/sustainability/credentials",
        Component: GreenCredentialsPage,
      },
      {
        path: "/sustainability/circular-economy",
        Component: CircularEconomyPage,
      },
      {
        path: "/sustainability/decarbonising-zone",
        Component: DecarboZonePage,
      },
      {
        path: "/partners",
        Component: PartnersPage,
      },
      {
        path: "/global",
        Component: GlobalPage,
      },
      {
        path: "/global/ireland",
        Component: IrelandPage,
      },
      {
        path: "/global/uk",
        Component: UKPage,
      },
      {
        path: "/global/nordic",
        Component: NordicPage,
      },
      {
        path: "/global/nordics",
        Component: NordicPage,
      },
      {
        path: "/global/france",
        Component: FrancePage,
      },
      {
        path: "/global/nz",
        Component: NewZealandPage,
      },
      {
        path: "/global/new-zealand",
        Component: NewZealandPage,
      },
    ],
  },
]);
