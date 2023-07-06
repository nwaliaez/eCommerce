import { FC } from 'react';

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
    return (
        <div className="loading-wave">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
        </div>
    );
};

export default Loader;
