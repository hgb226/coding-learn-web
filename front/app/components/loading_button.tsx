import CircularProgress from "@mui/material/CircularProgress";

interface ILoadingButtonProvider {
  children: React.ReactNode;
  isLoading: boolean;
  progressSize?: number | string;
  className?: string;
}

const LoadingButtonProvider = ({
  children,
  isLoading,
  progressSize = 20,
  className = "rounded-lg",
}: ILoadingButtonProvider) => {
  return (
    <div className={`relative ${className} overflow-hidden`}>
      {isLoading && (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-gray-300/70">
          <CircularProgress size={progressSize} />
        </div>
      )}
      {children}
    </div>
  );
};

export default LoadingButtonProvider;
