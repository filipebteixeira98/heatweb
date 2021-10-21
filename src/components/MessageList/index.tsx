import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>I just can't wait to start getting into the code because this event will be the best one ever 👨‍💻</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" alt="" />
            </div>
            <span>John Doe</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>Rocketseat always surprising producing high level content like this. I'm very thankful of all what you've had done and contributed! #towardsthenextlevel 🚀</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription01&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=AngryNatural&mouthType=Smile&skinColor=Light" alt="" />
            </div>
            <span>John Doe</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>In this #dowhile2021 you can count on me and with this amazing dev community who make the world a better place 🔥</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=Brown&clotheType=Hoodie&clotheColor=Heather&eyeType=WinkWacky&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Black" alt="" />
            </div>
            <span>John Doe</span>
          </div>
        </li>
      </ul>
    </div>
  )
}