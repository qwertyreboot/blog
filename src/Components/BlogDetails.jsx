const BlogDetails = ({ title, image, description, intro }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold m-2">{title}</h2>
      <div className="flex justify-center mt-4">
        <img
          src={image}
          alt="Blog Image"
          className="rounded-lg shadow-lg object-center object-cover"
          height="600"
          width="600"
        />
      </div>
      <p className="text-gray-600 text-center mt-4">{intro}</p>

      <p className="text-gray-600 text-sm mt-6">{description}</p>
    </div>
  );
};

export default BlogDetails;
