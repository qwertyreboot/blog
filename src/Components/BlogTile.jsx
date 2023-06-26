import Button from "./Button";

const BlogTile = ({ date, title, intro, onDetails }) => {
  return (
    <div className="w-full md:w-[45%]">
      <p className="text-gray-500 text-sm">{new Date(date).toISOString()}</p>
      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-gray-500">{intro}</p>
      <Button
        onClick={onDetails}
        text="Read full story"
        color="blue"
        type="a"
      />
    </div>
  );
};

export default BlogTile;
