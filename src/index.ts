import * as abaplint from "abaplint";
import {MemoryFile} from "abaplint/build/src/files";

function run() {

  const reg = new abaplint.Registry();
  const file = new MemoryFile("zfoobar.prog.abap", "REPORT zfoob.\n");
  reg.addFile(file);
  console.dir(reg.findIssues());

  for (const file of reg.getABAPFiles()) {
    const stru = file.getStructure();
    console.dir(stru);

    if (stru !== undefined) {
      console.dir(stru.findAllExpressions(abaplint.abap.Expressions.AndReturn));
    }
  }

  for (const obj of reg.getObjects()) {
    if (obj instanceof abaplint.Objects.Class) {
      console.dir(obj.getClassImplementations());
    }
  }

}

run();