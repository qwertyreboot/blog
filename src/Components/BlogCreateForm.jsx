import { useState } from "react";

const BlogCreateForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <form className="flex flex-col items-center gap-4">
      <h3 className="p-4 text-3xl font-semibold text-gray-900">
        Create a new blog...
      </h3>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        name="title"
        className="border border-gray-700 p-2 rounded shadow-sm w-4/5"
        placeholder="Enter blog title"
      />
      <textarea
        value={intro}
        onChange={(e) => setIntro(e.target.value)}
        name="intro"
        className="border border-gray-700 p-2 rounded shadow-sm w-4/5"
        placeholder="Small Intro before long description"
      ></textarea>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="desc"
        className="border border-gray-700 p-2 rounded shadow-sm w-4/5"
        placeholder="Write your story"
      ></textarea>
      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        type="url"
        name="image"
        className="border border-gray-700 p-2 rounded shadow-sm w-4/5"
        placeholder="Add a image url"
      />

      <div className="flex items-center justify-end gap-4 w-4/5">
        <button
          onClick={onCancel}
          className="py-2 px-4 text-white bg-gray-600 rounded shadow"
        >
          Cancel
        </button>
        <button
          onClick={() =>
            onSubmit({
              title,
              intro,
              image: imageUrl,
              description,
              date: new Date(),
            })
          }
          type="button"
          className="py-2 px-4 text-white bg-green-600 rounded shadow"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BlogCreateForm;
