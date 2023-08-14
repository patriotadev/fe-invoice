import Link from "next/link"

interface ItemInterface {
    label: string,
    url: string
}

interface PropsInterface {
    items: ItemInterface[],
}

export default function Breadcrumb({items}: PropsInterface) {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                {items.map((item: ItemInterface, index: number) => 
                    <li key={index}>
                        <Link href={item.url}>{item.label}</Link>
                    </li>)
                }
            </ul>
        </div>
    )
}