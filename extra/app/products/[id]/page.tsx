
export default function Page({ params }: { params: { id: string } }) {
    return (
        <main>
            <h1>your product id is {params.id}</h1>
        </main>
    );
}