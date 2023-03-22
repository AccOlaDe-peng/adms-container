import { IconType } from "./Icons";

type BreadcrumbItem = string | { name: string; path?: string; icon?: IconType };

export type BreadcrumbType = Array<BreadcrumbItem>;
