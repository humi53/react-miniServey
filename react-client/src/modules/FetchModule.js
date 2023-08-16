// 함수 선언문에 export 를 붙이면 개별 함수가 export 된다
// export {hello} 한 것과 같다
export const hello = async () => {
  // proxy 설정된 URL 과 합성하여 http://localhost:3000/bbs 로 요청
  const res = await fetch("/bbs");
  const json = await res.json();
  return json.title;
};

export const bbsInsert = async (formData) => {
  const URL = "/bbs/insert";
  const fetchData = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(URL, fetchData);
};

export const surveyTitleInsrt = async (jsonData) => {
  const URL = "/survey/title/insert";
  const fetchData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  };
  const response = await fetch(URL, fetchData);
};

export const surveyTitleList = async () => {
  try {
    const response = await fetch("/survey/title/list");
    const subveyList = await response.json();
    return subveyList;
  } catch (error) {
    return [];
  }
};

export const surveyTitleDelete = async (jsonData) => {
  const URL = "/survey/title/delete";
  const fetchData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  };
  const response = await fetch(URL, fetchData);
  return response.ok;
};

export const questionList = async (id) => {
  try {
    console.log(id);
    const response = await fetch(`/question/list/${id}`);
    const questList = await response.json();
    console.log(questList);
    return questList;
  } catch (error) {
    return {};
  }
};

export const questionInsert = async (jsonData) => {
  const URL = "/question/insert";
  const fetchData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  };
  console.log(fetchData);
  const response = await fetch(URL, fetchData);
};
