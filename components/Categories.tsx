import * as React from 'react';
import ApiService from '../lib/ApiService';

const Categories = () => {
  const [loading, setLoading] = React.useState(false);
  const [categories, setCategories] =
    React.useState<IEquipmentCategoriesResult>(undefined);

  const getEquipmentCategories = async () => {
    try {
      setLoading(true);
      const results = await ApiService.httpGet('/equipment-categories/');
      setCategories(results);
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getEquipmentCategories();
  }, []);

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-2xl text-gray-700 font-bold mb-5">
        Equipment Categories
      </h1>
      {loading ? (
        <p>loading categories ...</p>
      ) : (
        <div>
          <p className="text-l text-sky-500 mb-5">
            There are {categories?.count} categories!
          </p>
          <ul>
            {categories?.results.map((result) => {
              return (
                <li className="text-sm" key={result.name}>
                  {' '}
                  {result.name}{' '}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;
