import { Button } from "@/atomic/molecules/Button/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atomic/molecules/Select/Select";
import {
  SidebarInset,
  SidebarProvider,
} from "@/atomic/molecules/Sidebar/sidebar";
import { useEffect, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function LayoutMain({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex items-center h-16 gap-2 px-4 border-b">
          <div className="flex justify-between w-full gap-4 pt-4 mb-4">
            <div className="flex gap-4">
              <Link to="/" className="underline">
                {t("home")}
              </Link>
              <Link to="/form" className="underline">
                {t("form")}
              </Link>
            </div>
            <div className="flex items-center gap-2 ms-auto">
              <Button onClick={() => setDark((d) => !d)}>{t("toggle")}</Button>
              <Select onValueChange={changeLang} value={i18n.language}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fa">فارسی</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
