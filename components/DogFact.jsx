import React from 'react'

export default function DogFact() {

    function count_letters(str) {
        var count = str.length;
        return count;
    }

    React.useEffect(() => {
        const fethcDogFact = async () => {
            await fetch('https://whispering-tor-71951.herokuapp.com/dog-facts')
                .then(res => res.json())
                .then((data) => {
                    setFact(data.fact.fact);
                    count_letters(data.fact.fact);
                    // console.log(count_letters(fact));
                    // console.log(data);
                    // console.log(data.fact.fact);
                })
        }
        fethcDogFact();
    }, []);

    const [fact, setFact] = React.useState('Loading...');

    console.log(count_letters(fact));

    var factTag = <h1 className='text-2xl text-center font-medium mt-3'>&quot;{fact}&quot;</h1>;
    if (count_letters(fact) > 90) {
        factTag = <h1 className='text-xl text-center font-medium mt-3'>&quot;{fact}&quot;</h1>;
    }


    return (
        <div className='flex flex-col w-auto h-auto items-center justify-center'>
            <h3 className='text-xl mt-16'>Did you know?</h3>
            {factTag}
        </div>
    )
}
