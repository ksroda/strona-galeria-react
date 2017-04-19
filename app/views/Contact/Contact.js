import React from 'react'

import Title from '../../components/Title/Title'
import style from './Contact.scss'
// import translate from '../../translate'

const Contact = props => (
  <div>
    <Title name="Contact"/>
    <div className={style.contact}>
      <div className={style.form}>
        <form>
          E-mail: <br />
          <input type="email" placeholder="email@email.com" required /> <br />
          Wiadomość: <br />
          <textarea required/> <br />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className={style.sideText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tristique dolor. Curabitur quis turpis mi. Fusce tincidunt et urna sit amet venenatis. Aenean enim tortor, finibus quis velit nec, dapibus feugiat lectus. Nunc lorem felis, iaculis in posuere aliquet, pulvinar nec metus. Quisque justo orci, dignissim sit amet elementum in, rutrum et turpis. Suspendisse ac lectus congue, placerat metus eget, auctor elit. Aenean eu imperdiet dolor.
        Curabitur vestibulum nisi et ex cursus, ut auctor justo pharetra. Sed imperdiet bibendum ex, nec mattis dui tristique vitae. Fusce interdum diam in odio suscipit, id eleifend ipsum condimentum. In nunc sapien, maximus ut pretium eget, cursus id ante. Phasellus sed iaculis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sed ultricies sem. Phasellus eu efficitur magna. Duis volutpat consectetur tellus, ornare congue est commodo quis. Curabitur et erat tellus. Integer purus augue, laoreet ac ullamcorper non, pretium sed orci. Curabitur luctus condimentum lacus, eget posuere turpis posuere a. Maecenas ac lobortis erat, et vestibulum nisl. Suspendisse eget orci vitae nunc tempus imperdiet. Sed scelerisque congue pretium. Sed lobortis velit vel suscipit congue.
        Quisque dui erat, ullamcorper sed fermentum a, congue sed quam. Maecenas scelerisque dictum mauris, vel euismod justo posuere ac. Vivamus consequat pretium ex, eget accumsan sem. Proin suscipit erat sollicitudin tincidunt sagittis. Donec quis congue mauris, non fringilla justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum id massa non orci malesuada fermentum. Duis ac urna ut massa volutpat mollis. In cursus diam dui, et eleifend ex sodales eu.
      </div>

    </div>
  </div>
)

//export default translate('Contact')(Contact)
export default Contact
