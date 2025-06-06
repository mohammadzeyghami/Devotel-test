import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Input } from "../Input/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

type InsuranceRow = {
  id: string;
  "Full Name": string;
  Age: number;
  Gender: string;
  "Insurance Type": string;
  City: string;
};

const ITEMS_PER_PAGE = 10;

type PrimaryTableProps = {
  columns: (keyof Omit<InsuranceRow, "id">)[];
  data: InsuranceRow[];
  isLoading?: boolean;
};

const PrimaryTable = ({
  columns,
  data,
  isLoading = false,
}: PrimaryTableProps) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<keyof InsuranceRow>("Full Name");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      return String(valA).localeCompare(String(valB)) * (sortAsc ? 1 : -1);
    });
  }, [filteredData, sortBy, sortAsc]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return sortedData.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedData, page]);

  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);

  const handleSort = (column: keyof InsuranceRow) => {
    if (sortBy === column) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(column);
      setSortAsc(true);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder={t("table.search") || "Search..."}
        className="max-w-sm"
      />

      {isLoading ? (
        <div className="flex items-center justify-center py-10 text-muted-foreground">
          {t("loading")}...
        </div>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead
                    key={col}
                    className="cursor-pointer select-none"
                    onClick={() => handleSort(col)}
                  >
                    {col}
                    {sortBy === col && (sortAsc ? " 🔼" : " 🔽")}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((col) => (
                    <TableCell
                      key={col}
                      className={
                        i18n.language === "fa" ? "text-right" : "text-left"
                      }
                    >
                      {row[col]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between pt-2">
            <div className="text-sm text-muted-foreground">
              {t("table.page", { page, totalPages })}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-2 py-1 border rounded disabled:opacity-50"
              >
                {t("table.prev")}
              </button>
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-2 py-1 border rounded disabled:opacity-50"
              >
                {t("table.next")}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PrimaryTable;
