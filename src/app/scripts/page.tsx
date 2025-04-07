import myscripts from "../../components/data/scripts";
import Link from "next/link";

// Chip color tags
const categoryColors: Record<string, string> = {
  Manual: "bg-blue-500 text-white",
  Automatic: "bg-green-500 text-white",
  Default: "bg-gray-300 text-black",
};

// Scripts catalog
export default function scripts() {
  return (
    <div className="container mx-auto pt-12 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {myscripts.map((script) => (
          <Link key={script.id} href={`/scripts/${script.id}`}>
            <div className="cursor-pointer">
              <img
                src={script.thumbnail}
                alt={script.title}
                className="w-full h-48 object-cover "
              />
              <h2 className="mt-2 text-sm font-semibold">{script.title}</h2>
              <div className="flex gap-2 my-1"> 
                {script.categories.map((category) => (
                  <span
                    key={category}
                    className={`px-2 py-1 text-[0.65rem] font-small rounded-full ${
                      categoryColors[category] || categoryColors.Default
                    }`}
                  >
                    • {category}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}