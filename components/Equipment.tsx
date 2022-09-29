import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ApiService from '../lib/ApiService';

const Equipment = () => {
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  const [equipment, setEquipment] = React.useState<any>(undefined);

  const getEquipmentCategory = async () => {
    try {
      setLoading(true);
      const results = await ApiService.httpGet(`/api/${location.pathname}`);
      console.log(location);
      console.log(JSON.stringify(results));
      setEquipment(results);
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
      <h1 className="text-2xl text-red-800 font-bold mb-5">
        {equipment?.name}
      </h1>
      {loading ? (
        <p>loading equipment ...</p>
      ) : (
        <div>
          <Link
            to={`/equipment-categories/${equipment?.equipment_category.index}`}
          >
            <p className="text-l text-gray-500 mb-5">
              Category:{' '}
              <span className="text-gray-300 ml-1 font-bold">
                {equipment?.equipment_category.name}
              </span>
            </p>
          </Link>
          ;
          {equipment?.desc.map((desc) => {
            <p className="text-l text-gray-500 mb-5">{desc}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Equipment;
