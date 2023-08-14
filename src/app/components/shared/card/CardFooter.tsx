interface PropsInterface {
    children: React.ReactNode,
}

export default function CardFooter({children}: PropsInterface) {
    return (
        <div>
            {children}
        </div>
    );
}