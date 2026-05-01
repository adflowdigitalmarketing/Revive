import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { WarriorPage } from "./pages/WarriorPage";
import { ProgramPage } from "./pages/ProgramPage";
import { AboutPage } from "./pages/AboutPage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { NewsPage } from "./pages/NewsPage";
import { CareersPage } from "./pages/CareersPage";
import { VacanciesPage } from "./pages/VacanciesPage";
import { ApprenticeshipsPage } from "./pages/ApprenticeshipsPage";
import { AwardsPage } from "./pages/AwardsPage";
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/products/warrior",
    Component: WarriorPage,
  },
  {
    path: "/products/program",
    Component: ProgramPage,
  },
  {
    path: "/about",
    Component: AboutPage,
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
]);
