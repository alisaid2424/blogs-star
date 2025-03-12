import Link from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <article className="flex flex-col rounded-md overflow-hidden shadow-lg">
      <Link rel="noopener noreferrer" href="#" aria-label={blog.name}>
        <iframe
          src={`https://maps.google.com/maps?q=${blog.address.geo.lat},${blog.address.geo.lng}&t=&z=4&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="200px"
        />
      </Link>
      <div className="flex flex-col flex-1 px-3 py-5">
        <Link rel="noopener noreferrer" href="#" aria-label={blog.name}></Link>
        <Link
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline "
        >
          {blog.username}
        </Link>
        <Link href={`/blogs/${blog.id}`}>
          <h3 className="flex-1 my-2 text-lg font-semibold text-violet-600 line-clamp-1 ">
            {blog.name}
          </h3>
        </Link>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
          <span>{blog.address.city}</span>
          <span>{blog.website}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
