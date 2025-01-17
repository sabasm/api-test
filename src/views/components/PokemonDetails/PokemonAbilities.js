export default function PokemonAbilities({ abilities }) {
    return (
        <div>
            <h2>Abilities</h2>
            <ul>
                {abilities.map((abilityInfo, index) => (
                    <li key={index}>
                        {abilityInfo.ability.name}
                        {abilityInfo.is_hidden && " (Hidden Ability)"}
                    </li>
                ))}
            </ul>
        </div>
    );
}
