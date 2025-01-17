export default function PokemonTypes({ types }) {
    return (
        <div>
            <h2>Types</h2>
            <ul>
                {types.map((typeInfo, index) => (
                    <li key={index}>{typeInfo.type.name}</li>
                ))}
            </ul>
        </div>
    );
}
