import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/main/Main";
import { Game } from "./pages/game/Game";
import { Layout } from "./layout/Layout";
import { PrivacyPage } from "./pages/privacy/Privacy";
import { CoockiePrivacyPage } from "./pages/coockie/coockie";
import { TermsPage } from "./pages/terms/Terms";
import { BlogPage } from "./pages/blog/Blog";
import { useState } from "react";
import { Modal } from "./components/modal/Modal";
import { verifyService } from "./services/verify-service";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
}: ProtectedRouteProps) => {
  const isVerify = verifyService.getIsVerify();

  if (!isVerify) {
    return <Navigate to="/" replace />;
  }

  return children;
};
function App() {
  const [isModalOpen, setModalOpen] = useState<boolean>(true);

  const closeModal = (isVerify: boolean) => {
    setModalOpen(false);
    if (isVerify) {
      verifyService.verify();
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="/game"
            element={
              <ProtectedRoute>
                <Game />
              </ProtectedRoute>
            }
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cookie" element={<CoockiePrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
      <Modal isOpen={isModalOpen}>
        <h4>Please confirm that you are 18 years of age or older.</h4>
        <div className="buttons">
          <button className="no" onClick={() => closeModal(false)}>
            No
          </button>
          <button className="yes" onClick={() => closeModal(true)}>
            Yes
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;
