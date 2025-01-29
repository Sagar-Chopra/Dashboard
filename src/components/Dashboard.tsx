const Dashboard = ({ children }: any) => {
  return (
    <section className="flex flex-row gap-2 md:gap-12 bg-gray-100 relative">
      {children}
    </section>
  );
};

export default Dashboard;
