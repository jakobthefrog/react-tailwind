const Sidebar = () => {
  return (
    <div className="fixed bottom-0 z-30 w-full">
      <div className="container relative flex h-full mx-auto">
        <div className="absolute bottom-0 items-center hidden mt-auto mr-auto text-white left-8 md:flex md:flex-col">
          <GitHubProfile marginBottom={"mb-4"} />
          <TwitterProfile marginBottom={"mb-4"} />
          <LinkedInProfile marginBottom={"mb-4"} />
          <div className="w-0.5 bg-white h-24 opacity-20 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
