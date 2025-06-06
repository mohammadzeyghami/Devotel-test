import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./Navigationbar";
import { useTranslation } from "react-i18next";

const NavigationPrimary = () => {
  const location = useLocation();
  const isFormPage = location.pathname === "/form";

  const { t } = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {!isFormPage && (
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/form">{t("form")}</Link>
            </NavigationMenuLink>
          )}

          {isFormPage && (
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">{t("home")}</Link>
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationPrimary;
