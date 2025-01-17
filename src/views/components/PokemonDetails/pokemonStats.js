export default function PokemonStats({ stats }) {
    return (
        <div>
            <h2>Stats</h2>
            <ul>
                {stats.map((statInfo, index) => (
                    <li key={index}>
                        {statInfo.stat.name}: {statInfo.base_stat}
                    </li>
                ))}
            </ul>
        </div>
    );
}
