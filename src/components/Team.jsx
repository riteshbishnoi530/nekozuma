import {TEAM_LIST } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'

function Team() {
  return (
    <div id='team' className='team px-3'>
        <div className="custom-container">
        <h2 className='text-xl custom-blue text-center team-heading font-franklin'>Team</h2>
            <div className='d-flex justify-content-center flex-wrap team-container'>
                {TEAM_LIST.map((team, index) => (
                    <div className='team-member' key={index}>
                        <img className='team-member-img' src={team.image} alt="team" />
                        <p className='custom-blue text-lg text-center mt-3 mt-md-4 font-franklin'>{team.role}</p>
                        <p className='text-sm custom-white text-center mt-2'>{team.member}</p>
                        <p className='text-sm custom-white text-center mt-2'>{team.description}</p>
                        <Link target='_blank' href="https://x.com/?lang=en">
                        <img className='d-flex mx-auto mt-2 team-icon' src="/assets/images/twitter.webp" alt="twitter" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Team