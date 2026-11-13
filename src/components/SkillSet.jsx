const Skillset = ({ skillset }) => {
    return (
        <>
            <h3 className="text-2xl font-bold mb-6">Core capabilities</h3>
            <div className="grid sm:grid-cols-3 gap-6">
                {skillset.map(({ skill, capabilities }) => (
                    <div key={skill} className="border-t border-[--accent] pt-5">
                        <h4 className="font-bold text-lg mb-4">{skill}</h4>
                        <ul className="space-y-3 text-sm leading-relaxed">
                            {capabilities.map((capability) => (
                                <li key={capability}>{capability}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Skillset;
