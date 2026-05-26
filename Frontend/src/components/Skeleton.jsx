export default function Skeleton({ width = "w-full", height = "h-4" }) {
  return (
    <div className={`${width} ${height} bg-slate-700 rounded animate-pulse`} />
  );
}
