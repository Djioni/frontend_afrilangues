import { combineReducers, createStore } from "redux";
import { LessonReducer } from "./components/LearningDashboard/services/reducers/LessonReduces";
import { GetLanguageReducer } from "./components/Languages/services/reducers/LanguageReducer";
import { AuthReducer } from "./auth/services/reducers/AuthReducers";
import { LessonQuizReducer } from "./components/Quizzes/services/reducers/LessonQuizAReducer";
import { currentLessonReducer } from "./components/LearningDashboard/services/reducers/CurrentLessonReducer";
import { GetQuestionReducer } from "./components/LearningDashboard/services/reducers/GetQuestionsReducer";
import { QuizValidationReducer } from "./components/LearningDashboard/services/reducers/QuizValidationReducer";
import { CurrentQuizReducer } from "./components/LearningDashboard/services/reducers/CurrentQuizReducer";
import { QuizDataReducer } from "./components/LearningDashboard/services/reducers/QuizDataReducer";
import { CurrentPathReducer } from "./components/LearningDashboard/services/reducers/CurrentPathReducer";
import { ThemeReducer } from "./components/services/reducers/ThemeReducer";
import { MemoryGameDataReducer } from "./components/Quizzes/components/MemoryGame/services/reducers/MemoryGameReducer";
import { GetLessonReducer } from "./components/LearningDashboard/services/reducers/GetLessonReduer";
import { GetLessonSectionReducer } from "./components/LearningDashboard/services/reducers/GetLessonSectionReducer";
import { GetExerciseReducer } from "./components/LearningDashboard/services/reducers/GetExerciseReducer";
const rootReducer = combineReducers({
  auth: AuthReducer,
  lessons: LessonReducer,
  language: GetLanguageReducer,
  lessonName: LessonQuizReducer,
  currentLesson: currentLessonReducer,
  questions: GetQuestionReducer,
  quizValidate: QuizValidationReducer,
  currentQuiz: CurrentQuizReducer,
  quizData: QuizDataReducer,
  currentPath: CurrentPathReducer,
  currentTheme: ThemeReducer,
  cardArray: MemoryGameDataReducer,
  lesson: GetLessonReducer,
  lessonsection: GetLessonSectionReducer,
  exercises: GetExerciseReducer,

  // Add more reducers here if needed
});

export const store = createStore(rootReducer);
