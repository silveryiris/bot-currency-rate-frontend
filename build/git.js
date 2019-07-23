import { execSync } from "child_process"

export const commitHash = execSync("git rev-parse HEAD").toString()
export const commitHashShort = execSync("git rev-parse --short HEAD").toString()
