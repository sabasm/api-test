export default function PokemonBasicInfo({ height, weight, baseExperience }) {
    return (
        <div>
            <p>Height: {height / 10} m</p>
            <p>Weight: {weight / 10} kg</p>
            <p>Base Experience: {baseExperience}</p>
        </div>
    );
}
