interface PropsInterface {
    children: React.ReactNode,
}

export default function Card({children}: PropsInterface) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
           {children}
        </div>
    )
}