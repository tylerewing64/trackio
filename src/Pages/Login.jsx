import * as React from 'react';

export default function Login() {
    return (
    <div className='grid min-h-screen flex items-center justify-center'>

        <div className=' p-20 rounded-2xl border-2 border-gray-350 bg'>
            {/*<img src = 'https://media.discordapp.net/attachments/790697957787041832/1309941860558569542/job-profile-logo-design-element-260nw-602927570.png?ex=674369ed&is=6742186d&hm=adf49ceae60a2a435aaf2ff52402c7aec9ab6b5fd05a547ee483af87e2ded740&=&format=webp&quality=lossless&width=406&height=350'/> */}
            <h1 className='text-4xl font-semibold r'>Log in to Trackio </h1>
            <div className='flex flex-col mt-5'>
                <div className='flex items-center  rounded-3xl border-gray-300  border-2  my-1 p-1 cursor-pointer active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all '>
                    <img src = 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' className='  ml-2 w-6 h-auto inline-block' />
                    <button className='  rounded-lg text-black text-sm ml-4'>Continue With Google</button>
                </div>
                <div className='flex items-center  rounded-3xl border-gray-300  border-2 my-1  p-1 cursor-pointer active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all '>
                    <img src = 'https://cdn.iconscout.com/icon/free/png-256/free-facebook-icon-download-in-svg-png-gif-file-formats--logo-social-media-brand-f-logos-pack-company-icons-1597577.png?f=webp&w=256' className=' ml-2 w-6 h-auto inline-block' />
                    <button className='  rounded-lg text-black text-sm ml-4'>Continue With Facebook</button>
                </div>
                <div className='flex items-center  border-gray-300 rounded-3xl border-2 my-2 p-1 cursor-pointer active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all '>
                    <img src = 'https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png' className='  ml-2 w-6 h-auto inline-block' />
                    <button className='  rounded-lg text-black text-sm ml-4'>Continue With Apple</button>
                </div>
            </div>
            <div className='mt-5'>
                <div>
                    <label className='text-sm'>Email</label>
                    <input 
                        className='w-full border-2 border-gray-300 rounded-m p-2 mt-1 bg-transparent'
                        placeholder='Enter your email'
                        />
                </div>
                <div>
                    <label className='text-sm '>Password</label>
                    <input 
                        
                        className='w-full border-2 border-gray-300 rounded-m p-2 mt-1 bg-transparent'
                        placeholder='Enter your password'
                        type="password"
                        />
                </div>
                
                    
             
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-lg bg-dark-green text-white text-m font-bold'>Sign in</button>
                    
                    <button className='font-medium text-base '><u>Forgot password</u></button>
                </div>
            </div>
            
        </div>
    </div>
    )
}