// isUtensilAvailable.js
import { _saveQuestion,_saveQuestionAnswer } from "../utils/_DATA";

describe("isDataAPIAvailable", () => {
  it("will create a new question following the correct structure if right input is givent to _saveQuestion. ", async () => {
    var optionOneText = "Work in agile method";
    var optionTwoText = "Work in lean method";
    var author = "john";

    var result = await _saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: author,
    });

    expect(result.hasOwnProperty("id")).toEqual(true);
    expect(result.hasOwnProperty("timestamp")).toEqual(true);
    expect(result.hasOwnProperty("author")).toEqual(true);
    expect(result.hasOwnProperty("optionOne")).toEqual(true);
    expect(result.hasOwnProperty("optionTwo")).toEqual(true);

    expect(result.optionTwo.text).toEqual(optionTwoText);
    expect(result.optionOne.text).toEqual(optionOneText);
    expect(result.optionTwo.text).toEqual(optionTwoText);
    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionTwo.votes).toEqual([]);
    expect(result.author).toEqual(author);
  });

  it("will return an error if incorrect input is given to _saveQuestion. ", async () => {
    var optionOneText = "Work in agile method";
    var author = "john";

    var input = { optionOneText: optionOneText, author: author };

    await expect(_saveQuestion(input)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });


  it("will return true if correct input is given to _saveQuestionAnswer", async () => {
    var pool_id = "8xf0y6ziyjabvozdd253nd";
    var user = "mtsamis";
    var answer = "optionOne"

    var result = await _saveQuestionAnswer({
        authedUser: user,
        qid: pool_id,
        answer: answer,
      });

    console.log(result)

    expect(result).toEqual(true);



  });

  it("will return an error if incorrect input is given to _saveQuestionAnswer. ", async () => {


    var input = {};

    await expect(_saveQuestionAnswer(input)).rejects.toEqual(
        "Please provide authedUser, qid, and answer"
    );
  });

  
});
