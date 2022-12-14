import MainNavigation from "./MainNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className="w-11/12 max-w-2xl my-12 mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
