// 샘플 학생 데이터 (학번 + 이름 → 계정 ID, 비밀번호)
const studentData = [
  { id: '202301', name: '홍길동', googleId: '202301@school.edu', googlePw: 'hong1234' },
  { id: '202302', name: '김철수', googleId: '202302@school.edu', googlePw: 'kim5678' },
  { id: '202303', name: '김지영', googleId: '202303@school.edu', googlePw: 'leeabcd' }
];


// DOM 요소 가져오기
const form = document.getElementById('searchForm');
const resultBox = document.getElementById('result');
const googleIdSpan = document.getElementById('googleId');
const googlePwSpan = document.getElementById('googlePw');

// 폼 제출 시 동작
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 새로고침 방지

  const inputId = document.getElementById('studentId').value.trim();
  const inputName = document.getElementById('studentName').value.trim();

  // 데이터에서 검색
  const student = studentData.find(
    (s) => s.id === inputId && s.name === inputName
  );

  if (student) {
    // 결과 표시
    googleIdSpan.textContent = student.googleId;
    googlePwSpan.textContent = student.googlePw;
    resultBox.classList.remove('hidden');
  } else {
    // 결과 없음
    googleIdSpan.textContent = '-';
    googlePwSpan.textContent = '-';
    resultBox.classList.remove('hidden');
    alert('일치하는 학생 정보를 찾을 수 없습니다.');
  }
});

