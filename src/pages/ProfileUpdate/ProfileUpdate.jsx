import React, { useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'
const ProfileUpdate = () => {
  const [image, setImage] = useState(false);
  const [name, Setname] = useState("");
  const [bio, setbio] = useState("");
  
  return (
    <div className='profile'>
      <div className='profile-container'>
        <form>
          <h3>Profile Details</h3>
          <label htmlFor='avatar'>

            <input onChange={(e)=>setImage(e.target.files[0])}    type='file' id='avatar' accept='.png,.jpg,.jpeg' hidden />
            <img src={image? URL.createObjectURL(image) :assets.avatar_icon} alt='' />
            upload profile image
          </label>
          <input onChange={(e)=>Setname(e.target.value)} value={name} type='text' placeholder='Your Name' required />
          <textarea onChange={(e)=>setbio(e.target.bio)} value={bio} placeholder='write profile bio' required></textarea>
          <button type='submit'>Save</button>
        </form>
        <img className='profile-pic' src={image? URL.createObjectURL(image) :assets.logo_icon} alt=''/>
      </div>
      
    </div>
  )
}
export default ProfileUpdate