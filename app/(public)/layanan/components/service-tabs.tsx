"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "./service-card";
import type { Kategori, Layanan } from "@/db/schema";

interface ServiceTabsProps {
  layananCategories: Kategori[];
  layananList: Layanan[];
}

export function ServiceTabs({ layananCategories, layananList}: ServiceTabsProps) {
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
                Semua Layanan
              </TabsTrigger>
              {layananCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={String(cat.id)}
                  className="rounded-full border border-light-primary text-dark-primary px-5 py-2 text-sm data-active:bg-primary data-active:text-white hover:bg-primary hover:text-white duration-300 cursor-pointer"
                >
                  {cat.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="semua">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {layananList.map((item) => (
                <ServiceCard key={item.id} layanan={item} />
              ))}
            </div>
          </TabsContent>

          {layananCategories.map((cat) => (
            <TabsContent key={cat.id} value={String(cat.id)}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {layananList
                  .filter((layanan) => layanan.kategoriId === cat.id)
                  .map((item) => (
                    <ServiceCard key={item.id} layanan={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}