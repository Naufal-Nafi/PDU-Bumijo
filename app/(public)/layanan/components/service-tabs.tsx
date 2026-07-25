"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "./service-card";
import { layananCategories, layananList } from "../layanan";

export function ServiceTabs() {
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
                  key={cat.slug}
                  value={cat.slug}
                  className="rounded-full border border-light-primary text-dark-primary px-5 py-2 text-sm data-active:bg-primary data-active:text-white hover:bg-primary hover:text-white duration-300 cursor-pointer"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="semua">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {layananList.map((layanan) => (
                <ServiceCard key={layanan.id} layanan={layanan} />
              ))}
            </div>
          </TabsContent>

          {layananCategories.map((cat) => (
            <TabsContent key={cat.slug} value={cat.slug}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {layananList
                  .filter((layanan) => layanan.category === cat.slug)
                  .map((layanan) => (
                    <ServiceCard key={layanan.id} layanan={layanan} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}