import React from 'react'
import './ExploreMenu.css'
import { menu_list } from './../../assets/frontend_assets/assets'

function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, tenetur natus! Eaque, quisquam. Similique eaque eligendi quasi, nesciunt saepe quia iusto facilis, quis repudiandae consequatur dignissimos eos quo dolorum animi obcaecati odio! Velit dolor eveniet porro voluptas minima. Amet inventore nesciunt eos unde deleniti officiis quas provident corrupti dolores autem. Sunt velit quod officiis quas adipisci quos mollitia enim laudantium, architecto sapiente! Temporibus eius veniam sapiente fugiat est quos aspernatur laborum architecto odio consectetur omnis magni mollitia a ratione repudiandae aperiam, quidem modi dolorum consequatur officiis. Aperiam deleniti asperiores quibusdam velit deserunt aspernatur voluptatum, molestiae tempore saepe eveniet doloribus eaque?</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item)}  key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name+" image"} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu