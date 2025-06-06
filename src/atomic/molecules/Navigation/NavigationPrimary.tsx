import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./Navigationbar";

const NavigationPrimary = () => {
  const location = useLocation();
  const isFormPage = location.pathname === "/form";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {!isFormPage && (
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/form">Form</Link>
            </NavigationMenuLink>
          )}

          {isFormPage && (
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationPrimary;
