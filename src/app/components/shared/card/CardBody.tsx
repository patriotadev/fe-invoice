interface PropsInterface {
    children: React.ReactNode,
}

export default function CardBody({children}: PropsInterface) {
    return (
        <div>
            {children}
        </div>
    );
}