interface Props {
    children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
    return <div className="px-6">{children}</div>;
};

export default Wrapper;
