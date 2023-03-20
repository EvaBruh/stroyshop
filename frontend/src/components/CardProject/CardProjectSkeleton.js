import {Skeleton} from "antd";

const CardProjectSkeleton = () => {

  return (
    <div className="section-project__project-item">
      <Skeleton.Image active style={{width: "100%", height: "100%"}}/>
    </div>
  );
}

export default CardProjectSkeleton;