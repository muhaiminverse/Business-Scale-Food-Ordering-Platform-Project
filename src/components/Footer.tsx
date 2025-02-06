const Footer = () => {
    return (
        <div className="bg-orange-500">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5">
                <span className="text-3xl text-white font-bold tracking-tight">
                    MernEats.com
                    <span className="flex flex-row font-light text-sm">Project by Muhaimin Hossain</span>
                </span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </span>
            </div>
        </div>
    )
}

export default Footer;