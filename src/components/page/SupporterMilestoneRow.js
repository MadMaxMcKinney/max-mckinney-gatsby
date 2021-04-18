import React from 'react'

export const SupporterMilestoneRow = (props) => (
    <div>
        <div className="mb-8">
            <p className="text-gray-500"><i class="fad fa-calendar-alt mr-1"></i> {props.date}</p>
            <h1>{props.milestone}</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-flow-col md:grid-cols-none gap-6">
            {props.children}  
        </div>
    </div>
)