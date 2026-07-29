CREATE TABLE "galeri" (
	"id" serial PRIMARY KEY NOT NULL,
	"src" text NOT NULL,
	"alt" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "kategori" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "kontak" (
	"id" serial PRIMARY KEY NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" varchar(255) NOT NULL,
	"app_url" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "layanan" (
	"id" serial PRIMARY KEY NOT NULL,
	"kategori_id" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"title_eng" varchar(255),
	"description" text NOT NULL,
	"description_eng" text,
	"image" text
);
--> statement-breakpoint
CREATE TABLE "produk" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"name_eng" varchar(255),
	"price" integer NOT NULL,
	"description" text NOT NULL,
	"description_eng" text,
	"image" text
);
--> statement-breakpoint
CREATE TABLE "social" (
	"id" serial PRIMARY KEY NOT NULL,
	"app" varchar(100) NOT NULL,
	"url" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" text NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "layanan" ADD CONSTRAINT "layanan_kategori_id_kategori_id_fk" FOREIGN KEY ("kategori_id") REFERENCES "public"."kategori"("id") ON DELETE cascade ON UPDATE no action;