import React from 'react'
import s from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Post = () => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.info}>
          <h1 className={s.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </h1>
          <p className={s.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos itaque possimus facere dolorem ipsum eveniet qui eius vitae numquam earum suscipit voluptatibus deleniti excepturi illo aut, ut soluta dolor temporibus.
          </p>
          <div className={s.author}>
            <Image src="" alt='' width={40} height={40} className={s.avatar} />
            <span className={s.username}>John Doe</span>
          </div>
        </div>
        <div className={s.imageContainer}>
          <Image src="https://images.unsplash.com/photo-1693682932325-050d4cc2ff74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Xzh6Rkh1aFJoeW98fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt='' fill={true} className={s.image} />
        </div>
      </div>
      <div className={s.content}>
        <p className={s.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur optio hic, dolor repudiandae provident quam rem neque ipsum, unde earum eligendi placeat? Molestias reiciendis culpa aperiam labore sunt corrupti laborum!
          Dolor vero asperiores necessitatibus doloribus iste fugiat aliquam impedit odio culpa veritatis soluta animi, odit quos earum dolorem at a. Quidem consequatur saepe illum, laudantium autem possimus. Ut, ducimus esse?
          Minus omnis, sed voluptates hic libero natus accusantium qui praesentium ipsum quasi non labore magni earum inventore rerum cupiditate saepe. Earum voluptatem nesciunt exercitationem laboriosam eos cupiditate numquam sed culpa!
          Totam repellendus perspiciatis voluptatem doloribus dignissimos laborum, itaque voluptas rem eligendi nihil veritatis illum optio corporis voluptates deleniti, quae architecto harum, velit fugit. Dicta illum, consequuntur pariatur quaerat a dolorem!
          Asperiores placeat pariatur earum delectus praesentium beatae architecto, voluptatem dicta ut, eius, ipsum voluptate natus! Nisi maxime, minima sed eos in voluptas adipisci ipsum perspiciatis quasi vitae animi tempore itaque!
        </p>
      </div>
    </div>
  )
}

export default Post