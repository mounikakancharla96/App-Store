import './index.css'

const TabItem = props => {
  const {tabDetails, getApps, isActive} = props

  const {tabId, displayText} = tabDetails

  const clickedApps = () => {
    getApps(tabId)
  }
  const changeMode = isActive ? 'mode1' : ''

  return (
    <li className="tab-lists">
      <button
        type="button"
        className={`button ${changeMode}`}
        onClick={clickedApps}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
