import BlogCreateForm from "./Components/BlogCreateForm";
import BlogDetails from "./Components/BlogDetails";
import BlogTile from "./Components/BlogTile";
import Button from "./Components/Button";
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      intro:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta.",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta.",
      date: new Date(),
      image:
        "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80",
    },

    {
      id: 2,
      title: "Changed Title",
      intro:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta.",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta.",
      date: new Date(),
      image: "",
    },

    {
      id: 3,
      title: "Blog 3",
      intro:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta.",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sedexercitationem placeat consectetur nulla deserunt vel. Iusto corruptidicta.",
      date: new Date(),
      image:
        "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80",
    },
  ]);
  const [showBlogCreateForm, setShowBlogCreateForm] = useState(false);
  const [activeBlogIndex, setActiveBlogIndex] = useState(-1);

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold uppercase">blog</h1>
      <div className="mt-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <h5 className="text-gray-500">Enjoy reading blogs? Go and Enjoy...</h5>
        <Button
          text="Create Blog"
          onClick={() => setShowBlogCreateForm(true)}
        />
      </div>
      <hr className="mt-2" />

      <Modal
        show={showBlogCreateForm}
        onClose={() => setShowBlogCreateForm(false)}
      >
        <BlogCreateForm
          onCancel={() => setShowBlogCreateForm(false)}
          onSubmit={(blog) => setBlogs([...blogs, blog])}
        />
      </Modal>

      <Modal
        show={activeBlogIndex !== -1}
        onClose={() => setActiveBlogIndex(-1)}
      >
        <BlogDetails
          title={blogs[activeBlogIndex]?.title}
          image={blogs[activeBlogIndex]?.image}
          intro={blogs[activeBlogIndex]?.intro}
          description={blogs[activeBlogIndex]?.description}
        />
      </Modal>

      <div className="mt-10 flex flex-wrap gap-10 items-center justify-between">
        {blogs.map((blog, index) => (
          <BlogTile
            key={index}
            title={blog.title}
            date={blog.date}
            intro={blog.intro}
            onDetails={() => setActiveBlogIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
