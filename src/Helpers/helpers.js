import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndexofPage = (pageNumber - 1) * pageSize;
  console.log(startIndexofPage);
  //   return items;
  return _(items)
    .slice(startIndexofPage)
    .take(pageSize)
    .value();
}
