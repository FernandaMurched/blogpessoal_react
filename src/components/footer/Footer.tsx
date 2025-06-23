import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Fernanda Murched | Copyright {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <GithubLogoIcon size={48} weight= 'regular' />
                        <LinkedinLogoIcon size={48} weight='regular' />                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer