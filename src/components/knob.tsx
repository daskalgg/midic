import { useEffect, useState } from "react"
import "./knob.css"
import Point from "../utils/points";

interface Props {
    val: number,
};

export default function Knob({val}: Props) {
    // const [initValue,setInitValue] = useState(new Point(0, 0));
    // const [startValue, setStartValue] = useState(0);
    const [value, setValue] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [initPoint, setInitPoint] = useState(new Point(0, 0));
    const [distance, setDistance] = useState(0);

    function onMove(event: MouseEvent) {
        // setStartValue([event.clientX - initValue[0], event.clientY - initValue[1]]);
    }

    function onStart(event : React.MouseEvent) {
        // setStartValue(event.clientX);
        setInitPoint(new Point(event.clientX, event.clientY));
        setDragging(true);
    }

    useEffect(() => {
        // Only change the value if the drag was actually started.
        const onUpdate = (event : MouseEvent) => {
            if (dragging) {
                // setValue(event.clientX - initValue);
                let dist = Point.ldistance(initPoint, new Point(event.clientX, event.clientY));
                // if(event.clientX < initPoint.x || event.clientY > initPoint.y) {
                //     dist*= -1;
                // }

                setDistance(dist);
            }
        };

        // Stop the drag operation now.
        const onEnd = () => {
            // setStartValue(0);
            setDragging(false);
        };

        document.addEventListener("mousemove", onUpdate);
        document.addEventListener("mouseup", onEnd);
        return () => {
            document.removeEventListener("mousemove", onUpdate);
            document.removeEventListener("mouseup", onEnd);
        };
    }, [/*setValue,*/ setDistance ,dragging]);

    return (
        <div onMouseDown={(e) => {onStart(e)}}>
            <h2 className="text">TEXT</h2>
            <h2>{distance}</h2>
            </div>
    )
}
