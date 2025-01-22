const Skillset = () => {
    return (
        <>
        <h3 className="text-2xl font-bold mb-4">Skillset:</h3>
            
        <div className="grid sm:grid-cols-3 gap-6">
            {[
            { skill: 'Adobe XD', level: '90%' },
            { skill: 'Adobe Illustrator', level: '75%' },
            { skill: 'HTML5', level: '95%' },
            { skill: 'CSS3/Sass', level: '80%' },
            { skill: 'JavaScript', level: '70%' },
            { skill: 'ReactJS', level: '50%' },
            ].map(({ skill, level }) => (

            <div key={skill} className="mb-4">
                <div className="flex justify-between mb-1">
                    <span>{skill}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-[--accent] h-2 rounded-full"
                        style={{ width: level }}
                    ></div>
                </div>
            </div>

            ))}
        </div>          
        </>
    )
}

export default Skillset