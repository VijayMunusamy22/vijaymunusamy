import { Fragment } from "react";
import ChipData from "../../shared/Chip";

const SkillList = (props: any) => {
  const { skillList = [] } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 15,
        flexWrap: "wrap",
        padding: 12,
      }}
    >
      {skillList.map((eachSkillSet: any, index: number) => (
        <Fragment key={+index}>
          <ChipData {...eachSkillSet} />
        </Fragment>
      ))}
    </div>
  );
};

export default SkillList;
