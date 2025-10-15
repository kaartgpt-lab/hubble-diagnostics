import React from "react";
import { useNavigate } from "react-router-dom";
import blogs from "../data/blogs";

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-16 w-full">
      <div className="px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-3">
          Latest Blogs
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Stay informed with the latest articles, insights, and updates from our
          experts.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {blogs.map((b) => (
          <div
            key={b.slug}
            onClick={() => navigate(`/blog/${b.slug}`)}
            className="cursor-pointer group"
          >
            {/* Blog Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Blog Content */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold text-blue-950 mb-2 group-hover:text-blue-700 transition">
                {b.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3">
                {b.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
