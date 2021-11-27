import React, {useState} from "react";
import Button from "../Button";
import {MdCloseFullscreen, MdOpenInFull, MdOutlineAddCircleOutline} from "react-icons/md";
import {CHART_WIDTH, Ranges} from "../../constants/Others";
import {Tag} from "antd";
import './chartActions.css';

const { CheckableTag } = Tag;

type ChartActionsProps = {
  setSelectedRange: React.Dispatch<React.SetStateAction<string>>,
  selectedRange: string,
};

export default function ChartActions({ setSelectedRange, selectedRange }: ChartActionsProps) {
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullScreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setFullScreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
          setFullScreen(false);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const screenButtonProps = {
    Icon: fullScreen ? MdCloseFullscreen : MdOpenInFull,
    label: fullScreen ? "Exit Fullscreen" : "Fullscreen",
  };

  return (
    <div className="chart-actions" style={{ width: CHART_WIDTH }}>
      <div className="chart-options">
        <Button {...screenButtonProps} onClick={handleFullScreen} />
        <Button Icon={MdOutlineAddCircleOutline} label="Compare" />
      </div>

      <div className="ranges">
        {Ranges.map(range => (
          <CheckableTag
            className={`${selectedRange !== range.days && 'unselected'} range`}
            onChange={() => setSelectedRange(range.days)}
            checked={selectedRange === range.days}>
            {range.label}
          </CheckableTag>
        ))}
      </div>
    </div>
  );
}
