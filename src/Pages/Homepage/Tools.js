import React, { useEffect, useState } from 'react';
import GoalsCard from './GoalsCard';
import Purchase from './Purchase/Purchase';
import ToolsCard from './ToolsCard';

const Tools = () => {



    const [tools, setTools] = useState([]);
    const [purchaseModal, setPurchaseModal] = useState(null);




    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }
        , [])
    return (
        <div >



            < div class="p-10 border-opacity-50" >

                <div class="divider text-4xl font-semibold">TOOLS</div>

            </div >
            <div>
                {
                    tools.map(eachtool => <ToolsCard
                        key={tools._id}
                        eachtool={eachtool}
                        setPurchaseModal={setPurchaseModal}
                    >

                    </ToolsCard>)
                }
            </div>
            {purchaseModal &&
                <Purchase
                    purchaseModal={purchaseModal}
                    setPurchaseModal={setPurchaseModal}
                >
                </Purchase>}

        </div >
    );
};

export default Tools;