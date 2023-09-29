import React from 'react'
import "./issues.css"
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

function Issues() {
  const {t} = useTranslation()
  return (
    <div className="issues-main">
      <div className="issues-hero">
        <div className="overlay">
          <div className="issues-inner">
            <h1>From animal perspective</h1>
          </div>
        </div>
      </div>

     <Link to={t('routes.issues_meat')}>meat</Link>
      </div>

  )
}

export default Issues