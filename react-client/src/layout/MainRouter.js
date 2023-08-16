import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BBsMain from "../comps/BBsMain";
import App from "../App";
import MyPage from "../comps/MyPage";
import Manage from "../comps/Manage";
import QuestList from "../comps/QuestList";
import SurveyList from "../comps/SurveyList";
import SurveyView from "../comps/SurveyView";

// Nav Provider 컴포넌트
// Nav 의 모든 설정(IA) 를 한곳에서 설정하는 컴포넌트
const MainRouter = () => {
  // nav 에서 Menu 를 클릭했을때 보여질 화면들 설정하기
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <h1>나는 홈이다</h1> },
        { path: "/notice", element: <h1>나는 공지사항</h1> },
        { path: "/manage", element: <SurveyList /> },
        { path: "/manage/detail/:id", element: <QuestList /> },
        { path: "/survey", element: <SurveyView /> },
        { path: "/survey/view/:id", element: <h1>설문화면</h1> },
        {
          path: "/login",
          element: <h1>나는 로그인 화면</h1>,
          errorElement: <h1>오류가 발생했어</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default MainRouter;
