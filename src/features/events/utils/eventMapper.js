export default function eventMapper(event, relations) {
  const { citiesList, categoriesList, datesList, reviewsList } = relations;

  const eventObj = {
    id: event.id,
    name: event.name,
    image: event.image,
    description: event.description,
    searchCount: event.searchCount,
    category: categoriesList.find((c) => c.value === event.category)?.name ?? null,
    location: {
      city: citiesList.find((c) => c.value === event.city)?.name ?? null,
      state: event.state,
      country: event.country,
      street: event.street,
      postalCode: event.postalCode,
      venue: event.venue,
    },
    price: {
      amount: event.priceAmount,
      currency: event.priceCurrency,
    },
    dates: datesList.filter((d) => d.eventId === event.id).map((d) => d.dateTime),
    reviews: reviewsList.filter((r) => r.eventId === event.id),
  };

  return eventObj;
}
