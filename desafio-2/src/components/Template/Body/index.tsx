import "../template.css";

interface BodyProps {
  children: any
}

function Body(props: BodyProps) {

  return (
    <div className="templateBody">
      {props.children}
    </div>
  );
}

export default Body;
