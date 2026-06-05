/** Static project deliverables served from /public/downloads */
export const projectAssets = {
  colorSorterApk: "/downloads/color-sorter.apk",
  housingAnalysisPdf: "/downloads/housing-dataset-analysis.pdf",
  titanicAnalysisPdf: "/downloads/titanic-dataset-analysis.pdf",
  bikeSharingPdf: "/downloads/bike-sharing-dataset.pdf",
  californiaHousingPdf: "/downloads/california-housing-dataset.pdf",
} as const;

export function isDownloadAsset(url: string): boolean {
  return url.startsWith("/downloads/");
}

export function assetFilename(url: string): string | undefined {
  const name = url.split("/").pop();
  return name || undefined;
}
