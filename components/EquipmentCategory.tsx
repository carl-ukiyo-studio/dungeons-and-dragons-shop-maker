import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ApiService from '../lib/ApiService';

const EquipmentCategory = () => {
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  const [category, setCategory] = React.useState<IEquipmentCategory>(undefined);

  const getEquipmentCategory = async () => {
    try {
      setLoading(true);
      const results = await ApiService.httpGet(`/api/${location.pathname}`);
      setCategory(results);
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getEquipmentCategory();
  }, []);

  return (
    <div className="container mx-auto bg-black rounded-xl shadow p-8 m-10">
      <h1 className="text-2xl text-red-800 font-bold mb-5">{category?.name}</h1>
      {loading ? (
        <p>loading categories ...</p>
      ) : (
        <div>
          <p className="text-l text-gray-500 mb-5">
            There are{' '}
            <span className="text-gray-400 font-bold">
              {category?.equipment.length}
            </span>{' '}
            equipment in this category!
          </p>
          <ul>
            {category?.equipment.map((result) => {
              return (
                <li className="text-sm text-gray-200 mb-1" key={result.name}>
                  <Link to={`/equipment/${result.index}`}>
                    <div className="text-gray-200 text-lg">{result.name}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EquipmentCategory;
