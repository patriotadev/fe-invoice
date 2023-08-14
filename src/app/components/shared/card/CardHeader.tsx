interface PropsInterface {
    children: React.ReactNode,
}

export default function CardHeader({children}: PropsInterface) {
    return (
        <div>
            {children}
        </div>
    );
}