import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "../../assets/icons";
import { formatTime } from "../../helpers/formatTime";

const CurrentTime = () => {
    const [currentTime, SetCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            SetCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-2 text-lg items-center">
            <ArrowLeft />
            <p className="font-ropa-sans">{formatTime(currentTime)}</p>
            <ArrowRight />
        </div>
    );
};

export default CurrentTime;
