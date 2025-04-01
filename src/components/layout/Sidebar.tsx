const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black h-[calc(100vh-4rem)] fixed left-0 top-16">
      <div className="p-4 space-y-8">
        <div className="border border-gray-200 dark:border-gray-800 p-4">
          <h3 className="text-sm font-medium mb-2">NOW PLAYING</h3>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            No track selected
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">PLAYLISTS</h3>
          <ul className="space-y-2">
            <li className="text-xs text-gray-500 dark:text-gray-400 hover:text-accent cursor-pointer transition-colors">
              MY FAVORITES
            </li>
            <li className="text-xs text-gray-500 dark:text-gray-400 hover:text-accent cursor-pointer transition-colors">
              RECENTLY PLAYED
            </li>
            <li className="text-xs text-gray-500 dark:text-gray-400 hover:text-accent cursor-pointer transition-colors">
              DISCOVER WEEKLY
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;