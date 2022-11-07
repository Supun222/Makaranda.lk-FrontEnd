import Reports from "../Report";

function Dashboard() {
  return (
    <div className="mx-auto flex flex-col justify-between h-full w-full">
      <Reports />
      <div className="p-3 bg-white rounded shadow h-full mt-5">
        <h1>graph</h1>
      </div>
    </div>
  );
}

export default Dashboard;
