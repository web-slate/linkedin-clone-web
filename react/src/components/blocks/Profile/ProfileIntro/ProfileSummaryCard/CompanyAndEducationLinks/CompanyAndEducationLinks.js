import React from 'react'
import styles from './CompanyAndEducationLinks.module.css'

// FIXME: Remove hardcoded values
const data = [
  {
    name: 'PayPal',
    image: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGgcRYcsEA95g/company-logo_100_100/0/1593617920398?e=1661385600&v=beta&t=hkBFu7FBQj0fiEXjH4uckzVj6eOxsA-1veVQuIIgj3U'
  },
  {
  name: 'Madras University',
  image: 'https://media-exp1.licdn.com/dms/image/C560BAQFnYPDIXmEmVA/company-logo_100_100/0/1519901065593?e=1661385600&v=beta&t=HlctBmANC-YXZ_V2ka4sW7Zn9wIWlwGjCO-ZHsLB3m4'
  }
];

function CompanyAndEducationLinks() {
  return (
    <div>
      {
      data.map(({name, image})=>{
        return (
          <div className={styles.itemContainer}>
              <img src={image} />
              <div>{name}</div>
          </div>
        )
      })
      }
    </div>
  )
}

export default CompanyAndEducationLinks
