import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import TerminalPage from "./pages/TerminalPage.tsx";
import CoursesPage from "./pages/CoursesPage.tsx";
import CoursePage from "./pages/CoursePage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/terminal" element={<TerminalPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
