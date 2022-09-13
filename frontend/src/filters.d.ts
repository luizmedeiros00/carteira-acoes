import FiltersInterface from "./filters/FiltersInterface";

export {}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: FiltersInterface;
  }
}
