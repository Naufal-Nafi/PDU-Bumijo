"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "./service-card";
import type { Kategori, Layanan } from "@/db/schema";
import { Dictionary } from "@/lib/dictionary";
import { localizeField } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

interface ServiceTabsProps {
  layananCategories: Kategori[];
  layananList: Layanan[];
  locale: Locale;
  dict: Dictionary;
}

export function ServiceTabs({ layananCategories, layananList, dict, locale }: ServiceTabsProps) {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <Tabs defaultValue="semua" className="w-full">
          <div className="mb-10 flex justify-center">
            <TabsList className="h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
              <TabsTrigger
                value="semua"
                className="rounded-full border border-light-primary text-dark-primary px-5 py-2 text-sm data-active:bg-primary data-active:text-white hover:bg-primary hover:text-white duration-300 cursor-pointer"
              >
                {dict.service.category}
              </TabsTrigger>
              {layananCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={String(cat.id)}
                  className="rounded-full border border-light-primary text-dark-primary px-5 py-2 text-sm data-active:bg-primary data-active:text-white hover:bg-primary hover:text-white duration-300 cursor-pointer"
                >
                  {localizeField(cat, "title", locale)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="semua">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {layananList.map((item) => (
                <ServiceCard locale={locale as Locale} key={item.id} layanan={item} />
              ))}
            </div>
          </TabsContent>

          {layananCategories.map((cat) => (
            <TabsContent key={cat.id} value={String(cat.id)}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {layananList
                  .filter((layanan) => layanan.kategoriId === cat.id)
                  .map((item) => (
                    <ServiceCard locale={locale as Locale} key={item.id} layanan={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}