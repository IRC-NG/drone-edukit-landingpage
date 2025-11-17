
import { roadmapItems } from "@/data/roadmap";

export const TimelineGraph = () => {
    const years = ["2025", "2026", "2027"];
    const yearColors = {
      "2025": "from-blue-500 to-cyan-500",
      "2026": "from-purple-500 to-pink-500",
      "2027": "from-green-500 to-emerald-500",
    };

    return (
      <div className="mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Timeline Visual 2025-2027</h3>

          {/* Year Headers */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {years.map((year) => (
              <div key={year} className="text-center">
                <div
                  className={`bg-gradient-to-r ${yearColors[year]} text-white rounded-lg py-3 px-6 font-bold text-lg`}
                >
                  {year}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Visualization */}
          <div className="space-y-4">
            {years.map((year) => {
              const yearItems = roadmapItems.filter((item) => item.year === year);
              const completedItems = yearItems.filter(
                (item) => item.status === "Selesai" || item.status === "Berlangsung",
              ).length;
              const progressPercentage = (completedItems / yearItems.length) * 100;

              return (
                <div key={year} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">{year}</span>
                    <span className="text-sm text-gray-500">{yearItems.length} milestone</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`bg-gradient-to-r ${yearColors[year]} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                      {Math.round(progressPercentage)}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Milestone Counter */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {years.map((year) => {
              const yearItems = roadmapItems.filter((item) => item.year === year);
              return (
                <div key={year} className="space-y-2">
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${yearColors[year]} bg-clip-text text-transparent`}
                  >
                    {yearItems.length}
                  </div>
                  <div className="text-sm text-gray-600">Milestone {year}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
