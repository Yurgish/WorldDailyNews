import { useEffect, useState } from "react";
import { ENewsGridTypes, IGridStyles } from "../models/IGrid";
import gridStyles from "../helpers/newsGridTemplates";

const useGridTemplate = (gridType: ENewsGridTypes) => {
    const [currentGridStyles, setCurrentGridStyles] = useState<IGridStyles>(gridStyles[gridType]);

    useEffect(() => {
        const newGridStyles = gridStyles[gridType];
        setCurrentGridStyles(newGridStyles);
    }, [gridType]);

    return currentGridStyles;
};

export default useGridTemplate;
