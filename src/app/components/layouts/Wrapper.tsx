interface PropsInterface {
    children: React.ReactNode
}

export default function Wrapper({children}: PropsInterface) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="container mx-auto">
                {children}
            </div>
        </main>
    )
}