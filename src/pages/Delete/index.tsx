import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import "./style.css";

const ButtonLike = () => {
  const [numberLikes, setNumberLikes] = useState<number>(100);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClickButton = () => {
    if (!isClicked) {
      setNumberLikes(numberLikes + 1);
    } else {
      setNumberLikes(numberLikes - 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <button
      onClick={() => {
        return handleClickButton();
      }}
      className={isClicked ? "liked" : "like-button"}
    >
      <Icon as={AiOutlineLike} />| <span> {numberLikes} </span>
    </button>
  );
};

const ButtonDislike = () => {
  const [numberDislike, setNumberDislikes] = useState<number>(25);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClickButton = () => {
    if (!isClicked) {
      setNumberDislikes(numberDislike + 1);
    } else {
      setNumberDislikes(numberDislike - 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <button
      onClick={() => handleClickButton()}
      className={isClicked ? "disliked" : "dislike-button"}
    >
      <Icon as={AiOutlineDislike} /> | <span> {numberDislike} </span>
    </button>
  );
};

const Delete = () => {
  return (
    <div className="container">
      <div className="content-button">
        <ButtonLike />
        <ButtonDislike />
      </div>
    </div>
  );
};

export default Delete;
