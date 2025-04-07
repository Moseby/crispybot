import scripts from "@/components/data/scripts";
import Image from "next/image";
import { notFound } from "next/navigation"; 
import { YouTubeEmbed } from '@next/third-parties/google'

// Some magic to map the correct script ID clicked to the scripts content
export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
  const id = (await params).id
  const script = scripts.find((p) => p.id === id);

  if (!script) {
    notFound(); // 404
  }

// Script page content
  return (
    <div className="flex justify-center items-center p-8">
      <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">{script.title}</h1>
      <Image
        src={script.thumbnail}
        alt={script.title}
        width={600}
        height={400}
        className="w-full max-w-lg rounded-md pb-2"
      />
      {/* List of Advantages */}
      {script.requirements && script.requirements.length > 0 && (
          <div className="py-2 my-2 border border-gray-700 rounded-lg">
            <h2 className="text-md font-semibold">Requirements:</h2>
            <ul className="list-disc list-inside text-gray-500 mt-2">
              {script.requirements.map((requriements, index) => (
                <li key={index}>{requriements}</li>
              ))}
            </ul>
          </div>
        )}
     
      
      <p className="text-md mt-6 mx-auto text-gray-300 max-w-md">{script.description}</p>
      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <ul className=" list-inside mt-2">
        {script.instructions.map((step, index) => (
          <li key={index} className="mb-1">
            <strong>Step {index + 1}:</strong> {step}
          </li>
        ))}
      </ul>
      {script.video && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Video showcase</h2>
            <div className="mt-2">
              <YouTubeEmbed videoid={script.video} height={400}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}