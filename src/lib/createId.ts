// id生成器
let inId: number = Number(window.localStorage.getItem("inIdMax_react")) || 4;
let outId: number = Number(window.localStorage.getItem("outIdMax_react")) || 7;

function createId(type: string | undefined) {
  if (type === "out") {
    outId++;
    window.localStorage.setItem("outIdMax_react", outId.toString());
    return outId as number;
  } else if (type === "in") {
    inId++;
    window.localStorage.setItem("inIdMax_react", inId.toString());
    return inId as number;
  }
}

export default createId;
