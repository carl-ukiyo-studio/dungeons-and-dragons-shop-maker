interface IEquipmentCategoriesResultItem {
  index: string;
  name: string;
  url: string;
}

interface IEquipmentCategoriesResult {
  count: number;
  results: IEquipmentCategoriesResultItem[];
}
