import BlogItem from "../../components/BlogItem";

const BlogsPage = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!res.ok) {
    throw new Error("Failed To Fatch Blogs");
  }

  const blogs = await res.json();

  return (
    <section className="py-5 container">
      <div className=" p-6 mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
