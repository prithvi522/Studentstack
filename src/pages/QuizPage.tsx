import { useMemo, useState } from "react";
import { CheckCircle2, ChevronDown, RotateCcw, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import { quizQuestions } from "@/data";

export default function QuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submittedSections, setSubmittedSections] = useState<Record<string, boolean>>({});
  const [selectedCourse, setSelectedCourse] = useState("All topics");
  const [showCourseMenu, setShowCourseMenu] = useState(false);

  const quizSections = useMemo(() => {
    const sections: { course: string; questions: Array<(typeof quizQuestions)[number] & { originalIndex: number }> }[] = [];

    quizQuestions.forEach((question, index) => {
      const lastSection = sections[sections.length - 1];
      if (!lastSection || lastSection.course !== question.course) {
        sections.push({ course: question.course, questions: [{ ...question, originalIndex: index }] });
        return;
      }

      lastSection.questions.push({ ...question, originalIndex: index });
    });

    return sections;
  }, []);

  const answeredCount = Object.keys(selectedAnswers).length;
  const courseOptions = ["All topics", ...quizSections.map((section) => section.course)];
  const visibleSections =
    selectedCourse === "All topics"
      ? quizSections
      : quizSections.filter((section) => section.course === selectedCourse);
  const submittedSectionCount = Object.keys(submittedSections).length;
  const totalSubmittedQuestions = quizSections.reduce(
    (total, section) => total + (submittedSections[section.course] ? section.questions.length : 0),
    0,
  );
  const submittedScore = quizSections.reduce((total, section) => {
    if (!submittedSections[section.course]) return total;

    return (
      total +
      section.questions.reduce(
        (sectionTotal, question) =>
          sectionTotal + (selectedAnswers[question.originalIndex] === question.answer ? 1 : 0),
        0,
      )
    );
  }, 0);

  const resetQuiz = () => {
    setSelectedAnswers({});
    setSubmittedSections({});
  };

  return (
    <div className="page-shell min-h-screen text-slate-900 dark:text-white">
      <Navbar />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <section className="hero-panel rounded-[34px] p-8 lg:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="hero-badge">Learner assessment</div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                Practice quiz across all courses
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Use this test to quickly check how much you remember from HTML, CSS, JavaScript, Python, databases, and the rest of the learning paths.
              </p>
            </div>

            <div className="feature-tile max-w-sm">
              <Trophy className="h-5 w-5 text-amber-500" />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Progress snapshot</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {submittedSectionCount > 0
                    ? `You scored ${submittedScore} out of ${totalSubmittedQuestions} submitted questions.`
                    : `${answeredCount} of ${quizQuestions.length} questions answered.`}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Select quiz language</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Pick one language/topic like the terminal selector, or keep all topics visible.
              </p>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCourseMenu((prev) => !prev)}
                className="flex items-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-950 shadow-sm backdrop-blur transition hover:border-emerald-400 hover:bg-emerald-150 dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-100 dark:hover:border-emerald-400/50 dark:hover:bg-emerald-500/20"
              >
                {selectedCourse}
                <ChevronDown className="h-4 w-4" />
              </button>

              {showCourseMenu && (
                <div className="absolute right-0 top-full z-20 mt-2 max-h-72 min-w-[220px] overflow-auto rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/95">
                  {courseOptions.map((course) => (
                    <button
                      key={course}
                      type="button"
                      onClick={() => {
                        setSelectedCourse(course);
                        setShowCourseMenu(false);
                      }}
                      className={`block w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                        selectedCourse === course
                          ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-950"
                          : "border-transparent bg-transparent text-slate-800 hover:border-slate-200 hover:bg-slate-100 dark:text-slate-200 dark:hover:border-white/10 dark:hover:bg-white/5"
                      }`}
                    >
                      {course}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {submittedSectionCount > 0 && (
            <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="feature-tile">
                <Trophy className="h-5 w-5 text-emerald-500" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Correct answers</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {submittedScore} correct out of {totalSubmittedQuestions} submitted questions.
                  </p>
                </div>
              </div>

              {quizSections.map((section) => {
                if (!submittedSections[section.course]) return null;

                const correct = section.questions.reduce(
                  (total, question) => total + (selectedAnswers[question.originalIndex] === question.answer ? 1 : 0),
                  0,
                );

                return (
                  <div key={section.course} className="feature-tile">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{section.course}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {correct} correct out of {section.questions.length}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="grid gap-8">
            {visibleSections.map((section) => (
              <div key={section.course} className="course-select-card">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="mb-3 inline-flex rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {section.course} section
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                      {section.course}: {section.questions.length} questions
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      This block stays grouped by language/topic so learners can practice one area at a time.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white/75 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    Questions {section.questions[0].originalIndex + 1} to {section.questions[section.questions.length - 1].originalIndex + 1}
                  </div>
                </div>

                <div className="grid gap-5">
                  {section.questions.map((question) => {
                    const isSectionSubmitted = Boolean(submittedSections[section.course]);
                    const selected = selectedAnswers[question.originalIndex];
                    const isCorrect = isSectionSubmitted && selected === question.answer;
                    const isWrong = isSectionSubmitted && selected && selected !== question.answer;

                    return (
                      <div key={`${question.course}-${question.originalIndex}`} className="rounded-[26px] border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                          {question.originalIndex + 1}. {question.prompt}
                        </h3>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                          {question.options.map((option) => {
                            const isAnswer = isSectionSubmitted && option === question.answer;
                            const isChosenWrong = isSectionSubmitted && selected === option && option !== question.answer;

                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setSelectedAnswers((prev) => ({ ...prev, [question.originalIndex]: option }))}
                                disabled={isSectionSubmitted}
                                className={`rounded-2xl border px-4 py-4 text-left font-medium transition ${
                                  selected === option
                                    ? "border-emerald-400 bg-emerald-500/10 text-slate-950 dark:text-white"
                                    : "border-slate-200 bg-white/75 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                                } ${isAnswer ? "border-emerald-500 bg-emerald-500/15" : ""} ${isChosenWrong ? "border-rose-400 bg-rose-500/10" : ""}`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>

                        {isSectionSubmitted && (
                          <div className={`mt-5 rounded-2xl border px-4 py-4 text-sm leading-7 ${isCorrect ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200" : isWrong ? "border-rose-400/40 bg-rose-500/10 text-rose-900 dark:text-rose-200" : "border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"}`}>
                            <div className="mb-1 flex items-center gap-2 font-semibold">
                              <CheckCircle2 className="h-4 w-4" />
                              Correct answer: {question.answer}
                            </div>
                            <div>{question.explanation}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {!submittedSections[section.course] ? (
                    <button
                      type="button"
                      onClick={() =>
                        setSubmittedSections((prev) => ({
                          ...prev,
                          [section.course]: true,
                        }))
                      }
                      className="rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:translate-y-[-1px] dark:bg-white dark:text-slate-950"
                    >
                      Submit {section.course} Quiz
                    </button>
                  ) : (
                    <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                      Result:{" "}
                      {section.questions.reduce(
                        (total, question) =>
                          total + (selectedAnswers[question.originalIndex] === question.answer ? 1 : 0),
                        0,
                      )}{" "}
                      / {section.questions.length} correct
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {submittedSectionCount > 0 && (
              <button
                type="button"
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:translate-y-[-1px] dark:bg-white dark:text-slate-950"
              >
                <RotateCcw className="h-4 w-4" />
                Reset All Quiz Sections
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
