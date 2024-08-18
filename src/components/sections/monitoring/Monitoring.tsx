import styles from './Monitoring.module.scss'
import Biopsy from './biopsy/Biopsy'
import Oncoscreening from './oncoscreening/Oncoscreening'
import Ultrasound from './ultrasound/Ultrasound'

export default function Monitoring() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Ultrasound />
        <Biopsy />
      </div>
      <div className={styles.bottom}>
        <Oncoscreening />
      </div>
    </div>
  )
}
