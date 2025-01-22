const SubpageHero = ({title}) => {
    return (
        <div className='flex items-center h-[300px] lg:h-[450px]'>
            <h1 className='text-4xl lg:text-6xl uppercase font-bold mb-6'>{title}<span className='text-[--accent]'>.</span></h1>
        </div>          
    );
};
export default SubpageHero;