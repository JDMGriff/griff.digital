const SubpageHero = ({title}) => {
    return (
        <div className='flex items-center h-[250px] relative mb-10 lg:h-[450px]'>
            <h1 className='text-4xl uppercase font-bold mb-6 relative top-6 lg:top-0 lg:text-6xl'>{title}<span className='text-[--accent]'>.</span></h1>
        </div>          
    );
};
export default SubpageHero;