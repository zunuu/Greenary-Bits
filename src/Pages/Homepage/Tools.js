import React, { useEffect, useState } from 'react';
import GoalsCard from './GoalsCard';
import Purchase from './Purchase/Purchase';
import ToolsCard from './ToolsCard';

const Tools = () => {



    const [tools, setTools] = useState([]);
    const [purchaseModal, setPurchaseModal] = useState(null);




    useEffect(() => {
        fetch('https://guarded-temple-78656.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }
        , [])
    return (
        <div  >



            < div class="p-10 border-opacity-50" >

                <div class="divider text-4xl font-semibold">TOOLS</div>

            </div >
            <div>
                {
                    tools.map(eachtool => <ToolsCard
                        key={eachtool._id}
                        eachtool={eachtool}
                    >

                    </ToolsCard>)
                }
            </div>


        </div >
    );
};

export default Tools;