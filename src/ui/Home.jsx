import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16 xl:mt-56">
      <h1 className="mb-4 text-center text-xl font-bold md:text-2xl ">
        The lazy pizza.
        <br />
        <span className="text-indigo-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
