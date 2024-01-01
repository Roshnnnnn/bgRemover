export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center py-5">
        <div className="max-w-2xl text-center">
          <div className="flex justify-center mb-5">
            <img
              className="w-16"
              src="https://cdn-icons-png.flaticon.com/128/266/266286.png"
              alt="img"
            />
          </div>

          <h1 className="text-white text-3xl lg:text-6xl font-medium mb-3">
            Background Removal Tool
          </h1>

          <p className="text-white text-lg lg:text-2xl font-light mb-3">
            Fast, simple, and great performance.
          </p>
        </div>
      </div>
    </div>
  );
}
