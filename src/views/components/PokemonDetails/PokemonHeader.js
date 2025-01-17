export default function PokemonHeader({ name, sprite }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={sprite} alt={name} />
        </div>
    );
}
