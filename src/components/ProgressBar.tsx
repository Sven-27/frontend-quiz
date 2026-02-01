export type ProgressBarProps = {
  progress: number;
  progressText?: string;
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  // Make sure our value stays between 0 and 100.
  const _progress = Math.min(Math.max(0, progress), 100);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-white dark:bg-blue-850 h-[1rem] rounded-xl p-1 flex items-center">
        <div
          className="bg-purple-600 h-full transition-all duration-250 rounded-xl"
          style={{ width: `${_progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;