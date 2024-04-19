import { Page } from "@/types";
import ThemeSwitcher from "./_components/theme";

const HomePage: Page = () => {
  return (
    <div>
      <div className="dark:text-white">HomePage</div>
      <ThemeSwitcher />
    </div>
  );
};

export default HomePage;
