export default function DynamicPage({ params }) {
  return (
    <div className="flex justify-center items-center h-screen text-2xl text-blue-500">
      Page: {params.id}
    </div>
  );
}
