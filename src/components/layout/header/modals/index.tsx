import NewsModal from './NewsModal'
import TellsModal from './TellsModal'
import AppointmentModal from './appointment/AppointmentModal'
import BiopsyModal from './monitoring/BiopsyModal'
import OncoscreeningModal from './monitoring/OncoscreeningModal'
import UltrasoundModal from './monitoring/UltrasoundModal'

export default function Modals() {
  return (
    <>
      <AppointmentModal />
      <NewsModal />
      <UltrasoundModal />
      <BiopsyModal />
      <OncoscreeningModal />
      <TellsModal />
    </>
  )
}
