import { Separator } from "@/atomic/molecules/Seprator/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
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
      {/* <AppSidebar /> */}
      <SidebarInset>
        <header className="flex items-center h-16 gap-2 px-4 border-b">
          <div className="flex justify-between w-full gap-4 pt-4 mb-4">
            <div className="flex gap-4">
              <Link to="/" className="underline">
                {t("home")}
              </Link>
            </div>
            <div className="flex items-center gap-2 ms-auto">
              <button
                onClick={() => setDark((d) => !d)}
                className="px-3 py-1 text-white bg-blue-500 rounded"
              >
                {t("toggle")}
              </button>
              <select
                onChange={(e) => changeLang(e.target.value)}
                value={i18n.language}
                className="px-2 border rounded"
              >
                <option value="en">English</option>
                <option value="fa">فارسی</option>
              </select>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
