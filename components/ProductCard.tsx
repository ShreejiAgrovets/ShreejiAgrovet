import Image from 'next/image'

export default function ProductCard({ name, description, image }: { name: string, description: string, image: string }) {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <div className="relative h-56 w-full">
                <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{name}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    )
}
