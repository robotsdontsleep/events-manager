ALTER TABLE "event_dates" RENAME TO "dates";--> statement-breakpoint
ALTER TABLE "event_reviews" RENAME TO "reviews";--> statement-breakpoint
ALTER TABLE "dates" RENAME COLUMN "event_id" TO "eventId";--> statement-breakpoint
ALTER TABLE "reviews" RENAME COLUMN "event_id" TO "eventId";--> statement-breakpoint
ALTER TABLE "dates" DROP CONSTRAINT "event_dates_event_id_events_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "event_reviews_event_id_events_id_fk";
--> statement-breakpoint
ALTER TABLE "dates" ADD CONSTRAINT "dates_eventId_events_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_eventId_events_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;