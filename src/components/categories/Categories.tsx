import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CategoryProps } from "../../types/Types";

const Categories = () => {
  const [sections, setSections] = useState<CategoryProps[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Base_url}/utils/get_product_sections`)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          setSections(res.data.product_sections);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="categories_section">
          {sections &&
            sections.map((section: CategoryProps) => {
              return (
                <div className="category_item" key={section.id}>
                  <Link to="/shop">
                    <h5 className="paginate_text">
                      <Link
                        to="/shop"
                        state={{ data: section.product_section_name }}>
                        {section.product_section_name}
                      </Link>
                    </h5>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
