import Loader from '@/components/ui/Loader';
import { FC } from 'react';
import SearchCard from './SearchCard';
import { searchProduct } from '@/components/Navbar';

interface SearchProps {
    visible: boolean;
    loading: boolean;
    data: searchProduct[];
}

const Search: FC<SearchProps> = ({ visible, loading, data }) => {
    return (
        <div
            className={`${
                visible ? '' : 'hidden'
            } bg-cardLight shadow-md rounded-md absolute w-full top-12 z-20`}
        >
            {loading ? (
                <div className="flex justify-center p-5">
                    <Loader />
                </div>
            ) : (
                data &&
                data.map((res) => (
                    <SearchCard imageUrl={res.imageUrl} name={res.name} />
                ))
            )}
        </div>
    );
};

export default Search;
