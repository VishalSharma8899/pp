import React from 'react'
import './Dashboard.css';
import PipelineBar from './PipelineBar';
import Filter from './Filter';
const DashBoard = () => {
    return (
        <div className='parent'>
            <div className='first'>
                 <span>My deals</span>
                <span>All Client</span>
                <span style={{ textAlign: 'left', paddingTop: '.5rem', paddingBottom: '1rem',backgroundColor: '#EEF2FD', width: '50vw', height: '10px', borderRadius: '0', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', border: 0, marginLeft: '15rem' }}>
                    <span style={{ borderRadius: '50%'  }}>MS</span>
                </span>
            </div>
            <div >
                 <div>
                  <Filter/>  </div>  
                    
            <PipelineBar
                heading="Negotiating"
                bgColor="#F3F6FE"
                counts={[0, 0]}
                tableData={[
                    { client: "Acme", dealName: "Web Redesign", budget: "$5000", assignees: "Alice" },
                    { client: "Globex", dealName: "CRM Setup", budget: "$8000", assignees: "Bob" }
                ]}
            />
            <PipelineBar
                heading="Negotiating"
               bgColor="#F9F2FE"
                counts={[2, 120000]}
                tableData={[
                    { client: "Acme", dealName: "Web Redesign", budget: "$5000", assignees: "Alice" },
                    { client: "Globex", dealName: "CRM Setup", budget: "$8000", assignees: "Bob" }
                ]}
            />
            <PipelineBar
                heading="Kickeback"
                counts={[10, 50000]}
                 bgColor="#FEF8F3"
                tableData={[
                    { client: "Acme", dealName: "Web Redesign", budget: "$5000", assignees: "Alice" },
                    { client: "Globex", dealName: "CRM Setup", budget: "$8000", assignees: "Bob" }
                ]}
            />
            <PipelineBar
                heading="Negotiating"
                bgColor="#F0FCFF"
                counts={[10, 5]}
                tableData={[
                    { client: "Acme", dealName: "Web Redesign", budget: "$5000", assignees: "Alice" },
                    { client: "Globex", dealName: "CRM Setup", budget: "$8000", assignees: "Bob" }
                ]}
            />
                
            </div>
        </div>
    )
}

export default DashBoard