 import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase/config";

import ProductHero from "../components/products/ProductHero";
import ProductFilter from "../components/products/ProductFilter";
import ProductSort from "../components/products/ProductSort";
import ProductList from "../components/products/ProductList";
import ProductClient from "../components/products/ProductClient"

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortType, setSortType] = useState("priceLow");
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    let cancelled = false;

    const normalize = (arr) =>
      arr.map((p, i) => {
        const brand = p.brand ?? p.carBrand ?? p.make ?? p.manufacturer ?? "";
        const model = p.model ?? p.modelName ?? p.name ?? "";
        const name = p.name ?? `${brand} ${model}`.trim();
        const price = Number(p.price ?? p.cost ?? p.amount ?? 0);
        const year = p.year ?? p.productionYear ?? p.manufactureYear ?? "";
        const description = p.description ?? "";

        const images = Array.isArray(p.images)
          ? p.images
          : [p.imageUrl ?? p.image ?? p.photo ?? ""].filter(Boolean);

        return {
          id: p.id ?? `item-${i}`,
          brand,
          model,
          name,
          price,
          year,
          description,
          images,
          ...p,
        };
      });

    const fetchProducts = async () => {
      try {
        setError("");
        setLoading(true);

        // ✅ Fetch from "cars" collection
        const snap = await getDocs(collection(db, "cars"));
        let items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));

        console.log("Fetched raw cars snapshot:", items);

        const normalized = normalize(items);
        console.log("Fetched products (normalized):", normalized);

        if (!cancelled) setProducts(normalized);
      } catch (err) {
        console.error("Error fetching products:", err);
        if (!cancelled) {
          setError("Failed to load products. Please try again later.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSortChange = (type) => setSortType(type);
  const handleFilterChange = (query) => setFilterQuery(query.toLowerCase());

  // Sorting
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortType) {
      case "priceLow":
        return a.price - b.price;
      case "priceHigh":
        return b.price - a.price;
      case "nameAsc":
        return (a.name || "").localeCompare(b.name || "");
      case "nameDesc":
        return (b.name || "").localeCompare(a.name || "");
      default:
        return 0;
    }
  });

  // Filtering across brand, model, name, year, description
  const q = filterQuery.trim().toLowerCase();
  const filteredProducts = sortedProducts.filter((p) => {
    const haystack = `${p.brand} ${p.model} ${p.name} ${p.year} ${p.description}`.toLowerCase();
    return haystack.includes(q);
  });

  return (
    <div>
      {/* ✅ Full-width, half-screen hero */}
      <div className="w-full h-[50vh]">
        <ProductHero />
      </div>

      {/* Filters + Sort */}
      <div className="relative z-[1] container mx-auto px-4 mt-6">
        <ProductFilter onFilter={handleFilterChange} />
        <ProductSort onSortChange={handleSortChange} />
      </div>

      {/* Product List */}
      <ProductList products={filteredProducts} loading={loading} error={error} />

      <ProductClient />
    </div>
  );
}

export default Product;














