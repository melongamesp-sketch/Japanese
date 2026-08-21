/* =========================================================
   ことばの旅
   Japanese Learning Platform
   Prototype v1
========================================================= */


/* =========================================================
   LESSON DATA
========================================================= */

const lessonData = [

  {
    title: "日本に到着",

    text:
      "Alexさんは、初めて日本に来ました。" +
      "飛行機を降りて、空港に着きました。" +
      "Alexさんは少し緊張しています。" +
      "でも、日本でいろいろなことをしたいと思っています。",

    english:
      "Alex has come to Japan for the first time. " +
      "After getting off the airplane, Alex arrives at the airport. " +
      "Alex is a little nervous, but wants to do many things in Japan.",

    vietnamese:
      "Alex lần đầu tiên đến Nhật Bản. " +
      "Sau khi xuống máy bay, Alex đến sân bay. " +
      "Alex hơi hồi hộp, nhưng muốn làm nhiều điều ở Nhật Bản.",

    korean:
      "Alex는 처음으로 일본에 왔습니다. " +
      "비행기에서 내린 후 공항에 도착했습니다. " +
      "Alex는 조금 긴장했지만 일본에서 여러 가지 일을 해 보고 싶어 합니다.",

    dialogue: [
      ["Alex", "こんにちは。すみません。"],
      ["Staff", "こんにちは。どうしましたか？"],
      ["Alex", "駅はどこですか？"]
    ],

    thinking:
      "あなたが初めて日本に来たら、どんな気持ちになると思いますか？",

    writing:
      "「私は〜です」「私は〜したいです」を使って、" +
      "自分について2〜3文書いてみましょう。"
  },


  {
    title: "駅を探す",

    text:
      "Alexさんは、空港の中で駅を探します。" +
      "案内板を見つけました。" +
      "「電車」という漢字があります。" +
      "Alexさんは「電車」という言葉を覚えました。",

    english:
      "Alex looks for the station inside the airport. " +
      "Alex finds a sign with the kanji 電車. " +
      "Alex learns the word 電車, meaning train.",

    vietnamese:
      "Alex tìm nhà ga trong sân bay. " +
      "Alex nhìn thấy một bảng hướng dẫn có chữ 電車. " +
      "Alex học từ 電車, nghĩa là tàu điện.",

    korean:
      "Alex는 공항 안에서 역을 찾습니다. " +
      "안내판을 발견하고 電車라는 한자를 봅니다. " +
      "Alex는 電車라는 단어를 배웠습니다.",

    dialogue: [
      ["Alex", "東京駅へ行きたいです。"],
      ["Staff", "この電車に乗ってください。"],
      ["Alex", "ありがとうございます。"]
    ],

    thinking:
      "日本で電車に乗るとき、何を確認したいですか？",

    writing:
      "「私は〜へ行きたいです。」を使って、" +
      "行きたい場所を書いてみましょう。"
  },


  {
    title: "電車に乗る",

    text:
      "Alexさんは、電車に乗りました。" +
      "席に座って、窓の外を見ます。" +
      "日本の町が見えます。" +
      "Alexさんは「きれいですね」と言いました。",

    english:
      "Alex gets on the train. " +
      "Alex sits down and looks outside the window. " +
      "Alex can see a Japanese town.",

    vietnamese:
      "Alex lên tàu. " +
      "Alex ngồi xuống và nhìn ra ngoài cửa sổ. " +
      "Alex nhìn thấy một thành phố của Nhật Bản.",

    korean:
      "Alex는 전철을 탔습니다. " +
      "자리에 앉아서 창밖을 봅니다. " +
      "일본의 거리가 보입니다.",

    dialogue: [
      ["Alex", "この電車は東京駅に行きますか？"],
      ["Passenger", "はい、行きますよ。"],
      ["Alex", "よかったです。"]
    ],

    thinking:
      "日本の電車で困ったとき、誰に質問したいですか？",

    writing:
      "「〜ですか？」を使って質問文を1つ作りましょう。"
  },


  {
    title: "ホテル",

    text:
      "東京駅に着いたあと、Alexさんはホテルへ行きました。" +
      "ホテルの人に名前を言いました。" +
      "「Alexです。予約しています。」" +
      "ホテルの人は笑顔で「はい、お待ちしていました」と言いました。",

    english:
      "After arriving at Tokyo Station, Alex goes to a hotel. " +
      "Alex gives the name and says, 'I have a reservation.'",

    vietnamese:
      "Sau khi đến ga Tokyo, Alex đi đến khách sạn. " +
      "Alex nói tên của mình và nói rằng đã đặt phòng.",

    korean:
      "도쿄역에 도착한 후 Alex는 호텔에 갑니다. " +
      "호텔 직원에게 이름을 말하고 예약했다고 이야기합니다.",

    dialogue: [
      ["Alex", "こんばんは。Alexです。予約しています。"],
      ["Hotel", "はい。お待ちしていました。"],
      ["Alex", "ありがとうございます。"]
    ],

    thinking:
      "ホテルに着いたら、何を伝える必要がありますか？",

    writing:
      "ホテルの人に自分の名前を伝える文章を書きましょう。"
  },


  {
    title: "コンビニ",

    text:
      "ホテルで少し休んだあと、Alexさんはコンビニへ行きました。" +
      "水とおにぎりを買いました。" +
      "店員さんが「袋はどうしますか？」と聞きました。" +
      "Alexさんは「大丈夫です」と答えました。",

    english:
      "After resting at the hotel, Alex goes to a convenience store. " +
      "Alex buys water and an onigiri. " +
      "The clerk asks if Alex wants a bag.",

    vietnamese:
      "Sau khi nghỉ một lúc ở khách sạn, Alex đi đến cửa hàng tiện lợi. " +
      "Alex mua nước và cơm nắm. " +
      "Nhân viên hỏi Alex có cần túi không.",

    korean:
      "호텔에서 잠시 쉰 후 Alex는 편의점에 갑니다. " +
      "물과 주먹밥을 삽니다. " +
      "점원이 봉투가 필요한지 물어봅니다.",

    dialogue: [
      ["Clerk", "袋はどうしますか？"],
      ["Alex", "大丈夫です。"],
      ["Clerk", "ありがとうございます。"]
    ],

    thinking:
      "日本のコンビニで何を買ってみたいですか？",

    writing:
      "「私は〜を買いたいです。」を使って文章を書きましょう。"
  }

];


/* =========================================================
   QUIZ
========================================================= */

const quizData = [

  {
    question:
      "Alexさんは、どこに初めて来ましたか？",

    choices: [
      "日本",
      "韓国",
      "アメリカ"
    ],

    answer: 0
  },


  {
    question:
      "Alexさんは空港で何を探しましたか？",

    choices: [
      "ホテル",
      "駅",
      "レストラン"
    ],

    answer: 1
  },


  {
    question:
      "「電車」は何ですか？",

    choices: [
      "Train",
      "Hotel",
      "Airport"
    ],

    answer: 0
  },


  {
    question:
      "Alexさんは電車で何を見ましたか？",

    choices: [
      "海",
      "日本の町",
      "学校"
    ],

    answer: 1
  },


  {
    question:
      "「東京駅＿＿行きたいです。」",

    choices: [
      "に",
      "を",
      "が"
    ],

    answer: 0
  },


  {
    question:
      "「ホテル」は英語で何ですか？",

    choices: [
      "Station",
      "Hotel",
      "Store"
    ],

    answer: 1
  },


  {
    question:
      "「日本」の読み方は？",

    choices: [
      "にほん",
      "にちほん",
      "にほんご"
    ],

    answer: 0
  },


  {
    question:
      "「電車」の読み方は？",

    choices: [
      "でんしゃ",
      "でんくるま",
      "でんしゃあ"
    ],

    answer: 0
  },


  {
    question:
      "「にほん」を漢字で書いてください。",

    type: "text",

    answerText: "日本"
  },


  {
    question:
      "「がくせい」を漢字で書いてください。",

    type: "text",

    answerText: "学生"
  },


  {
    question:
      "「私は水＿＿買いました。」",

    choices: [
      "を",
      "に",
      "で"
    ],

    answer: 0
  },


  {
    question:
      "「Alexさんは日本に来た＿＿です。」",

    choices: [
      "ばかり",
      "まで",
      "だけ"
    ],

    answer: 0
  },


  {
    question:
      "日本に来たら、何をしたいですか？",

    type: "text"
  },


  {
    question:
      "日本で食べてみたいものは何ですか？",

    type: "text"
  },


  {
    question:
      "今日覚えた日本語を1つ書いてください。",

    type: "text"
  }

];


/* =========================================================
   STATE
========================================================= */

let currentPage = "home";

let currentPart = 0;

let currentStep = "read";

let answers = {};

let quizScore = 0;


/* =========================================================
   USER ROLE
========================================================= */

/*
  現在ログインしているユーザーの種類。

  student = 生徒
  teacher = 先生

  今はPrototypeなので、
  初期状態は生徒にしています。

  先生ページを確認するときは、
  ブラウザのコンソールから

  setUserRole("teacher")

  と入力できます。
*/

let currentUserRole =
  localStorage.getItem("kotobaUserRole") || "student";


function setUserRole(role) {

  if (
    role !== "student" &&
    role !== "teacher"
  ) {

    return;

  }


  currentUserRole = role;

  localStorage.setItem(
    "kotobaUserRole",
    role
  );


  updateNavigation();

  updateTeacherAccess();


  if (role === "teacher") {

    showToast(
      "先生としてログインしました。"
    );

  }

  else {

    showToast(
      "生徒としてログインしました。"
    );

  }

}


/* =========================================================
   ROLE CHECK
========================================================= */

function isTeacher() {

  return currentUserRole === "teacher";

}


/* =========================================================
   NAVIGATION
========================================================= */

function updateNavigation() {

  const teacherNav =
    document.getElementById(
      "teacherNav"
    );


  if (!teacherNav) {

    return;

  }


  if (isTeacher()) {

    teacherNav.style.display =
      "inline-flex";

  }

  else {

    teacherNav.style.display =
      "none";

  }

}


/* =========================================================
   TEACHER ACCESS
========================================================= */

function updateTeacherAccess() {

  const teacherPage =
    document.getElementById(
      "teacher"
    );


  if (!teacherPage) {

    return;

  }


  if (!isTeacher()) {

    teacherPage.classList.remove(
      "active"
    );

  }

}


/* =========================================================
   SHOW PAGE
========================================================= */

function showPage(page) {

  /*
    生徒が先生ページを開こうとした場合、
    アクセスを拒否する。
  */

  if (
    page === "teacher" &&
    !isTeacher()
  ) {

    showToast(
      "先生ページは先生のみ利用できます。"
    );

    return;

  }


  currentPage = page;


  document
    .querySelectorAll(".page")
    .forEach(section => {

      section.classList.remove(
        "active"
      );

    });


  const target =
    document.getElementById(page);


  if (target) {

    target.classList.add("active");

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  if (page === "lesson") {

    renderLesson();

  }


  if (page === "quiz") {

    renderQuiz();

  }

}


/* =========================================================
   INITIAL ROLE SETUP
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateNavigation();

    updateTeacherAccess();

    showPage("home");

  }
);


/* =========================================================
   PAGE
========================================================= */

function showPage(page) {

  /*
    生徒が先生ページへアクセスするのを防ぐ
  */

  if (
    page === "teacher" &&
    !isTeacher()
  ) {

    showToast(
      "先生ページは先生のみ利用できます。"
    );

    return;

  }


  currentPage = page;


  document
    .querySelectorAll(".page")
    .forEach(section => {

      section.classList.remove("active");

    });


  const target =
    document.getElementById(page);


  if (target) {

    target.classList.add("active");

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  if (page === "lesson") {

    renderLesson();

  }


  if (page === "quiz") {

    renderQuiz();

  }

}

/* =========================================================
   LESSON
========================================================= */

function renderLesson() {

  const data =
    lessonData[currentPart];

  const container =
    document.getElementById("lessonContent");


  document
    .querySelectorAll(".part-button")
    .forEach((button, index) => {

      button.classList.toggle(
        "active",
        index === currentPart
      );

    });


  document
    .querySelectorAll(".learning-step")
    .forEach(button => {

      button.classList.remove("active");

    });


  const stepIndex = {

    read: 0,
    understand: 1,
    think: 2,
    write: 3,
    review: 4

  };


  document
    .querySelectorAll(".learning-step")
    [stepIndex[currentStep]]
    .classList.add("active");


  document.getElementById(
    "progressText"
  ).textContent =
    `Part ${currentPart + 1} / ${lessonData.length}`;


  document.getElementById(
    "progress"
  ).style.width =
    `${((currentPart + 1) / lessonData.length) * 100}%`;


  let content = "";


  if (currentStep === "read") {

    content = renderRead(data);

  }

  else if (currentStep === "understand") {

    content = renderUnderstand(data);

  }

  else if (currentStep === "think") {

    content = renderThink(data);

  }

  else if (currentStep === "write") {

    content = renderWrite(data);

  }

  else if (currentStep === "review") {

    content = renderReview();

  }


  container.innerHTML = `

    <div class="lesson-card">

      <div class="eyebrow">
        PART ${currentPart + 1}
      </div>

      <h2>
        ${data.title}
      </h2>

      ${content}

    </div>

  `;

}


/* =========================================================
   READ
========================================================= */

function renderRead(data) {

  const dialogue =
    data.dialogue
      .map(line => `

        <div class="dialogue-line">

          <span class="speaker">
            ${line[0]}
          </span>

          ：${line[1]}

        </div>

      `)
      .join("");


  return `

    <h3>
      文章を読んでみよう
    </h3>

    <div class="reading-text">

      ${data.text}

    </div>


    <div class="translation-controls">

      <button
        onclick="showTranslation('english')"
      >
        English
      </button>

      <button
        onclick="showTranslation('vietnamese')"
      >
        Tiếng Việt
      </button>

      <button
        onclick="showTranslation('korean')"
      >
        한국어
      </button>

    </div>


    <div
      id="translation"
      class="translation"
    ></div>


    <div class="dialogue">

      <h3>
        会話を読んでみよう
      </h3>

      ${dialogue}

    </div>


    <div class="write-note">

      🔊
      先生と一緒に音読してみましょう。

      カメラがなくても、
      マイクだけで参加できます。

    </div>

  `;

}


/* =========================================================
   TRANSLATION
========================================================= */

function showTranslation(language) {

  const data =
    lessonData[currentPart];

  const translation =
    document.getElementById(
      "translation"
    );


  if (language === "english") {

    translation.textContent =
      data.english;

  }

  else if (language === "vietnamese") {

    translation.textContent =
      data.vietnamese;

  }

  else if (language === "korean") {

    translation.textContent =
      data.korean;

  }


  translation.classList.add("active");

}


/* =========================================================
   UNDERSTAND
========================================================= */

function renderUnderstand(data) {

  return `

    <h3>
      内容を理解しよう
    </h3>

    <p>
      先生と一緒に、次のことを確認しましょう。
    </p>


    <div class="quiz-question">

      <strong>
        Alexさんは、今どこにいますか？
      </strong>

      <button
        class="quiz-choice"
        onclick="selectUnderstanding(this)"
      >
        日本です。
      </button>

      <button
        class="quiz-choice"
        onclick="selectUnderstanding(this)"
      >
        アメリカです。
      </button>

      <button
        class="quiz-choice"
        onclick="selectUnderstanding(this)"
      >
        韓国です。
      </button>

    </div>


    <div class="write-note">

      💡
      わからないときは、
      もう一度①「読む」に戻ってみましょう。

    </div>

  `;

}


function selectUnderstanding(button) {

  document
    .querySelectorAll(".quiz-choice")
    .forEach(button => {

      button.classList.remove(
        "selected"
      );

    });


  button.classList.add(
    "selected"
  );

}


/* =========================================================
   THINK
========================================================= */

function renderThink(data) {

  return `

    <h3>
      考えてみよう
    </h3>

    <p>
      ${data.thinking}
    </p>


    <textarea
      id="thinkingAnswer"
      placeholder="日本語で書いてみましょう。"
    ></textarea>


    <div class="write-note">

      すぐに正しい答えを考えなくても大丈夫です。
      自分の考えを日本語にしてみましょう。

    </div>

  `;

}


/* =========================================================
   WRITE
========================================================= */

function renderWrite(data) {

  return `

    <h3>
      書いてみよう
    </h3>

    <p>
      ${data.writing}
    </p>


    <textarea
      id="writingAnswer"
      placeholder="ここに日本語を書いてください。"
    ></textarea>


    <div class="write-note">

      ✏️
      書き終わったら、
      先生と一緒に確認しましょう。

    </div>

  `;

}


/* =========================================================
   REVIEW
========================================================= */

function renderReview() {

  return `

    <h3>
      読み直そう
    </h3>

    <div class="quiz-question">

      <h3>
        チェックポイント
      </h3>

      <p>
        □ 助詞を確認しましたか？
      </p>

      <p>
        □ 漢字を確認しましたか？
      </p>

      <p>
        □ 文の最後を確認しましたか？
      </p>

      <p>
        □ 自分が言いたいことを書けていますか？
      </p>

    </div>


    <div class="write-note">

      先生に見てもらう準備ができたら、
      次のPartへ進みましょう。

    </div>

  `;

}


/* =========================================================
   STEP
========================================================= */

function changeStep(step) {

  currentStep = step;

  renderLesson();

}


/* =========================================================
   PART
========================================================= */

function changePart(index) {

  currentPart = index;

  currentStep = "read";

  renderLesson();

}


function nextPart() {

  if (
    currentPart <
    lessonData.length - 1
  ) {

    currentPart++;

    currentStep = "read";

    renderLesson();

  }

  else {

    showPage("quiz");

  }

}


function previousPart() {

  if (currentPart > 0) {

    currentPart--;

    currentStep = "read";

    renderLesson();

  }

}


/* =========================================================
   QUIZ RENDER
========================================================= */

function renderQuiz() {

  const container =
    document.getElementById(
      "quizContent"
    );


  container.innerHTML =
    quizData
      .map((question, index) => {

        return `

          <div class="quiz-question">

            <div class="quiz-number">
              Q${index + 1}
            </div>

            <h3>
              ${question.question}
            </h3>


            ${
              question.type === "text"

              ?

              `

                <input
                  class="quiz-input"
                  id="answer-${index}"
                  type="text"
                  placeholder="日本語で入力してください"
                >

              `

              :

              question.choices
                .map((choice, choiceIndex) => `

                  <button
                    class="quiz-choice"
                    onclick="
                      selectQuizAnswer(
                        ${index},
                        ${choiceIndex},
                        this
                      )
                    "
                  >

                    ${choice}

                  </button>

                `)
                .join("")

            }

          </div>

        `;

      })
      .join("");

}


/* =========================================================
   QUIZ ANSWER
========================================================= */

function selectQuizAnswer(
  questionIndex,
  answerIndex,
  button
) {

  answers[questionIndex] =
    answerIndex;


  const parent =
    button.parentElement;


  parent
    .querySelectorAll(".quiz-choice")
    .forEach(button => {

      button.classList.remove(
        "selected"
      );

    });


  button.classList.add(
    "selected"
  );

}


/* =========================================================
   QUIZ SUBMIT
========================================================= */

function submitQuiz() {

  quizScore = 0;


  quizData.forEach(
    (question, index) => {

      if (
        question.type === "text"
      ) {

        const input =
          document.getElementById(
            `answer-${index}`
          );


        if (
          question.answerText &&
          input &&
          input.value.trim() ===
          question.answerText
        ) {

          quizScore++;

        }

        /*
          作文問題は先生が採点するため、
          自動採点には含めません。
        */

      }

      else {

        if (
          answers[index] ===
          question.answer
        ) {

          quizScore++;

        }

      }

    }
  );


  showPage("quizResult");


  document.getElementById(
    "score"
  ).textContent =
    `${quizScore} / 12`;


  let message = "";


  if (quizScore >= 10) {

    message =
      "よくできました！";

  }

  else if (quizScore >= 7) {

    message =
      "いい調子です。間違えた問題を復習してみましょう。";

  }

  else {

    message =
      "大丈夫です。もう一度教材を読んで復習してみましょう。";

  }


  document.getElementById(
    "resultMessage"
  ).textContent =
    message;

}


/* =========================================================
   REGISTER
========================================================= */

function register(event) {

  event.preventDefault();


  showToast(
    "登録処理は本番版でメール認証と接続します。"
  );

}


/* =========================================================
   LOGIN
========================================================= */

function login(event) {

  event.preventDefault();


  showToast(
    "ログイン処理は本番版で安全な認証システムと接続します。"
  );

}


/* =========================================================
   TEACHER
========================================================= */

function teacherStep(index) {

  document
    .querySelectorAll(".teacher-step")
    .forEach(button => {

      button.classList.remove(
        "active"
      );

    });


  document
    .querySelectorAll(".teacher-step")
    [index]
    .classList.add("active");


  showToast(
    `授業の進行を ${index + 1} に変更しました。`
  );

}


function startClass() {

  showToast(
    "授業を開始しました。生徒に授業コードを伝えてください。"
  );

}


function finishClass() {

  const confirmed =
    confirm(
      "授業を終了しますか？"
    );


  if (!confirmed) {

    return;

  }


  showToast(
    "授業を終了しました。"
  );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

  }, 3000);

}


/* =========================================================
   INITIAL
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    showPage("home");

  }
);