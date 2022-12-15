import styles from "../Profile/Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.name_wrapper}>
        <div>
          <p className={styles.profile_title}>FirstName</p>
          <p className={styles.profile_content}>Haruki</p>
        </div>
        <div>
          <p className={styles.profile_title}>LastName</p>
          <p className={styles.profile_content}>Ambai</p>
        </div>
      </div>
      <div className={styles.personal_wrapper}>
        <div>
          <p className={styles.profile_title}>Date of Birth</p>
          <p className={styles.profile_content}> 29/03/2001</p>
        </div>
        <div>
          <p className={styles.profile_title}>Age</p>
          <p className={styles.profile_content}> 21</p>
        </div>
        <div>
          <p className={styles.profile_title}>Nationality</p>
          <p className={styles.profile_content}> Japan</p>
        </div>
        <div>
          <p className={styles.profile_title}>Experience</p>
          <ul className={styles.profile_list}>
            <li>+ 1 year of React Web Development</li>
            <li>
              + 1 year of AWS Development
              <br />
              (lambda, RDS, API GateWay...)
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.content_wrapper}>
        <div>
          <p className={styles.profile_title}>Education</p>
          <p className={styles.profile_content}>
            Bachelar of Computer Engeneering, University of Aizu
          </p>
        </div>
        <div>
          <p className={styles.profile_title}>Projects</p>
          <p className={styles.profile_content}>
            COIAS, stands for "Come On Impacting ASteroid", is web application
            for finding new asteroid
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
