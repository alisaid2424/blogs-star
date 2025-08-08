import { notFound } from "next/navigation";

const BlogItemPage = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  if (!res.ok) notFound();

  const blog = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl text-violet-600 font-semibold text-center mb-7 uppercase italic">
        Blog Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section (Map ) */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Geographical Location</h2>
          <div className="mb-4">
            <p>
              <strong>Latitude:</strong> {blog.address.geo.lat}
            </p>
            <p>
              <strong>Longitude:</strong> {blog.address.geo.lng}
            </p>
          </div>

          <div className="h-96 bg-gray-300 rounded-md">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label={blog.name}
              className=" object-cover"
            >
              <iframe
                src={`https://maps.google.com/maps?q=${blog.address.geo.lat},${blog.address.geo.lng}&t=&z=4&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
              />
            </a>
          </div>
        </div>

        {/* Right Section (Blog Details) */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">{blog.name}</h2>
          <p className="mb-2">
            <strong>Username:</strong> {blog.username}
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a href={`mailto:${blog.email}`} className="text-blue-600">
              {blog.email}
            </a>
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Address</h3>
          <p>
            <strong>Street:</strong> {blog.address.street}
          </p>
          <p>
            <strong>Suite:</strong> {blog.address.suite}
          </p>
          <p>
            <strong>City:</strong> {blog.address.city}
          </p>
          <p>
            <strong>Zipcode:</strong> {blog.address.zipcode}
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            Contact Information
          </h3>
          <p>
            <strong>Phone:</strong> {blog.phone}
          </p>
          <p>
            <strong>Website:</strong>
            <a
              href={`http://${blog.website}`}
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              {blog.website}
            </a>
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Company</h3>
          <p>
            <strong>Company Name:</strong> {blog.company.name}
          </p>
          <p>
            <strong>Catchphrase:</strong> {blog.company.catchPhrase}
          </p>
          <p>
            <strong>Business:</strong> {blog.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItemPage;
