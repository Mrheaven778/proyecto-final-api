import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PeticionesProps {
    method: string
    endpoint: string
    description: string
}

function Peticiones({ method, endpoint, description }: PeticionesProps) {
    return (
        <li className="flex items-center flex-wrap justify-center gap-3">
            <p> {description}
            </p>
            <span className="font-bold bg-slate-900 px-2 py-1 rounded-lg text-white">{method}</span>
            <Button className="p-1" variant="link">
                <Link href="/api/champion">
                    {endpoint}
                </Link>
            </Button>
        </li>
    )
}

export default Peticiones