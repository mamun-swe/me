import { Home } from "pages/home";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="app bg-themedark min-h-screen">
      <Home />
    </div>
  );
};
