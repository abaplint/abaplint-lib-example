import * as abaplint from "abaplint";
import { MemoryFile } from "abaplint/build/src/files";

function run() {

  const reg = new abaplint.Registry();
  const file = new MemoryFile("zfoobar.prog.abap", "REPORT zfoob.\n");
  reg.addFile(file);
  console.dir(reg.findIssues());

  for (const file of reg.getABAPFiles()) {
    console.dir(file.getStructure());
  }
/*
  for (const obj of reg.getObjects()) {
    if (obj instanceof abaplint.
  }
*/
}

run();