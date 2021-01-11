var buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calc);
}

function calc(e) {
  if (e.target.value === "calculate1") {
    progressMark1.value = (
      (Number(mark1.value) / Number(Tmark1.value)) *
      Number(weighting1.value)
    ).toFixed(2);
  }
  if (e.target.value === "calculate2") {
    progressMark2.value = (
      (Number(mark2.value) / Number(Tmark2.value)) *
      Number(weighting2.value)
    ).toFixed(2);
  }
  if (e.target.value === "calculate3") {
    progressMark3.value = (
      (Number(mark3.value) / Number(Tmark3.value)) *
      Number(weighting3.value)
    ).toFixed(2);
  }
  if (e.target.value === "calculate4") {
    progressMark4.value = (
      (Number(mark4.value) / Number(Tmark4.value)) *
      Number(weighting4.value)
    ).toFixed(2);
  }
  if (e.target.value === "calculate5") {
    progressMark5.value = (
      (Number(mark5.value) / Number(Tmark5.value)) *
      Number(weighting5.value)
    ).toFixed(2);
  }
  if (e.target.value === "calculate6") {
    progressMark6.value = (
      (Number(mark6.value) / Number(Tmark6.value)) *
      Number(weighting6.value)
    ).toFixed(2);
  }
  if (e.target.innerHTML === "Total") {
    totalProgress.value = (
      Number(progressMark1.value) +
      Number(progressMark2.value) +
      Number(progressMark3.value) +
      Number(progressMark4.value) +
      Number(progressMark5.value) +
      Number(progressMark6.value)
    ).toFixed(2);
    totalWeighting.value = (
      Number(weighting1.value) +
      Number(weighting2.value) +
      Number(weighting3.value) +
      Number(weighting4.value) +
      Number(weighting5.value) +
      Number(weighting6.value)
    ).toFixed(2);
    if (Number(totalProgress.value) < 50) {
      document.getElementById("msg").innerHTML = `You need ${
        50 - Number(totalProgress.value).toFixed(0)
      }% to pass.And you need to get an average of ${(
        ((50 - Number(totalProgress.value)) /
          (100 - Number(totalWeighting.value))) *
        100
      ).toFixed(0)}/100 for your upcoming exam.`;
    } else {
      document.getElementById(
        "msg"
      ).innerHTML = `Congrats you have passed already.You need ${
        75 - Number(totalProgress.value).toFixed(0)
      }% to get a distinction.And you need to get ${(
        ((75 - Number(totalProgress.value)) /
          (100 - Number(totalWeighting.value))) *
        100
      ).toFixed(0)}/100 for your upcoming exam.`;
    }
  }
}
