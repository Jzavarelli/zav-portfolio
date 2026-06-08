/* Stack Item Images */
import githubLogo from '/logos/tool-github.svg'
import facebookLogo from '/logos/facebook.svg'
import instaLogo from '/logos/instagram-icon.svg'
import linkedinLogo from '/logos/linkedin-icon.svg'

/* Tool Item Images */

/* Libraries and CSS */
import '../Portfolio.scss'

/* Variables and Constants */
const currentYear = new Date().getFullYear();

function footer() {

  return (
    <>
        <footer>
            <section className="container_flex">
                <div id="foot-left">
                    <a href="https://github.com"><img src={githubLogo} alt="GitHub Logo" /></a>
                    <a href="https://facebook.com"><img src={facebookLogo} alt="Facebook Logo" /></a>
                    <a href="https://instagram.com"><img src={instaLogo} alt="Instagram Logo" /></a>
                    <a href="https://linkedin.com"><img src={linkedinLogo} alt="LinkedIn Logo" /></a>
                </div>
                <div id="foot-right">
                    <p>Est. 2001 - {currentYear} Jace Zavarelli, All Rights Reserved.</p>
                </div>
            </section>
        </footer>
    </>
  )
}

export default footer