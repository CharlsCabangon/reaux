export function applyCategoryFilter(list, category) {
  if (!category || category === 'all') return list;
  const cat = category.toString().toLowerCase();
  return list.filter((p) => String(p.category).toLowerCase() === cat);
}

export function applyCollectionFilter(list, collection) {
  if (!collection || collection == 'all') return list;
  const coll = collection.toString().toLowerCase();
  return list.filter((p) => String(p.collection).toLowerCase() === coll);
}
