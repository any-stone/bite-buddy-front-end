//css
import styles from './DateCard.module.css'

//replace props with {createdAt}
const DateCard = ({createdAt}) => {
  const date = new Date(createdAt).toLocaleDateString()
  return (
    <div className={styles.container}>
      {/* <Icon category="Calendar" /> */}
      
      <h5>{date}</h5>
    </div>
  )
}

export default DateCard
