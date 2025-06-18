import type { Project } from "./project";

export interface Experience extends Project {
    typeWork: "FREELANCE" | "EMPLOYMENT";
}