import Header from "./Header/Header";
import Nav from "./Navigation/Nav";

export default function Home() {

  return (
    <>
      <Header />
      <div className="h-screen">
        <Nav />
      </div>
    </>
  );
}
