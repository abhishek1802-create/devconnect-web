const Heading = (props) => {
  return (
    <h2 className="pb-2 text-2xl font-semibold tracking-tight text-gray-900 border-b border-gray-200 w-full">
      {props.headingName}
    </h2>
  );
};

export default Heading;
