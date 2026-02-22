CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" text NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cities" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" text NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "event_dates" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" text NOT NULL,
	"date_time" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "event_reviews" (
	"id" text PRIMARY KEY NOT NULL,
	"event_id" text NOT NULL,
	"user_name" text NOT NULL,
	"text" text NOT NULL,
	"date" text NOT NULL,
	"rating" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"image" text NOT NULL,
	"description" text NOT NULL,
	"search_count" integer NOT NULL,
	"venue" text NOT NULL,
	"street" text NOT NULL,
	"postal_code" text NOT NULL,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"country" text NOT NULL,
	"price_amount" numeric NOT NULL,
	"price_currency" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "event_dates" ADD CONSTRAINT "event_dates_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_reviews" ADD CONSTRAINT "event_reviews_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;